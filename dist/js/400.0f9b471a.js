"use strict";(self["webpackChunkcommunityproject"]=self["webpackChunkcommunityproject"]||[]).push([[400],{400:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(6768),n=a(4373),o=a(1219),r=a(144);const s={class:"job-listing"},u={class:"pagination-container"};var c={__name:"MemencyComponent",setup(e){const t=(0,r.KR)([]),a=(0,r.KR)(""),c=(0,r.KR)(1),i=(0,r.KR)(10),p=(0,l.EW)((()=>{const e=a.value.trim().toLowerCase();return e?t.value.filter((t=>t.author.toLowerCase().includes(e))):t.value})),b=(0,l.EW)((()=>{const e=(c.value-1)*i.value;return p.value.slice(e,e+i.value)})),d=e=>{c.value=e},v=e=>{i.value=e,c.value=1},g=async()=>{try{const e=await n.A.get("http://localhost:8090/emergency",{withCredentials:!0,timeout:1e4});e.data?(console.log("获取到的数据:",e.data),t.value=e.data):console.error("响应体为空")}catch(e){console.error("获取职位数据失败:",e.message)}},h=async e=>{try{const a=await n.A.delete(`http://localhost:8090/delency/${e.id}`,{withCredentials:!0,timeout:1e4});if(200===a.status){const a=t.value.indexOf(e);a>-1&&(t.value.splice(a,1),o.nk.success("成功删除"))}}catch(a){console.error("删除职位失败:",a.message),o.nk.error("删除职位失败，请重试。")}};return(0,l.sV)(g),(e,t)=>{const a=(0,l.g2)("el-table-column"),n=(0,l.g2)("el-button"),o=(0,l.g2)("el-table"),r=(0,l.g2)("el-pagination");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.bF)(o,{data:b.value,style:{width:"100%"}},{default:(0,l.k6)((()=>[(0,l.bF)(a,{label:"职位类型",prop:"type"}),(0,l.bF)(a,{label:"描述",prop:"content"}),(0,l.bF)(a,{label:"作者",prop:"author"}),(0,l.bF)(a,{label:"电话",prop:"phone"}),(0,l.bF)(a,{label:"微信",prop:"wechat"}),(0,l.bF)(a,{label:"发布日期",prop:"date"}),(0,l.bF)(a,{label:"操作"},{default:(0,l.k6)((({row:e})=>[(0,l.bF)(n,{type:"danger",size:"mini",onClick:t=>h(e)},{default:(0,l.k6)((()=>[(0,l.eW)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),(0,l.Lk)("div",u,[(0,l.bF)(r,{onCurrentChange:d,onSizeChange:v,"current-page":c.value,"page-sizes":[5,10,20],"page-size":i.value,total:p.value.length,layout:"total, sizes, prev, pager, next, jumper"},null,8,["current-page","page-size","total"])])])}}},i=a(1241);const p=(0,i.A)(c,[["__scopeId","data-v-457a2b70"]]);var b=p}}]);
//# sourceMappingURL=400.0f9b471a.js.map