import{a as c,h as d}from"./index-Djkh5ZbL.js";function p(r,o,t,l=!1){const s=[0];if(t.decorations?.some(e=>typeof e.start=="number"||typeof e.end=="number")===!0)for(let e=r.indexOf(`
`);e!==-1;e=r.indexOf(`
`,e+1))s.push(e+1);const n={type:"element",tagName:"code",properties:{},children:[]},i=c(o.tokens,{decorations:t.decorations,mergeWhitespaces:t.mergeWhitespaces,lineOffsets:s,cacheHtmlStyles:l});for(let e=0;e<i.length;e++)e>0&&n.children.push({type:"text",value:`
`}),n.children.push(i[e]);const a={type:"root",children:[{type:"element",tagName:"pre",properties:{class:"diffs",style:o.rootStyle===!1?void 0:o.rootStyle??[o.fg!=null?`color:${o.fg}`:"",o.bg!=null?`background-color:${o.bg}`:""].filter(Boolean).join(";"),tabIndex:0},children:[n]}]};return d(a)}export{p as t};
