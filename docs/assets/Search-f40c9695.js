import{b as i,r as t,j as e,P as o,M as c,S as u,a as h,L as x}from"./index-b5b28e23.js";import{b as d,a as j}from"./constants-6702d813.js";const f=()=>{const{query:a}=i(),[r,n]=t.useState(void 0);return t.useEffect(()=>{fetch(`${d}/search/movie?query=${a}&api_key=${j}`).then(s=>s.json()).then(s=>n(s.results))},[a]),e.jsxs(o,{children:[e.jsx(c,{children:e.jsxs("h1",{children:["Currently searching for: ",a]})}),r?e.jsx(u,{row:!0,children:r==null?void 0:r.map(s=>e.jsx(h,{movie:s},`${s.id}_${s.title}`))}):e.jsx(x,{})]})};export{f as Search,f as default};
