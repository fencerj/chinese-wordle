import{d as J,s as Y,a as v,o as r,c as d,b as u,n as I,t as g,e as k,F as w,r as B,f as p,u as c,w as D,g as H,T as he,h as b,I as j,i as fe,j as P,k as x,l as m,m as z,p as Q,v as Fe,q as Ee,x as X,y as ge,z as xe,A as Ce,B as ye}from"./vendor.54411cb3.js";const pe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};pe();const O=J("idioms",{state:()=>({allIdioms:Y({}),freqIdioms:Y([])}),getters:{isValidIdiom(e){return s=>s in e.allIdioms},randomIdiom(e){return()=>{const s=Math.floor(Math.random()*e.freqIdioms.length);return e.freqIdioms[s]}}},actions:{setAllIdioms(e){this.allIdioms=e},setFreqIdioms(e){this.freqIdioms=e}}}),Z=[..."bpmfdtnlgkhjqxzcsr"],ee=["zh","ch","sh"],we=[...Z,...ee],ve=["a","o","e","ai","ei","ao","ou","an","en","ang","eng","er","i","ia","ie","iao","iou","ian","in","iang","ing","iong","u","ua","uo","uai","uei","uan","uen","uang","ueng","\xFC","\xFCe","\xFCan","\xFCn","ong"],ue=["\u0304","\u0301","\u030C","\u0300"],se=e=>{let s=0;for(let l=0;l<ue.length;l++)e.normalize("NFD").includes(ue[l])&&(s=l+1);return[e.normalize("NFD").replace(/\u0304|\u0301|\u030C|\u0300/,"").normalize(),s]},M=e=>{switch(e){case"iu":return"iou";case"ui":return"uei";case"un":return"uen";default:return e}},Be=e=>{let[s,t]=se(e);if("jqx".includes(s[0])&&s[1]==="u"&&(s=s.replace("u","\xFC")),s.startsWith("y"))switch(s[1]){case"i":s=s.slice(1);break;case"u":s=`\xFC${s.slice(2)}`;break;default:s=`i${s.slice(1)}`;break}else s.startsWith("w")&&(s=s[1]==="u"?s.slice(1):`u${s.slice(1)}`);return ee.includes(s.slice(0,2))?[s.slice(0,2),M(s.slice(2)),t]:Z.includes(s.charAt(0))?[s.charAt(0),M(s.slice(1)),t]:["",M(s),t]},te=e=>e.split(" ").map(Be),be=(e,s)=>e[0]===s[0]&&e[1]===s[1]&&e[2]===s[2];var R;(function(e){e[e.NotExists=0]="NotExists",e[e.Exists=1]="Exists",e[e.CorrectPosition=2]="CorrectPosition"})(R||(R={}));var ne;(function(e){e[e.BothEverGuessed=0]="BothEverGuessed",e[e.BothExistsInOneGuess=1]="BothExistsInOneGuess",e[e.CombinationCorrect=2]="CombinationCorrect",e[e.PositionAndToneCorrect=3]="PositionAndToneCorrect"})(ne||(ne={}));var le;(function(e){e[e.Combination=0]="Combination",e[e.CombinationAndTone=1]="CombinationAndTone",e[e.Char=2]="Char"})(le||(le={}));const q={easy:{name:"\u7B80\u5355",enabledHints:[{on:0,give:0},{on:2,give:1},{on:3,give:2}]},normal:{name:"\u6B63\u5E38",enabledHints:[{on:0,give:0},{on:2,give:1}]},medium:{name:"\u4E2D\u7B49",enabledHints:[{on:1,give:0},{on:2,give:1}]},hard:{name:"\u56F0\u96BE",enabledHints:[{on:1,give:0}]},insane:{name:"\u795E\u4ED9",enabledHints:[]}},ie=J("guess",{state:()=>({answerIdiom:null,guessedIdioms:[],hints:[],totalChances:8,difficulty:q.easy}),getters:{answerOrigPinyin(e){return e.answerIdiom===null?null:O().allIdioms[e.answerIdiom]},answerPinyin(){return this.answerOrigPinyin===null?null:te(this.answerOrigPinyin)},answerPinyinFlatten(){return this.answerPinyin===null?null:this.answerPinyin.flatMap(([e,s])=>[e,s])},answerSyllables(){return this.answerPinyin===null?null:this.answerPinyin.map(([e,s])=>e+s)},compareIdiomPinyin(){return e=>{if(this.answerPinyinFlatten===null||this.answerSyllables===null)throw new Error("answer is not set");return e.map(([s,t],l)=>{const[n,i]=[s,t].map((a,E)=>this.answerPinyin[l][E]===a?2:this.answerPinyinFlatten.includes(a)?1:0),o=this.answerSyllables.includes(s+t);return[n,i,o]})}},guesses(){const e=O();return this.guessedIdioms.map(s=>{const t=e.allIdioms[s],l=te(t);return{idiom:s,pinyin:l,origPinyin:t,result:this.compareIdiomPinyin(l)}})},guessesPinyin(){return this.guesses.map(e=>e.pinyin)},guessesPinyinFlatten(){return this.guessesPinyin.flatMap(e=>e.flatMap(([s,t])=>[s,t]))},won(){return this.guesses.length!==0&&this.guesses[this.guesses.length-1].result.every(e=>e[0]===2&&e[1]===2)},lost(){return this.guessedIdioms.length>=this.totalChances&&!this.won},includeList(){return this.answerPinyinFlatten===null?[]:this.answerPinyinFlatten.filter(e=>this.guessesPinyinFlatten.includes(e))},excludeList(){return this.answerPinyinFlatten===null?[]:this.guessesPinyinFlatten.filter(e=>!this.answerPinyinFlatten.includes(e))},difficultyName(){return this.difficulty.name}},actions:{reset(){this.answerIdiom=null,this.guessedIdioms=[],this.hints=[]},initAnswerIdiom(e){this.answerIdiom=e},guessIdiom(e){return O().isValidIdiom(e)?(this.guessedIdioms.push(e),this.won||this.updateHints(),!0):!1},updateHints(){if(!this.answerIdiom||!this.answerOrigPinyin)return[];const e=this.guesses[this.guesses.length-1],s=e.pinyin.map(([n,i])=>n+i),t=e.pinyin.flatMap(([n,i])=>[n,i]),l=[];for(const[n,i]of this.answerPinyin.entries()){const[o,a]=i,E=o+a,C=this.answerOrigPinyin.split(" ")[n],A=Math.max(...this.hints.filter(F=>F.charIndex===n).map(F=>F.level)),V=this.difficulty.enabledHints.filter(F=>F.give>A);let y=-1;for(const F of V)F.give<=y||(F.on===0&&this.guessesPinyinFlatten.includes(o)&&this.guessesPinyinFlatten.includes(a)&&(t.includes(o)||t.includes(a))||F.on===1&&t.includes(o)&&t.includes(a)||F.on===2&&s.includes(E)||F.on===3&&be(i,e.pinyin[n]))&&(y=F.give);if(y===-1)continue;let _;switch(y){case 2:_=this.answerIdiom.charAt(n);break;case 0:_=se(C)[0];break;case 1:_=C;break}l.push({charIndex:n,content:_,level:y})}this.hints.push(...l)}}}),De={class:"p-0.5 w-16 h-16"},Ae={class:"text-sm font-mono font-semibold"},_e=u("div",{class:"text-blue-500 text-xs"}," + ",-1),Ie={key:1,class:"text-center"},$e={class:"mt-1 text-center"},oe=v({props:{char:null,pinyin:null,guessResults:null},setup(e){const s={[R.NotExists]:"gray-500",[R.Exists]:"yellow-500",[R.CorrectPosition]:"green-500"};return(t,l)=>(r(),d("div",De,[u("div",Ae,[Array.isArray(e.pinyin)&&e.guessResults?(r(),d("div",{key:0,class:I(["flex justify-center items-baseline decoration-green-500",e.guessResults[2]?["underline"]:[]]),"w:underline":"offset-1 double"},[u("div",{class:I(`text-${s[e.guessResults[0]]}`)},g(e.pinyin[0]||"\xD8"),3),_e,u("div",{class:I(`text-${s[e.guessResults[1]]}`)},g(e.pinyin[1]),3)],2)):(r(),d("div",Ie,g(e.pinyin),1))]),u("div",$e,g(e.char),1)]))}}),ke={class:"flex justify-center mt-1 first-child:border-l-2 children:border-2 children:border-l-0 children:border-dashed children:border-red-200"},Pe=v({props:{idiom:null,pinyin:null,guessResults:null},setup(e){const s=e,t=k(()=>s.pinyin.map((l,n)=>({char:s.idiom.charAt(n),pinyin:l,guessResults:s.guessResults[n]})));return(l,n)=>(r(),d("div",ke,[(r(!0),d(w,null,B(c(t),(i,o)=>(r(),p(oe,{key:o,char:i.char,pinyin:i.pinyin,"guess-results":i.guessResults},null,8,["char","pinyin","guess-results"]))),128))]))}});var re=(e,s)=>{const t=e.__vccOpts||e;for(const[l,n]of s)t[l]=n;return t};const Ve={};function Re(e,s){return r(),p(he,{mode:"out-in","enter-active-class":"duration-400 ease-out","enter-from-class":"transform opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-400 ease-in","leave-from-class":"opacity-100","leave-to-class":"transform opacity-0"},{default:D(()=>[H(e.$slots,"default")]),_:3})}var N=re(Ve,[["render",Re]]);const Se={class:"relative bg-white rounded-lg mx-3 max-w-md p-2","w:border":"t-9 teal-600","w:shadow":"lg gray-500"},je={class:"absolute right-4 top-2"},L=v({props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:s}){return(t,l)=>(r(),p(N,null,{default:D(()=>[e.modelValue?(r(),d("div",{key:0,class:"fixed w-full h-full flex justify-center items-center z-10","w:bg":"opacity-25 black",onClick:l[1]||(l[1]=fe(n=>s("update:modelValue",!e.modelValue),["self"]))},[u("div",Se,[u("div",je,[b(c(j),{class:"text-xl text-red-900",icon:"mdi:close-circle-outline",onClick:l[0]||(l[0]=n=>s("update:modelValue",!e.modelValue))})]),H(t.$slots,"default")])])):P("",!0)]),_:3}))}}),ae=(e,s)=>{let t="";for(let l=0;l<s.length;l++){const n=s.charCodeAt(l),i=e.charCodeAt(l%e.length);t+=String.fromCharCode(n^i)}return t},Oe={class:"flex justify-center first-child:border-l-2 children:border-2 children:border-l-0 children:border-dashed children:border-red-200"},qe=v({props:{answer:null,answerPinyin:null,won:{type:Boolean}},setup(e){const s=e,t=x(!0),l=k(()=>s.answerPinyin.split(" ").map((a,E)=>({char:s.answer.charAt(E),pinyin:a}))),n=k(()=>{const a=new URL(location.href);return a.searchParams.set("idiom",ae("cnwordle",s.answer)),a.href}),i=navigator.userAgent.includes("MicroMessenger"),o=()=>{i?history.pushState(null,"",n.value):navigator.clipboard.writeText(n.value)};return(a,E)=>(r(),p(L,{modelValue:t.value,"onUpdate:modelValue":E[0]||(E[0]=C=>t.value=C)},{default:D(()=>[u("h1",{class:I(["text-lg font-bold text-center mb-2",e.won?"text-green-700":"text-yellow-700"])},g(e.won?"\u4F60\u731C\u5BF9\u4E86":"\u5F85\u731C\u6210\u8BED"),3),u("div",Oe,[(r(!0),d(w,null,B(c(l),(C,A)=>(r(),p(oe,{key:A,char:C.char,pinyin:C.pinyin},null,8,["char","pinyin"]))),128))]),u("button",{"w:text":"red-700","w:m":"t-2","w:p":"x-4 y-2","w:shadow":"lg","w:border":"2 red-200 rounded-lg","w:bg":"hover:red-100 active:red-200",onClick:o},[c(i)?P("",!0):(r(),p(c(j),{key:0,icon:"mdi:link-variant"})),m(" "+g(c(i)?"\u70B9\u51FB\u540E\u590D\u5236\u7F51\u5740\u5411\u4ED6\u4EBA\u53D1\u8D77\u6311\u6218":"\u590D\u5236\u6210\u8BED\u94FE\u63A5\u5411\u4ED6\u4EBA\u53D1\u8D77\u6311\u6218"),1)])]),_:1},8,["modelValue"]))}}),Le={class:"flex flex-1"},Ue=u("div",{class:"text-green-800 mt-1"}," \u63D0\u793A\uFF1A ",-1),ze={key:0,class:"text-gray-400 mt-1"},Me={class:"flex flex-1 flex-wrap"},Ne=v({props:{hints:null},setup(e){return(s,t)=>(r(),d("div",Le,[Ue,e.hints.length===0?(r(),d("div",ze," \u6682\u65E0 ")):P("",!0),u("div",Me,[(r(!0),d(w,null,B(e.hints,l=>(r(),d("div",{key:l,class:"rounded-full px-2 m-1 bg-green-500 text-gray-100"},g(l),1))),128))])]))}}),Te=u("h1",{class:"text-lg text-center mb-2"}," \u58F0\u6BCD\u8868 ",-1),Ge={class:"flex flex-wrap max-w-full"},We=u("h1",{class:"text-lg text-center mb-2"}," \u97F5\u6BCD\u8868 ",-1),Ke={class:"flex flex-wrap max-w-full"},Je=u("div",{class:"flex ml-4 mt-2"},[m(" \u56FE\u4F8B\uFF1A "),u("div",{class:"flex text-white"},[u("div",{class:"rounded-full px-2 m-1 bg-gray-300"}," \u6392\u9664 "),u("div",{class:"rounded-full px-2 m-1 bg-green-500"}," \u5305\u542B "),u("div",{class:"rounded-full px-2 m-1 bg-blue-400"}," \u53EF\u80FD ")])],-1),Ye=u("div",{class:"text-sm ml-4 text-gray-800"}," \u6CE8\uFF1A\u97F5\u6BCD\u8868\u4E2D\u672A\u5305\u542B\u4E2A\u522B\u8FC7\u4E8E\u5C11\u89C1\u7684\u97F5\u6BCD ",-1),He=v({props:{excluded:null,included:null},setup(e){const s=e,t=x(!1),l=n=>s.excluded.includes(n)?"bg-gray-300":s.included.includes(n)?"bg-green-500":"bg-blue-400";return(n,i)=>(r(),p(L,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o)},{default:D(()=>[Te,u("div",Ge,[(r(!0),d(w,null,B([...c(we),""],o=>(r(),d("div",{key:o,class:I(["rounded-full px-2 m-1 text-white font-mono",l(o)])},g(o||"\xD8"),3))),128))]),We,u("div",Ke,[(r(!0),d(w,null,B(c(ve),o=>(r(),d("div",{key:o,class:I(["rounded-full px-2 m-1 text-white",l(o)])},g(o),3))),128))]),Je,Ye]),_:1},8,["modelValue"]))}}),Qe={},Xe={class:"flex justify-center mt-1 first-child:border-l-2 children:border-2 children:border-l-0 children:border-dashed children:border-red-200"};function Ze(e,s){return r(),d("div",Xe,[(r(),d(w,null,B(4,t=>u("div",{key:t,class:"p-0.5 w-16 h-16"})),64))])}var eu=re(Qe,[["render",Ze]]);const uu=u("div",{class:"px-4 max-h-md overflow-x-auto"},[u("h1",{class:"text-xl font-bold text-center mb-2"}," \u5173\u4E8E "),u("p",{class:"mb-2"},[u("b",null,"\u592A\u957F\u4E0D\u770B\uFF1A"),m(" \u8FD9\u662F\u4E00\u4E2A\u6839\u636E\u58F0\u6BCD\u548C\u97F5\u6BCD\u731C\u6210\u8BED\u7684\u5C0F\u6E38\u620F\u3002 \u5FC5\u987B\u8F93\u5165\u4E00\u4E2A\u5408\u6CD5\u7684\u6210\u8BED\u3002 \u5C3D\u91CF\u5728\u6D4F\u89C8\u5668\u6253\u5F00\uFF0C\u800C\u975E\u5FAE\u4FE1\u3002 ")]),u("h2",{class:"font-bold text-center my-2 text-green-800"}," \u989C\u8272\u63D0\u793A "),u("p",{class:"mb-2"},[m(" \u5982\u679C\u4F60\u731C\u7684\u6210\u8BED\u4E2D\u67D0\u4E00\u4E2A\u58F0\u6BCD\u6216\u97F5\u6BCD\uFF1A "),u("ul",{class:"list-circle list-inside my-1"},[u("li",null,[m("\u4F4D\u7F6E\u4E0E\u5F85\u731C\u6210\u8BED\u76F8\u540C\uFF0C\u5B83\u5C31\u4F1A\u88AB\u6807\u6210"),u("span",{class:"text-green-500"},"\u7EFF\u8272")]),u("li",null,[m("\u51FA\u73B0\u5728\u5F85\u731C\u6210\u8BED\u4E2D\u4F46\u4F4D\u7F6E\u9519\u8BEF\uFF0C\u5C31\u662F"),u("span",{class:"text-yellow-500"},"\u9EC4\u8272")]),u("li",null,[m("\u97F5\u6BCD\u7EC4\u5408\u6B63\u786E\uFF0C\u4F1A\u52A0\u4E0A"),u("span",{class:"underline-green-500 underline-double underline"},"\u7EFF\u8272\u53CC\u4E0B\u5212\u7EBF")]),u("li",null,[m("\u538B\u6839\u6CA1\u51FA\u73B0\u5728\u5F85\u731C\u6210\u8BED\u4E2D\uFF0C\u5C31\u662F"),u("span",{class:"text-gray-500"},"\u7070\u8272")])])]),u("h2",{class:"font-bold text-center my-2 text-fuchsia-800"}," \u5176\u4ED6\u63D0\u793A "),u("p",{class:"mb-2"},[m(" \u4E8B\u5B9E\u8BC1\u660E\u5982\u679C\u53EA\u6709\u989C\u8272\u7684\u63D0\u793A\uFF0C\u731C\u6210\u8BED\u4F1A\u6BD4\u8F83\u56F0\u96BE\u3002\u6240\u4EE5\u6E38\u620F\u4E2D\u8FD8\u6709\u5176\u4ED6\u63D0\u793A\uFF0C\u6BD4\u5982\uFF1A "),u("ul",{class:"list-circle list-inside my-1"},[u("li",null,[m(" \u5F85\u731C\u6210\u8BED\u7684\u67D0\u4E2A\u5B57\u7684\u58F0\u6BCD\u548C\u97F5\u6BCD\uFF1A "),u("ul",{class:"indent-md list-square list-inside my-1"},[u("li",null,"\u90FD\u88AB\u731C\u5230\u8FC7\uFF0C\u5219\u63D0\u793A\u8BE5\u58F0\u6BCD\u97F5\u6BCD\u7EC4\u5408"),u("li",null,"\u7EC4\u5408\u88AB\u731C\u5230\uFF0C\u5219\u63D0\u793A\u8BE5\u5B57\u7684\u97F3\u8C03")])]),u("li",null,"\u6240\u731C\u7684\u6210\u8BED\u7684\u67D0\u4E2A\u5B57\u7684\u4E0E\u5F85\u731C\u6210\u8BED\u76F8\u540C\u4F4D\u7F6E\u7684\u5B57\u53D1\u97F3\u76F8\u540C\uFF0C\u5219\u63D0\u793A\u8FD9\u4E2A\u5B57")])]),u("h2",{class:"font-bold text-center my-2 text-indigo-800"}," \u62FC\u97F3 "),u("p",{class:"mb-2"},[m(" \u6E38\u620F\u4E2D\u7684\u62FC\u97F3\u58F0\u6BCD\u97F5\u6BCD\u5212\u5206\u57FA\u672C\u6309\u7167 "),u("a",{href:"http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/195802/t19580201_186000.html",class:"text-blue-700 hover:underline"}," \u300A\u6C49\u8BED\u62FC\u97F3\u65B9\u6848\u300B "),m(" \u6765\u8FDB\u884C\uFF0C \u6709\u5173\u97F5\u6BCD\u5199\u6CD5\u7684\u95EE\u9898\uFF0C\u53EF\u7FFB\u9605\u65B0\u534E\u5B57\u5178\u9644\u5F55\u300A\u6C49\u8BED\u62FC\u97F3\u65B9\u6848\u300B\u97F5\u6BCD\u8868\u540E\u7B2C 4 \u548C\u7B2C 5 \u6761\u3002 ")]),u("p",{class:"mb-2"},[m(" \u4E3B\u8981\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u8FD9\u91CC\u8BA4\u4E3A "),u("b",{class:"font-mono"},[u("span",{class:"text-yellow-500"},"zh"),u("span",{class:"text-green-500"},"i")]),m(" \u7B49\u91CC\u548C "),u("b",{class:"font-mono"},[u("span",{class:"text-yellow-500"},"j"),u("span",{class:"text-green-500"},"i")]),m(" \u7B49\u91CC\u7684 "),u("b",{class:"font-mono text-green-500"},"i"),m(" \u662F\u4E00\u6837\u7684\u3002 ")]),u("p",null,[m(" \u611F\u8C22 "),u("a",{href:"https://github.com/Yixuan-Wang",class:"text-yellow-600 hover:underline"}," @Yixuan-Wang "),m(" \u5BF9\u62FC\u97F3\u7B97\u6CD5\u7684\u6821\u5BF9\u4FEE\u6B63\u5DE5\u4F5C\u3002 ")]),u("h2",{class:"font-bold text-center my-2 text-pink-800"}," \u6210\u8BED\u4E0E\u53C2\u8003\u8D44\u6599 "),u("p",{class:"mb-2"},[m(" \u6E38\u620F\u4E2D\u7528\u4F5C\u5F85\u731C\u6210\u8BED\u7684\u4E3B\u8981\u6765\u81EA "),u("a",{href:"http://thuocl.thunlp.org/#chengyu",class:"text-purple-700 hover:underline"}," THUOCL \u7684\u6210\u8BED\u8BCD\u9891\u8868"),m("\uFF0C \u5E76\u7ECF\u8FC7\u4EBA\u5DE5\u7B80\u5355\u7B5B\u9009\uFF0C\u53BB\u6389\u4E86\u4E00\u90E8\u5206\u4E0D\u9002\u5408\u731C\u7684\u6210\u8BED\u3002 \u4F5C\u4E3A\u9A8C\u8BC1\u8F93\u5165\u7684\u6210\u8BED\u6BD4\u7528\u4F5C\u5F85\u731C\u6210\u8BED\u7684\u6570\u91CF\u66F4\u591A\uFF0C\u5176\u9009\u53D6\u548C\u6CE8\u97F3\u4E3B\u8981\u6765\u81EA"),u("a",{href:"https://www.zdic.net/cd/cybs/",class:"text-red-900 hover:underline"},"\u6C49\u5178"),m("\uFF0C\u5E76\u5229\u7528 "),u("a",{href:"https://github.com/mozillazg/python-pinyin",class:"text-sky-700 hover:underline"}," pypinyin "),m(" \u5E93\u4F5C\u4E86\u7B80\u5355\u7684\u81EA\u52A8\u6821\u5BF9\u3002 \u90E8\u5206\u672A\u80FD\u81EA\u52A8\u6821\u5BF9\u7684\u4E00\u767E\u6765\u4E2A\u6210\u8BED\u88AB\u672A\u88AB\u7EB3\u5165\u5217\u8868\u3002 ")]),u("h2",{class:"font-bold text-center my-2 text-violet-800"}," \u5206\u4EAB "),u("p",{class:"mb-2"}," \u53EF\u4EE5\u76F4\u63A5\u622A\u5C4F\u5206\u4EAB\u6765\u6652\u672C\u5C40\u6210\u7EE9\uFF0C\u4E5F\u53EF\u5728\u53F3\u4E0A\u89D2\u7684\u7EDF\u8BA1\u6309\u94AE\u4E2D\u67E5\u770B\u4E00\u4E9B\u7EDF\u8BA1\u4FE1\u606F\u3002 "),u("p",{class:"mb-2"}," \u6E38\u620F\u7ED3\u675F\u540E\uFF0C\u70B9\u51FB\u590D\u5236\u94FE\u63A5\u6309\u94AE\uFF0C\u9080\u8BF7\u597D\u53CB\u6253\u5F00\uFF0C\u5373\u53EF\u8BA9\u597D\u53CB\u4E5F\u6765\u731C\u731C\u8FD9\u4E2A\u6210\u8BED\u3002 "),u("h2",{class:"font-bold text-center my-2 text-lime-800"}," \u9879\u76EE "),u("p",{class:"mb-2"},[m(" \u672C\u9879\u76EE"),u("a",{href:"https://github.com/AllanChain/chinese-wordle",class:"text-blue-700 hover:underline"},"\u5728 GitHub \u5F00\u6E90"),m("\uFF0C\u5982\u6709\u95EE\u9898\u548C\u5EFA\u8BAE\u6B22\u8FCE\u63D0\u51FA\u3002 ")]),u("p",{class:"mb-2"}," \u9879\u76EE\u7684\u7075\u611F\u6765\u81EA\u4E8E wordle\uFF0C\u5F88\u5BB9\u6613\u641C\u5230\uFF0C\u4E0D\u591A\u53D9\u8FF0\u3002 "),u("br"),u("p",null,"\u5728\u4E0B\u65B9\u7684\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u4EFB\u610F\u4E00\u4E2A\u56DB\u5B57\u6210\u8BED\u5F00\u59CB\u6E38\u620F\u3002")],-1),su=v({setup(e){const s=x(!0);return(t,l)=>(r(),p(L,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n)},{default:D(()=>[uu]),_:1},8,["modelValue"]))}}),tu=["disabled"],nu=["value"],lu=v({props:{disabled:{type:Boolean}},setup(e){var l;const s=x((l=localStorage.getItem("wordle-difficulty"))!=null?l:"easy"),t=ie();return z(s,()=>{s.value in q&&(t.difficulty=q[s.value],localStorage.setItem("wordle-difficulty",s.value))}),(n,i)=>Q((r(),d("select",{"onUpdate:modelValue":i[0]||(i[0]=o=>s.value=o),class:"rounded-lg px-1 mr-2 h-8","w:border":"1 blue-400 disabled:gray-400","w:bg":"white disabled:gray-100","w:text":"blue-900 disabled:gray-500",disabled:e.disabled},[(r(!0),d(w,null,B(c(q),(o,a)=>(r(),d("option",{key:a,value:a},g(o.name),9,nu))),128))],8,tu)),[[Fe,s.value]])}}),iu=u("h1",{class:"text-lg text-center mb-2"}," \u7EDF\u8BA1 ",-1),ou={class:"flex justify-center text-sky-900"},ru={class:"flex items-center flex-col w-16"},au={class:"text-xl font-bold"},du=u("div",null,"\u5C40",-1),cu={class:"flex items-center flex-col w-20"},mu={class:"text-xl font-bold"},hu=u("div",null,"\u80DC\u7387",-1),fu=u("h2",{class:"text-center my-2"}," \u731C\u6D4B\u6B21\u6570\u7EDF\u8BA1 ",-1),Fu={class:"min-w-72 font-mono text-yellow-800"},Eu={key:0,class:"text-center"},gu={class:"ml-6"},xu=v({props:{guessRecord:null},setup(e){const s=e,t=x(!1),l=k(()=>s.guessRecord.length===0?0:s.guessRecord.filter(o=>o>0).length/s.guessRecord.length*100),n=k(()=>{const i=s.guessRecord.reduce((o,a)=>{var E;return a<1||(o[a]=((E=o[a])!=null?E:0)+1),o},{});return Object.entries(i).map(([o,a])=>({count:o,countGuesses:a})).sort((o,a)=>parseInt(o.count,10)-parseInt(a.count,10))});return(i,o)=>(r(),p(L,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a)},{default:D(()=>[iu,u("div",ou,[u("div",ru,[u("div",au,g(e.guessRecord.length),1),du]),u("div",cu,[u("div",mu,g(c(l).toFixed(1))+"% ",1),hu])]),fu,u("div",Fu,[c(n).length===0?(r(),d("div",Eu," \u6682\u65E0\u6570\u636E ")):P("",!0),(r(!0),d(w,null,B(c(n),({count:a,countGuesses:E})=>(r(),d("div",{key:a,class:"flex items-center"},[u("div",gu,g(a),1),u("div",{class:"bg-yellow-300 h-4 mx-2 px-2 flex justify-end items-center","w:border":"rounded-md",style:Ee({width:`calc(28px + ${E/e.guessRecord.length*65}%)`})},g(E),5)]))),128))])]),_:1},8,["modelValue"]))}});var Cu="/chinese-wordle/assets/all-idioms.cbecdf8f.json",yu="/chinese-wordle/assets/freq-idioms.8d5d143d.json";const pu={class:"p-4 mx-auto max-w-2xl"},wu={class:"flex","w:border":"b-1 solid gray-300","w:p":"b-2"},vu={class:"flex justify-center w-18"},Bu=u("h1",{class:"flex-1","w:text":"3xl center blue-900"}," \u62FC\u6210\u8BED ",-1),bu={class:"flex justify-center w-18"},Du={class:"flex my-2"},Au={class:"grid grid-cols-1 sm:grid-cols-2"},_u=u("div",{class:"h-10"},null,-1),Iu={class:"fixed bottom-2 left-1/2 transform -translate-x-1/2"},$u={key:0,class:"px-2 py-1 mb-1 rounded-md bg-red-500 text-white"},ku={key:0,class:"text-center rounded mx-auto px-4 py-2 w-50 bg-yellow-100 text-yellow-800"},Pu={key:1,class:"flex justify-center"},Vu=["onKeyup"],Ru={key:2,class:"flex"},Su=v({setup(e){var G;const s=O(),t=ie(),l=x(""),n=x(""),i=x(null),o=x(!0),a=x(""),E=x(localStorage.getItem("played-wordle")!=="true"),C=x(!1),A=x(!1),V=x(!1),y=x(!1),_=k(()=>y.value||t.lost||t.won),F=x(JSON.parse((G=localStorage.getItem("wordle-guess-record"))!=null?G:"[]")),U=$=>{F.value.push($),localStorage.setItem("wordle-guess-record",JSON.stringify(F.value))};z(()=>t.lost,()=>{t.lost&&(C.value=!0,U(-1))},{immediate:!1}),z(()=>t.won,()=>{t.won&&(C.value=!0,U(t.guessedIdioms.length))},{immediate:!1}),X(()=>localStorage.setItem("played-wordle","true"));const ce=()=>{t.reset(),t.initAnswerIdiom(s.randomIdiom()),y.value=!1},me=$=>{i.value!==null&&clearTimeout(i.value),n.value=$,i.value=window.setTimeout(()=>{n.value="",i.value=null},3e3)},T=()=>{t.guessIdiom(l.value)||me("\u5B83\u4E0D\u5728\u6211\u4EEC\u7684\u8BCD\u5E93\u91CC..."),l.value=""};return X(async()=>{try{const f=await(await fetch(Cu)).json();s.setAllIdioms(f);const S=await(await fetch(yu)).json();s.setFreqIdioms(S);const W=new URL(location.href).searchParams.get("idiom");if(W){const K=ae("cnwordle",W);S.includes(K)?t.initAnswerIdiom(K):(a.value="\u5206\u4EAB\u65E0\u6548\uFF0C\u5237\u65B0\u91CD\u5F00",t.initAnswerIdiom(s.randomIdiom()))}else t.initAnswerIdiom(s.randomIdiom());history.pushState(null,"",location.href.split("?")[0]),o.value=!1}catch{a.value="\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0"}}),($,f)=>(r(),d(w,null,[b(su,{modelValue:E.value,"onUpdate:modelValue":f[0]||(f[0]=h=>E.value=h)},null,8,["modelValue"]),b(xu,{modelValue:A.value,"onUpdate:modelValue":f[1]||(f[1]=h=>A.value=h),"guess-record":F.value},null,8,["modelValue","guess-record"]),c(t).answerIdiom&&c(t).answerOrigPinyin?(r(),p(qe,{key:0,modelValue:C.value,"onUpdate:modelValue":f[2]||(f[2]=h=>C.value=h),answer:c(t).answerIdiom,"answer-pinyin":c(t).answerOrigPinyin,won:c(t).won},null,8,["modelValue","answer","answer-pinyin","won"])):P("",!0),b(He,{modelValue:V.value,"onUpdate:modelValue":f[3]||(f[3]=h=>V.value=h),excluded:c(t).excludeList,included:c(t).includeList},null,8,["modelValue","excluded","included"]),u("div",pu,[u("div",wu,[u("div",vu,[u("button",{class:"bg-red-400 text-white rounded-md px-2 py-1",onClick:f[4]||(f[4]=h=>{C.value=!0,y.value=!0,U(-1)})}," \u7B54\u6848 ")]),Bu,u("div",bu,[u("button",{class:"text-emerald-700 text-xl mx-2",onClick:f[5]||(f[5]=h=>A.value=!0)},[b(c(j),{icon:"ion:ios-stats"})]),u("button",{class:"text-emerald-700 text-xl mx-2",onClick:f[6]||(f[6]=h=>E.value=!0)},[b(c(j),{icon:"ph:info-bold"})])])]),u("div",Du,[b(lu,{disabled:c(t).guessedIdioms.length>0&&!c(_)},null,8,["disabled"]),b(Ne,{hints:c(t).hints.map(h=>h.content)},null,8,["hints"]),u("button",{class:"bg-teal-500 text-white rounded-md h-8 w-22",onClick:f[7]||(f[7]=h=>V.value=!0)}," \u67E5\u770B\u6392\u9664 ")]),u("div",Au,[(r(!0),d(w,null,B(c(t).guesses,(h,S)=>(r(),p(Pe,{key:S,idiom:h.idiom,pinyin:h.pinyin,"guess-results":h.result},null,8,["idiom","pinyin","guess-results"]))),128)),(r(!0),d(w,null,B(c(t).totalChances-c(t).guesses.length,h=>(r(),p(eu,{key:h}))),128))]),_u,u("div",Iu,[b(N,null,{default:D(()=>[n.value?(r(),d("div",$u,g(n.value),1)):P("",!0)]),_:1}),b(N,null,{default:D(()=>[o.value||a.value?(r(),d("div",ku,g(a.value||"\u52A0\u8F7D\u4E2D..."),1)):c(_)?(r(),d("div",Ru,[u("div",{class:I(["flex px-2 w-28 rounded-l bg-gray-100 items-center justify-center",c(t).won?"bg-green-100 text-green-900":"bg-red-100 text-red-900"])},[u("div",null,g(c(t).won?"\u606D\u559C\u4F60":"\u5F88\u9057\u61BE"),1)],2),u("button",{class:"rounded-r w-18","w:p":"x-4 y-2","w:bg":"indigo-500 hover:indigo-600 active:indigo-700","w:text":"white",onClick:ce}," \u91CD\u5F00 ")])):(r(),d("div",Pu,[Q(u("input",{"onUpdate:modelValue":f[8]||(f[8]=h=>l.value=h),maxlength:"4",class:"rounded-l px-2 w-32","w:border":"1 solid gray-300","w:focus":"ring ring-blue-400 border-blue-400","w:disabled":"bg-gray-100",onKeyup:xe(T,["enter"])},null,40,Vu),[[ge,l.value]]),u("button",{class:"rounded-r w-18","w:p":"x-4 y-2","w:bg":"blue-500 hover:blue-600 active:blue-700 disabled:blue-gray-400","w:text":"white",onClick:T}," \u786E\u8BA4 ")]))]),_:1})])])],64))}});const de=Ce(Su);de.use(ye());de.mount("#app");
