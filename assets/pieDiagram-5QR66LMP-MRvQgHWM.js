import{p as at}from"./chunk-JWPE2WC7-fzY8Zeh_.js";import{Y as b,a0 as B,b9 as rt,g as nt,s as it,a as ot,b as st,x as lt,v as ct,_ as g,l as G,c as ut,P as dt,S as gt,ab as pt,d as ht,B as ft,Q as mt}from"./mermaid.core-BGZf_gvZ.js";import{p as vt}from"./cynefin-OW5HDTMX-CfpeRCYK.js";import{d as Y}from"./arc-DlsS7MCq.js";import{o as xt}from"./ordinal-Cboi1Yqb.js";import"./index-Blxz4ycf.js";import"./init-Gi6I4Gst.js";function St(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function yt(t){return t}function wt(){var t=yt,n=St,y=null,T=b(0),l=b(B),p=b(0);function i(e){var r,s=(e=rt(e)).length,h,w,$=0,f=new Array(s),o=new Array(s),D=+T.apply(this,arguments),E=Math.min(B,Math.max(-B,l.apply(this,arguments)-D)),k,L=Math.min(Math.abs(E)/s,p.apply(this,arguments)),u=L*(E<0?-1:1),A;for(r=0;r<s;++r)(A=o[f[r]=r]=+t(e[r],r,e))>0&&($+=A);for(n!=null?f.sort(function(M,m){return n(o[M],o[m])}):y!=null&&f.sort(function(M,m){return y(e[M],e[m])}),r=0,w=$?(E-s*u)/$:0;r<s;++r,D=k)h=f[r],A=o[h],k=D+(A>0?A*w:0)+u,o[h]={data:e[h],index:r,value:A,startAngle:D,endAngle:k,padAngle:L};return o}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:b(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(T=typeof e=="function"?e:b(+e),i):T},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:b(+e),i):l},i.padAngle=function(e){return arguments.length?(p=typeof e=="function"?e:b(+e),i):p},i}var At=mt.pie,I={sections:new Map,showData:!1},_=I.sections,V=I.showData,Ct=structuredClone(At),$t=g(()=>structuredClone(Ct),"getConfig"),Dt=g(()=>{_=new Map,V=I.showData,ft()},"clear"),bt=g(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);_.has(t)||(_.set(t,n),G.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),Tt=g(()=>_,"getSections"),kt=g(t=>{V=t},"setShowData"),zt=g(()=>V,"getShowData"),Z={getConfig:$t,clear:Dt,setDiagramTitle:ct,getDiagramTitle:lt,setAccTitle:st,getAccTitle:ot,setAccDescription:it,getAccDescription:nt,addSection:bt,getSections:Tt,setShowData:kt,getShowData:zt},Et=g((t,n)=>{at(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Mt={parse:g(async t=>{const n=await vt("pie",t);G.debug(n),Et(n,Z)},"parse")},Rt=g(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Lt=Rt,Pt=g(t=>{const n=[...t.values()].reduce((l,p)=>l+p,0),y=[...t.entries()].map(([l,p])=>({label:l,value:p})).filter(l=>l.value/n*100>=1);return wt().value(l=>l.value).sort(null)(y)},"createPieArcs"),Wt=g((t,n,y,T)=>{G.debug(`rendering pie chart
`+t);const l=T.db,p=ut(),i=dt(l.getConfig(),p.pie),e=40,r=18,s=4,h=450,w=h,$=gt(n),f=$.append("g");f.attr("transform","translate("+w/2+","+h/2+")");const{themeVariables:o}=p;let[D]=pt(o.pieOuterStrokeWidth);D??=2;const E=i.legendPosition,k=i.textPosition,L=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,u=Math.min(w,h)/2-e,A=Y().innerRadius(L*u).outerRadius(u),M=Y().innerRadius(u*k).outerRadius(u*k),m=f.append("g");m.append("circle").attr("cx",0).attr("cy",0).attr("r",u+D/2).attr("class","pieOuterCircle");const P=l.getSections(),q=Pt(P),J=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let F=0;P.forEach(a=>{F+=a});const U=q.filter(a=>(a.data.value/F*100).toFixed(0)!=="0"),H=xt(J).domain([...P.keys()]);m.selectAll("mySlices").data(U).enter().append("path").attr("d",A).attr("fill",a=>H(a.data.label)).attr("class",a=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===a.data.label&&(c+=" highlighted"),c}),m.selectAll("mySlices").data(U).enter().append("text").text(a=>(a.data.value/F*100).toFixed(0)+"%").attr("transform",a=>"translate("+M.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const K=f.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...P.entries()].map(([a,c])=>({label:a,value:c})),C=f.selectAll(".legend").data(R).enter().append("g").attr("class","legend");C.append("rect").attr("width",r).attr("height",r).style("fill",a=>H(a.label)).style("stroke",a=>H(a.label)),C.append("text").attr("x",r+s).attr("y",r-s).text(a=>l.getShowData()?`${a.label} [${a.value}]`:a.label);const z=Math.max(...C.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0));let W=h,N=w+e;const d=r+s,O=R.length*d;switch(E){case"center":C.attr("transform",(a,c)=>{const v=d*R.length/2,x=-z/2-(r+s),S=c*d-v;return"translate("+x+","+S+")"});break;case"top":W+=O,C.attr("transform",(a,c)=>{const v=u,x=-z/2-(r+s),S=c*d-v;return`translate(${x}, ${S})`}),m.attr("transform",()=>`translate(0, ${O+d})`);break;case"bottom":W+=O,C.attr("transform",(a,c)=>{const v=-u-d,x=-z/2-(r+s),S=c*d-v;return"translate("+x+","+S+")"});break;case"left":N+=r+s+z,C.attr("transform",(a,c)=>{const v=d*R.length/2,x=-u-(r+s),S=c*d-v;return"translate("+x+","+S+")"}),m.attr("transform",()=>`translate(${z+r+s}, 0)`);break;case"right":default:N+=r+s+z,C.attr("transform",(a,c)=>{const v=d*R.length/2,x=12*r,S=c*d-v;return"translate("+x+","+S+")"});break}const j=K.node()?.getBoundingClientRect().width??0,tt=w/2-j/2,et=w/2+j/2,Q=Math.min(0,tt),X=Math.max(N,et)-Q;$.attr("viewBox",`${Q} 0 ${X} ${W}`),ht($,W,X,i.useMaxWidth)},"draw"),_t={draw:Wt},Ut={parser:Mt,db:Z,renderer:_t,styles:Lt};export{Ut as diagram};
