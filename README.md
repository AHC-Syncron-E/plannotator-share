# Plannotator Share Portal

Self-hosted deployment of the [Plannotator](https://github.com/backnotprop/plannotator) share portal for AHC Syncron-E. Hosted on GitHub Pages at:

**https://ahc-syncron-e.github.io/plannotator-share**

This is a static single-page application that renders shared plan annotations. It has no backend or database — plan data is encoded in the URL hash and rendered client-side.

## How It Works

When you run Plannotator locally (via Claude Code, OpenCode, or the CLI) and click **Copy Share Link**, the link points to this portal instead of the public `share.plannotator.ai` because of the `PLANNOTATOR_SHARE_URL` environment variable set in your shell config.

Small plans are encoded entirely in the URL hash — no server involved. Large plans that don't fit in a URL can optionally use a paste service (not deployed here).

## Local Environment Setup

Add this to your `~/.zshrc` (or equivalent shell config):

```bash
export PLANNOTATOR_SHARE_URL=https://ahc-syncron-e.github.io/plannotator-share
```

This tells the local Plannotator CLI to generate share links pointing to this self-hosted portal.

## Automated Updates

A [GitHub Actions workflow](.github/workflows/update-portal.yml) runs daily at 08:00 UTC and automatically:

1. Fetches the latest release tag from [backnotprop/plannotator](https://github.com/backnotprop/plannotator)
2. Compares it against the version in the `VERSION` file
3. If a new version is available: clones the upstream source, builds the portal with the correct base path, patches the share URL, and commits directly to `main`
4. GitHub Pages deploys the update automatically

You can also trigger the workflow manually from the **Actions** tab — useful for retries or forcing a rebuild of a specific version.

### Manual trigger with a specific version

Go to **Actions** > **Update Plannotator Share Portal** > **Run workflow**, and optionally enter a version number (e.g., `0.19.2`) in the "Force rebuild" input. Leave it blank to auto-detect the latest.

## Manual Update Process

If the workflow fails or you need to update locally, here's the full process for reference.

### Prerequisites

- [bun](https://bun.sh/) — install with `curl -fsSL https://bun.sh/install | bash`
- Git access to both this repo and the [upstream source repo](https://github.com/backnotprop/plannotator)
- The upstream source repo cloned locally (e.g., `~/Dev/plannotator`)

### Steps

**1. Check out the new tag in the source repo**

```bash
cd ~/Dev/plannotator
git fetch --tags
git checkout v<VERSION>
```

**2. Install dependencies and build the portal**

```bash
bun install
cd apps/portal
npx vite build --base=/plannotator-share/
```

The `--base=/plannotator-share/` flag is required so that asset paths work correctly on GitHub Pages (project sites serve from `/<repo-name>/`).

**3. Replace the contents of this repo**

```bash
cd ~/Dev/plannotator-share

# Remove old content (keeps .git, .github, README.md, VERSION)
rm -rf assets index.html 404.html .nojekyll

# Copy new build output
cp -r ~/Dev/plannotator/apps/portal/dist/* .

# Re-add .nojekyll (disables Jekyll processing on GitHub Pages)
touch .nojekyll

# Copy index.html as 404.html (enables SPA client-side routing)
cp index.html 404.html
```

**4. Patch the default share URL**

The built JS bundle hardcodes `share.plannotator.ai` as the default share URL used by the portal's "Copy Share Link" button. Replace it so links generated from the portal itself point back to this self-hosted instance:

```bash
sed -i '' 's|https://share.plannotator.ai|https://ahc-syncron-e.github.io/plannotator-share|g' assets/index-*.js
```

Verify the replacement:

```bash
grep -c 'share.plannotator.ai' assets/index-*.js        # Should return 0
grep -c 'ahc-syncron-e.github.io/plannotator-share' assets/index-*.js  # Should return 2
```

**5. Update VERSION and commit**

```bash
echo "<VERSION>" > VERSION
git add -A
git commit -m "Deploy plannotator share portal v<VERSION>"
git push origin main
```

**6. Verify**

Allow a minute for GitHub Pages to deploy, then open an existing share link to confirm the portal loads and renders correctly.

## Repo Structure

```
plannotator-share/
├── .github/workflows/
│   └── update-portal.yml  # Automated daily update workflow
├── .nojekyll              # Disables Jekyll processing on GitHub Pages
├── 404.html               # Copy of index.html for SPA routing
├── index.html             # Main entry point
├── VERSION                # Currently deployed version (read by the workflow)
├── assets/                # Compiled JS/CSS bundles and images (Vite output)
│   ├── index-*.js         # Main application bundle (~4 MB)
│   ├── index-*.css        # Stylesheet (Tailwind + Highlight.js theme)
│   ├── *.js               # Code-split chunks (diagrams, KaTeX, etc.)
│   └── *.png              # Sprite sheets and icons
└── README.md              # This file
```

## Version History

| Version | Date       | Commit Message                            |
|---------|------------|-------------------------------------------|
| v0.19.1 | 2026-04-25 | Deploy plannotator share portal v0.19.1  |
| v0.19.0 | 2026-04-21 | Deploy plannotator share portal v0.19.0  |
