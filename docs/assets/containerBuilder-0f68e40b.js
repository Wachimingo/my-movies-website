import{j as w}from"./index-641ae2ae.js";const d="_container_1hfn3_1",m="_fit_1hfn3_17",$="_around_1hfn3_21",p="_between_1hfn3_25",b="_row_1hfn3_29",g="_column_1hfn3_34",j="_page_1hfn3_38",x="_center_1hfn3_43",n={container:d,"full-width":"_full-width_1hfn3_13",fit:m,around:$,between:p,row:b,column:g,page:j,center:x},_="column",B=(r,{children:i,column:f,row:s,className:o,space:a,fit:u,onClick:l,role:h},e)=>{let t=_;f&&(t=_),s&&(t="row");let c="full-width";return u&&(c="fit"),w.jsx(r,{children:i,className:`${n.container} ${n[t]} ${n[a??"around"]} ${n[c]} ${o?" "+o:""}${e?" "+e:""}`,onClick:l,role:h})},E=B;export{E as c,n as s};
