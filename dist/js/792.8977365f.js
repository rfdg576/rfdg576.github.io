"use strict";(self["webpackChunkcommunityproject"]=self["webpackChunkcommunityproject"]||[]).push([[792],{792:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(6768),l=n(4232),o=n(4373),r=n(144);const u=e=>((0,a.Qi)("data-v-16803b39"),e=e(),(0,a.jt)(),e),s={class:"job-listing"},c={class:"card-container"},i=u((()=>(0,a.Lk)("strong",null,"描述:",-1))),p=u((()=>(0,a.Lk)("strong",null,"作者:",-1))),v=u((()=>(0,a.Lk)("strong",null,"电话:",-1))),g=u((()=>(0,a.Lk)("strong",null,"微信:",-1))),d=u((()=>(0,a.Lk)("strong",null,"发布日期:",-1)));var k={__name:"EmergencyComponent",setup(e){const t=(0,r.KR)([]),n=(0,r.KR)(1),u=(0,r.KR)(10),k=(0,a.EW)((()=>{const e=(n.value-1)*u.value;return t.value.slice(e,e+u.value)})),h=e=>{n.value=e},m=e=>{u.value=e,n.value=1},C=async()=>{try{const e=await o.A.get("http://localhost:8090/emergency",{withCredentials:!0,timeout:1e4});e.data?(console.log("获取到的数据:",e.data),t.value=e.data):console.error("响应体为空")}catch(e){console.error("获取职位数据失败:",e.message)}},L=()=>{const e="0123456789ABCDEF";let t="#";for(let n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t};return(0,a.sV)(C),(e,o)=>{const r=(0,a.g2)("el-pagination");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",c,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(k.value,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"job-card",style:(0,l.Tr)({backgroundColor:L()})},[(0,a.Lk)("h3",null,(0,l.v_)(e.type),1),(0,a.Lk)("p",null,[i,(0,a.eW)(" "+(0,l.v_)(e.content),1)]),(0,a.Lk)("p",null,[p,(0,a.eW)(" "+(0,l.v_)(e.author),1)]),(0,a.Lk)("p",null,[v,(0,a.eW)(" "+(0,l.v_)(e.phone),1)]),(0,a.Lk)("p",null,[g,(0,a.eW)(" "+(0,l.v_)(e.wechat),1)]),(0,a.Lk)("p",null,[d,(0,a.eW)(" "+(0,l.v_)(e.date),1)])],4)))),128))]),(0,a.bF)(r,{onCurrentChange:h,onSizeChange:m,"current-page":n.value,"page-sizes":[5,10,20],"page-size":u.value,total:t.value.length,layout:"total, sizes, prev, pager, next, jumper",class:"pagination"},null,8,["current-page","page-size","total"])])}}},h=n(1241);const m=(0,h.A)(k,[["__scopeId","data-v-16803b39"]]);var C=m}}]);
//# sourceMappingURL=792.8977365f.js.map