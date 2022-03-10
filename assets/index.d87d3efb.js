import{d as Q,s as X,a as y,o as r,c as a,b as u,n as _,t as p,e as P,F as v,r as D,f as B,u as d,w as $,g as Z,T as Fe,h as b,I as L,i as fe,j,k as x,l as ee,m as h,p as M,q as ue,v as Ee,x as ge,y as se,z as Ce,A as xe,B as pe,C as we}from"./vendor.5ca68ae6.js";const ye=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}};ye();const N=Q("idioms",{state:()=>({allIdioms:X({}),freqIdioms:X([])}),getters:{isValidIdiom(e){return s=>s in e.allIdioms},randomIdiom(e){return()=>{const s=Math.floor(Math.random()*e.freqIdioms.length);return e.freqIdioms[s]}}},actions:{setAllIdioms(e){this.allIdioms=e},setFreqIdioms(e){this.freqIdioms=e}}}),te=[..."bpmfdtnlgkhjqxzcsr"],ne=["zh","ch","sh"],ve=[...te,...ne],Be=["a","o","e","ai","ei","ao","ou","an","en","ang","eng","er","i","ia","ie","iao","iou","ian","in","iang","ing","iong","u","ua","uo","uai","uei","uan","uen","uang","ueng","\xFC","\xFCe","\xFCan","\xFCn","ong"],le=["\u0304","\u0301","\u030C","\u0300"],ie=e=>{let s=0;for(let n=0;n<le.length;n++)e.normalize("NFD").includes(le[n])&&(s=n+1);return[e.normalize("NFD").replace(/\u0304|\u0301|\u030C|\u0300/,"").normalize(),s]},G=e=>{switch(e){case"iu":return"iou";case"ui":return"uei";case"un":return"uen";default:return e}},be=e=>{let[s,t]=ie(e);if("jqx".includes(s[0])&&s[1]==="u"&&(s=s.replace("u","\xFC")),s.startsWith("y"))switch(s[1]){case"i":s=s.slice(1);break;case"u":s=`\xFC${s.slice(2)}`;break;default:s=`i${s.slice(1)}`;break}else s.startsWith("w")&&(s=s[1]==="u"?s.slice(1):`u${s.slice(1)}`);return ne.includes(s.slice(0,2))?[s.slice(0,2),G(s.slice(2)),t]:te.includes(s.charAt(0))?[s.charAt(0),G(s.slice(1)),t]:["",G(s),t]},oe=e=>e.split(" ").map(be),De=(e,s)=>e[0]===s[0]&&e[1]===s[1]&&e[2]===s[2];var O;(function(e){e[e.NotExists=0]="NotExists",e[e.Exists=1]="Exists",e[e.CorrectPosition=2]="CorrectPosition"})(O||(O={}));var re;(function(e){e[e.BothEverGuessed=0]="BothEverGuessed",e[e.BothExistsInOneGuess=1]="BothExistsInOneGuess",e[e.CombinationCorrect=2]="CombinationCorrect",e[e.PositionAndToneCorrect=3]="PositionAndToneCorrect"})(re||(re={}));var ae;(function(e){e[e.Combination=0]="Combination",e[e.CombinationAndTone=1]="CombinationAndTone",e[e.Char=2]="Char"})(ae||(ae={}));const z={easy:{name:"\u7B80\u5355",enabledHints:[{on:0,give:0},{on:2,give:1},{on:3,give:2}]},normal:{name:"\u6B63\u5E38",enabledHints:[{on:0,give:0},{on:2,give:1}]},medium:{name:"\u4E2D\u7B49",enabledHints:[{on:1,give:0},{on:2,give:1}]},hard:{name:"\u56F0\u96BE",enabledHints:[{on:1,give:0}]},insane:{name:"\u795E\u4ED9",enabledHints:[]}},K=Q("guess",{state:()=>({answerIdiom:null,guessedIdioms:[],hints:[],totalChances:8,difficulty:z.easy}),getters:{answerOrigPinyin(e){return e.answerIdiom===null?null:N().allIdioms[e.answerIdiom]},answerPinyin(){return this.answerOrigPinyin===null?null:oe(this.answerOrigPinyin)},answerPinyinFlatten(){return this.answerPinyin===null?null:this.answerPinyin.flatMap(([e,s])=>[e,s])},answerSyllables(){return this.answerPinyin===null?null:this.answerPinyin.map(([e,s])=>e+s)},compareIdiomPinyin(){return e=>{if(this.answerPinyinFlatten===null||this.answerSyllables===null)throw new Error("answer is not set");return e.map(([s,t],n)=>{const[l,o]=[s,t].map((c,g)=>this.answerPinyin[n][g]===c?2:this.answerPinyinFlatten.includes(c)?1:0),i=this.answerSyllables.includes(s+t);return[l,o,i]})}},guesses(){const e=N();return this.guessedIdioms.map(s=>{const t=e.allIdioms[s],n=oe(t);return{idiom:s,pinyin:n,origPinyin:t,result:this.compareIdiomPinyin(n)}})},guessesPinyin(){return this.guesses.map(e=>e.pinyin)},guessesPinyinFlatten(){return this.guessesPinyin.flatMap(e=>e.flatMap(([s,t])=>[s,t]))},won(){return this.guesses.length!==0&&this.guesses[this.guesses.length-1].result.every(e=>e[0]===2&&e[1]===2)},lost(){return this.guessedIdioms.length>=this.totalChances&&!this.won},includeList(){return this.answerPinyinFlatten===null?[]:this.answerPinyinFlatten.filter(e=>this.guessesPinyinFlatten.includes(e))},excludeList(){return this.answerPinyinFlatten===null?[]:this.guessesPinyinFlatten.filter(e=>!this.answerPinyinFlatten.includes(e))},difficultyName(){return this.difficulty.name}},actions:{reset(){this.answerIdiom=null,this.guessedIdioms=[],this.hints=[]},initAnswerIdiom(e){this.answerIdiom=e},guessIdiom(e){return N().isValidIdiom(e)?(this.guessedIdioms.push(e),this.won||this.updateHints(),!0):!1},updateHints(){if(!this.answerIdiom||!this.answerOrigPinyin)return[];const e=this.guesses[this.guesses.length-1],s=e.pinyin.map(([l,o])=>l+o),t=e.pinyin.flatMap(([l,o])=>[l,o]),n=[];for(const[l,o]of this.answerPinyin.entries()){const[i,c]=o,g=i+c,I=this.answerOrigPinyin.split(" ")[l],A=Math.max(...this.hints.filter(F=>F.charIndex===l).map(F=>F.level)),C=this.difficulty.enabledHints.filter(F=>F.give>A);let m=-1;for(const F of C)F.give<=m||(F.on===0&&this.guessesPinyinFlatten.includes(i)&&this.guessesPinyinFlatten.includes(c)&&(t.includes(i)||t.includes(c))||F.on===1&&t.includes(i)&&t.includes(c)||F.on===2&&s.includes(g)||F.on===3&&De(o,e.pinyin[l]))&&(m=F.give);if(m===-1)continue;let w;switch(m){case 2:w=this.answerIdiom.charAt(l);break;case 0:w=ie(I)[0];break;case 1:w=I;break}n.push({charIndex:l,content:w,level:m})}this.hints.push(...n)}}}),Ae={class:"p-0.5 w-16 h-16"},_e={class:"text-sm font-mono font-semibold"},Ie=u("div",{class:"text-blue-500 text-xs"}," + ",-1),$e={key:1,class:"text-center"},ke={class:"mt-1 text-center"},de=y({props:{char:null,pinyin:null,guessResults:null},setup(e){const s={[O.NotExists]:"gray-500",[O.Exists]:"yellow-500",[O.CorrectPosition]:"green-500"};return(t,n)=>(r(),a("div",Ae,[u("div",_e,[Array.isArray(e.pinyin)&&e.guessResults?(r(),a("div",{key:0,class:_(["flex justify-center items-baseline decoration-green-500",e.guessResults[2]?["underline"]:[]]),"w:underline":"offset-1 double"},[u("div",{class:_(`text-${s[e.guessResults[0]]}`)},p(e.pinyin[0]||"\xD8"),3),Ie,u("div",{class:_(`text-${s[e.guessResults[1]]}`)},p(e.pinyin[1]),3)],2)):(r(),a("div",$e,p(e.pinyin),1))]),u("div",ke,p(e.char),1)]))}}),Pe={class:"flex justify-center mt-1 first-child:border-l-2 children:border-2 children:border-l-0 children:border-dashed children:border-red-200"},Ve=y({props:{idiom:null,pinyin:null,guessResults:null},setup(e){const s=e,t=P(()=>s.pinyin.map((n,l)=>({char:s.idiom.charAt(l),pinyin:n,guessResults:s.guessResults[l]})));return(n,l)=>(r(),a("div",Pe,[(r(!0),a(v,null,D(d(t),(o,i)=>(r(),B(de,{key:i,char:o.char,pinyin:o.pinyin,"guess-results":o.guessResults},null,8,["char","pinyin","guess-results"]))),128))]))}});var Se=(e,s)=>{const t=e.__vccOpts||e;for(const[n,l]of s)t[n]=l;return t};const Re={};function je(e,s){return r(),B(Fe,{mode:"out-in","enter-active-class":"duration-400 ease-out","enter-from-class":"transform opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-400 ease-in","leave-from-class":"opacity-100","leave-to-class":"transform opacity-0"},{default:$(()=>[Z(e.$slots,"default")]),_:3})}var W=Se(Re,[["render",je]]);const Oe={class:"relative bg-white rounded-lg mx-3 max-w-md p-2","w:border":"t-9 teal-600","w:shadow":"lg gray-500"},qe={class:"absolute right-4 top-2"},U=y({props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:s}){return(t,n)=>(r(),B(W,null,{default:$(()=>[e.modelValue?(r(),a("div",{key:0,class:"fixed w-full h-full flex justify-center items-center z-10","w:bg":"opacity-25 black",onClick:n[1]||(n[1]=fe(l=>s("update:modelValue",!e.modelValue),["self"]))},[u("div",Oe,[u("div",qe,[b(d(L),{class:"text-xl text-red-900",icon:"mdi:close-circle-outline",onClick:n[0]||(n[0]=l=>s("update:modelValue",!e.modelValue))})]),Z(t.$slots,"default")])])):j("",!0)]),_:3}))}}),J=(e,s)=>{let t="";for(let n=0;n<s.length;n++){const l=s.charCodeAt(n),o=e.charCodeAt(n%e.length);t+=String.fromCharCode(l^o)}return t},Le={class:"flex justify-center first-child:border-l-2 children:border-2 children:border-l-0 children:border-dashed children:border-red-200"},Ne=["value"],ze=h(" \u590D\u5236\u4EE5\u5206\u4EAB\u6210\u7EE9 "),Ue={key:1,class:"block mx-auto","w:text":"gray-600 sm center"},Te=y({props:{answer:null,answerPinyin:null,won:{type:Boolean}},setup(e){const s=e,t=x(!0),n=K(),l=P(()=>s.answerPinyin.split(" ").map((C,m)=>({char:s.answer.charAt(m),pinyin:C}))),o=P(()=>{const C=new URL(location.href),m=ee.encode(J("cnwordle",s.answer),!0);return C.searchParams.set("idiom",m),C.href}),i=!!navigator.clipboard,c=["\u{1F311}","\u{1F312}","\u{1F313}","\u{1F318}","\u{1F319}","\u{1F314}","\u{1F317}","\u{1F316}","\u{1F315}"],g=P(()=>{let C=`\u62FC\u6210\u8BED - \u672C\u6B21\u4E3A${n.difficultyName}\u96BE\u5EA6 - ${n.won?`${n.guesses.length} \u6B21\u731C\u4E2D`:"\u5931\u8D25"}
${o.value}`;for(const[m,w]of n.guesses.entries()){C+=m%2==0?`
`:"   |   ";for(const F of w.result){const R=F[0]*3+F[1];C+=c[R]}}return C}),I=C=>{const m=C.target;m.selectionStart===m.selectionEnd&&(m.focus(),m.select())},A=()=>{navigator.clipboard.writeText(g.value)};return(C,m)=>(r(),B(U,{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=w=>t.value=w)},{default:$(()=>[u("h1",{class:_(["text-lg font-bold text-center mb-2",e.won?"text-green-700":"text-yellow-700"])},p(e.won?"\u4F60\u731C\u5BF9\u4E86":"\u5F85\u731C\u6210\u8BED"),3),u("div",Le,[(r(!0),a(v,null,D(d(l),(w,F)=>(r(),B(de,{key:F,char:w.char,pinyin:w.pinyin},null,8,["char","pinyin"]))),128))]),u("textarea",{value:d(g),readonly:"",class:"block w-64 h-42 p-2","w:m":"y-2 x-auto","w:bg":"teal-50","w:border":"rounded-lg","w:resize":"none","w:outline":"none","w:text":"sm","w:break":"all",onClick:I},null,8,Ne),i?(r(),a("button",{key:0,class:"block","w:text":"red-700","w:m":"t-2 x-auto","w:p":"x-4 y-2","w:shadow":"lg","w:border":"2 red-200 rounded-lg","w:bg":"hover:red-100 active:red-200",onClick:A},[b(d(L),{icon:"mdi:link-variant"}),ze])):(r(),a("div",Ue," \u590D\u5236\u4E0A\u65B9\u6587\u672C\u4EE5\u5206\u4EAB\u6210\u7EE9 "))]),_:1},8,["modelValue"]))}}),Me={class:"flex flex-1"},Ge=u("div",{class:"text-green-800 mt-1"}," \u63D0\u793A\uFF1A ",-1),Ke={key:0,class:"text-gray-400 mt-1"},We={class:"flex flex-1 flex-wrap"},Je=y({props:{hints:null},setup(e){return(s,t)=>(r(),a("div",Me,[Ge,e.hints.length===0?(r(),a("div",Ke," \u6682\u65E0 ")):j("",!0),u("div",We,[(r(!0),a(v,null,D(e.hints,n=>(r(),a("div",{key:n,class:"rounded-full px-2 m-1 bg-green-500 text-gray-100"},p(n),1))),128))])]))}}),Ye=u("h1",{class:"text-lg text-center mb-2"}," \u58F0\u6BCD\u8868 ",-1),He={class:"flex flex-wrap max-w-full"},Qe=u("h1",{class:"text-lg text-center mb-2"}," \u97F5\u6BCD\u8868 ",-1),Xe={class:"flex flex-wrap max-w-full"},Ze=u("div",{class:"flex ml-4 mt-2"},[h(" \u56FE\u4F8B\uFF1A "),u("div",{class:"flex text-white"},[u("div",{class:"rounded-full px-2 m-1 bg-gray-300"}," \u6392\u9664 "),u("div",{class:"rounded-full px-2 m-1 bg-green-500"}," \u5305\u542B "),u("div",{class:"rounded-full px-2 m-1 bg-blue-400"}," \u53EF\u80FD ")])],-1),eu=u("div",{class:"text-sm ml-4 text-gray-800"}," \u6CE8\uFF1A\u97F5\u6BCD\u8868\u4E2D\u672A\u5305\u542B\u4E2A\u522B\u8FC7\u4E8E\u5C11\u89C1\u7684\u97F5\u6BCD ",-1),uu=y({props:{excluded:null,included:null},setup(e){const s=e,t=x(!1),n=l=>s.excluded.includes(l)?"bg-gray-300":s.included.includes(l)?"bg-green-500":"bg-blue-400";return(l,o)=>(r(),B(U,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=i=>t.value=i)},{default:$(()=>[Ye,u("div",He,[(r(!0),a(v,null,D([...d(ve),""],i=>(r(),a("div",{key:i,class:_(["rounded-full px-2 m-1 text-white font-mono",n(i)])},p(i||"\xD8"),3))),128))]),Qe,u("div",Xe,[(r(!0),a(v,null,D(d(Be),i=>(r(),a("div",{key:i,class:_(["rounded-full px-2 m-1 text-white",n(i)])},p(i),3))),128))]),Ze,eu]),_:1},8,["modelValue"]))}}),su={class:"flex justify-center mt-1 first-child:border-l-2 children:border-2 children:border-l-0 children:border-dashed children:border-red-200"},tu=y({emits:["click"],setup(e,{emit:s}){return(t,n)=>(r(),a("div",su,[(r(),a(v,null,D(4,l=>u("div",{key:l,class:"p-0.5 w-16 h-16",onClick:n[0]||(n[0]=o=>s("click"))})),64))]))}});var nu="/chinese-wordle/color-explain.jpg";const lu=u("div",{class:"px-4 max-h-md overflow-x-auto"},[u("h1",{class:"text-xl font-bold text-center mb-2"}," \u5173\u4E8E "),u("p",{class:"mb-2"},[u("b",null,"\u592A\u957F\u4E0D\u770B\uFF1A"),h(" \u8FD9\u662F\u4E00\u4E2A\u6839\u636E\u58F0\u6BCD\u548C\u97F5\u6BCD\u731C\u6210\u8BED\u7684\u5C0F\u6E38\u620F\u3002 \u5FC5\u987B\u8F93\u5165\u4E00\u4E2A\u5408\u6CD5\u7684\u6210\u8BED\u3002 \u5C3D\u91CF\u5728\u6D4F\u89C8\u5668\u6253\u5F00\uFF0C\u800C\u975E\u5FAE\u4FE1\u3002 ")]),u("h2",{class:"font-bold text-center my-2 text-green-800"}," \u989C\u8272\u63D0\u793A "),u("img",{src:nu,width:"300",class:"mx-auto"}),u("p",{class:"mb-2"},[h(" \u5982\u679C\u4F60\u731C\u7684\u6210\u8BED\u4E2D\u67D0\u4E00\u4E2A\u58F0\u6BCD\u6216\u97F5\u6BCD\uFF1A "),u("ul",{class:"list-circle list-inside my-1"},[u("li",null,[h("\u4F4D\u7F6E\u4E0E\u5F85\u731C\u6210\u8BED\u76F8\u540C\uFF0C\u5B83\u5C31\u4F1A\u88AB\u6807\u6210"),u("span",{class:"text-green-500"},"\u7EFF\u8272")]),u("li",null,[h("\u51FA\u73B0\u5728\u5F85\u731C\u6210\u8BED\u4E2D\u4F46\u4F4D\u7F6E\u9519\u8BEF\uFF0C\u5C31\u662F"),u("span",{class:"text-yellow-500"},"\u9EC4\u8272")]),u("li",null,[h("\u97F5\u6BCD\u7EC4\u5408\u6B63\u786E\uFF0C\u4F1A\u52A0\u4E0A"),u("span",{class:"underline-green-500 underline-double underline"},"\u7EFF\u8272\u53CC\u4E0B\u5212\u7EBF")]),u("li",null,[h("\u538B\u6839\u6CA1\u51FA\u73B0\u5728\u5F85\u731C\u6210\u8BED\u4E2D\uFF0C\u5C31\u662F"),u("span",{class:"text-gray-500"},"\u7070\u8272")])])]),u("h2",{class:"font-bold text-center my-2 text-fuchsia-800"}," \u5176\u4ED6\u63D0\u793A "),u("p",{class:"mb-2"},[h(" \u4E8B\u5B9E\u8BC1\u660E\u5982\u679C\u53EA\u6709\u989C\u8272\u7684\u63D0\u793A\uFF0C\u731C\u6210\u8BED\u4F1A\u6BD4\u8F83\u56F0\u96BE\u3002\u6240\u4EE5\u6E38\u620F\u4E0A\u65B9\u8FD8\u6709\u4E00\u680F\u63D0\u793A\uFF0C\u6BD4\u5982\u5728\u7B80\u5355\u7248\u4E2D\uFF1A "),u("ul",{class:"list-circle list-inside my-1"},[u("li",null,[h(" \u5F85\u731C\u6210\u8BED\u7684\u67D0\u4E2A\u5B57\u7684\u58F0\u6BCD\u548C\u97F5\u6BCD\uFF1A "),u("ul",{class:"indent-md list-square list-inside my-1"},[u("li",null,"\u90FD\u88AB\u731C\u5230\u8FC7\uFF0C\u5219\u63D0\u793A\u8BE5\u58F0\u6BCD\u97F5\u6BCD\u7EC4\u5408"),u("li",null,"\u7EC4\u5408\u88AB\u731C\u5230\uFF0C\u5219\u63D0\u793A\u8BE5\u5B57\u7684\u97F3\u8C03")])]),u("li",null,"\u6240\u731C\u7684\u6210\u8BED\u7684\u67D0\u4E2A\u5B57\u7684\u4E0E\u5F85\u731C\u6210\u8BED\u76F8\u540C\u4F4D\u7F6E\u7684\u5B57\u53D1\u97F3\u76F8\u540C\uFF0C\u5219\u63D0\u793A\u8FD9\u4E2A\u5B57")])]),u("p",{class:"mb-2"}," \u4E0D\u540C\u96BE\u5EA6\u9009\u62E9\u7684\u533A\u522B\u4E5F\u5C31\u5728\u4E8E\u8FD9\u90E8\u5206\u63D0\u793A\u7684\u591A\u5C11\u548C\u83B7\u5F97\u63D0\u793A\u7684\u96BE\u5EA6\u3002 "),u("h2",{class:"font-bold text-center my-2 text-indigo-800"}," \u62FC\u97F3 "),u("p",{class:"mb-2"},[h(" \u6E38\u620F\u4E2D\u7684\u62FC\u97F3\u58F0\u6BCD\u97F5\u6BCD\u5212\u5206\u57FA\u672C\u6309\u7167 "),u("a",{href:"http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/195802/t19580201_186000.html",class:"text-blue-700 hover:underline"}," \u300A\u6C49\u8BED\u62FC\u97F3\u65B9\u6848\u300B "),h(" \u6765\u8FDB\u884C\uFF0C \u6709\u5173\u97F5\u6BCD\u5199\u6CD5\u7684\u95EE\u9898\uFF0C\u53EF\u7FFB\u9605\u65B0\u534E\u5B57\u5178\u9644\u5F55\u300A\u6C49\u8BED\u62FC\u97F3\u65B9\u6848\u300B\u97F5\u6BCD\u8868\u540E\u7B2C 4 \u548C\u7B2C 5 \u6761\u3002 ")]),u("p",{class:"mb-2"},[h(" \u4E3B\u8981\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u8FD9\u91CC\u8BA4\u4E3A "),u("b",{class:"font-mono"},[u("span",{class:"text-yellow-500"},"zh"),u("span",{class:"text-green-500"},"i")]),h(" \u7B49\u91CC\u548C "),u("b",{class:"font-mono"},[u("span",{class:"text-yellow-500"},"j"),u("span",{class:"text-green-500"},"i")]),h(" \u7B49\u91CC\u7684 "),u("b",{class:"font-mono text-green-500"},"i"),h(" \u662F\u4E00\u6837\u7684\u3002 ")]),u("p",null,[h(" \u611F\u8C22 "),u("a",{href:"https://github.com/Yixuan-Wang",class:"text-yellow-600 hover:underline"}," @Yixuan-Wang "),h(" \u5BF9\u62FC\u97F3\u7B97\u6CD5\u7684\u6821\u5BF9\u4FEE\u6B63\u5DE5\u4F5C\u3002 ")]),u("h2",{class:"font-bold text-center my-2 text-pink-800"}," \u6210\u8BED\u4E0E\u53C2\u8003\u8D44\u6599 "),u("p",{class:"mb-2"},[h(" \u6E38\u620F\u4E2D\u7528\u4F5C\u5F85\u731C\u6210\u8BED\u7684\u4E3B\u8981\u6765\u81EA "),u("a",{href:"http://thuocl.thunlp.org/#chengyu",class:"text-purple-700 hover:underline"}," THUOCL \u7684\u6210\u8BED\u8BCD\u9891\u8868"),h("\uFF0C \u5E76\u7ECF\u8FC7\u4EBA\u5DE5\u7B80\u5355\u7B5B\u9009\uFF0C\u53BB\u6389\u4E86\u4E00\u90E8\u5206\u4E0D\u9002\u5408\u731C\u7684\u6210\u8BED\u3002 \u4F5C\u4E3A\u9A8C\u8BC1\u8F93\u5165\u7684\u6210\u8BED\u6BD4\u7528\u4F5C\u5F85\u731C\u6210\u8BED\u7684\u6570\u91CF\u66F4\u591A\uFF0C\u5176\u9009\u53D6\u548C\u6CE8\u97F3\u4E3B\u8981\u6765\u81EA"),u("a",{href:"https://www.zdic.net/cd/cybs/",class:"text-red-900 hover:underline"},"\u6C49\u5178"),h("\uFF0C\u5E76\u5229\u7528 "),u("a",{href:"https://github.com/mozillazg/python-pinyin",class:"text-sky-700 hover:underline"}," pypinyin "),h(" \u5E93\u4F5C\u4E86\u7B80\u5355\u7684\u81EA\u52A8\u6821\u5BF9\u3002 \u90E8\u5206\u672A\u80FD\u81EA\u52A8\u6821\u5BF9\u7684\u4E00\u767E\u6765\u4E2A\u6210\u8BED\u88AB\u672A\u88AB\u7EB3\u5165\u5217\u8868\u3002 ")]),u("h2",{class:"font-bold text-center my-2 text-violet-800"}," \u5206\u4EAB "),u("p",{class:"mb-2"}," \u53EF\u4EE5\u76F4\u63A5\u622A\u5C4F\u5206\u4EAB\u6765\u6652\u672C\u5C40\u6210\u7EE9\uFF0C\u4E5F\u53EF\u5728\u53F3\u4E0A\u89D2\u7684\u7EDF\u8BA1\u6309\u94AE\u4E2D\u67E5\u770B\u4E00\u4E9B\u7EDF\u8BA1\u4FE1\u606F\u3002 "),u("p",{class:"mb-2"}," \u6E38\u620F\u7ED3\u675F\u540E\uFF0C\u70B9\u51FB\u590D\u5236\u94FE\u63A5\u6309\u94AE\uFF0C\u9080\u8BF7\u597D\u53CB\u6253\u5F00\uFF0C\u5373\u53EF\u8BA9\u597D\u53CB\u4E5F\u6765\u731C\u731C\u8FD9\u4E2A\u6210\u8BED\u3002 "),u("h2",{class:"font-bold text-center my-2 text-lime-800"}," \u9879\u76EE "),u("p",{class:"mb-2"},[h(" \u672C\u9879\u76EE"),u("a",{href:"https://github.com/AllanChain/chinese-wordle",class:"text-blue-700 hover:underline"},"\u5728 GitHub \u5F00\u6E90"),h("\uFF0C\u5982\u6709\u95EE\u9898\u548C\u5EFA\u8BAE\u6B22\u8FCE\u63D0\u51FA\u3002 ")]),u("p",{class:"mb-2"}," \u9879\u76EE\u7684\u7075\u611F\u6765\u81EA\u4E8E wordle\uFF0C\u5F88\u5BB9\u6613\u641C\u5230\uFF0C\u4E0D\u591A\u53D9\u8FF0\u3002 "),u("br"),u("p",null,"\u5728\u4E0B\u65B9\u7684\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u4EFB\u610F\u4E00\u4E2A\u56DB\u5B57\u6210\u8BED\u5F00\u59CB\u6E38\u620F\u3002")],-1),iu=y({setup(e){const s=x(!0);return(t,n)=>(r(),B(U,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l)},{default:$(()=>[lu]),_:1},8,["modelValue"]))}}),ou=["disabled"],ru=["value"],au=y({props:{disabled:{type:Boolean}},setup(e){var n;const s=x((n=localStorage.getItem("wordle-difficulty"))!=null?n:"easy"),t=K();return M(s,()=>{s.value in z&&(t.difficulty=z[s.value],localStorage.setItem("wordle-difficulty",s.value))},{immediate:!0}),(l,o)=>ue((r(),a("select",{"onUpdate:modelValue":o[0]||(o[0]=i=>s.value=i),class:"rounded-lg px-1 mr-2 h-8","w:border":"1 blue-400 disabled:gray-400","w:bg":"white disabled:gray-100","w:text":"blue-900 disabled:gray-500",disabled:e.disabled},[(r(!0),a(v,null,D(d(z),(i,c)=>(r(),a("option",{key:c,value:c},p(i.name),9,ru))),128))],8,ou)),[[Ee,s.value]])}}),du=u("h1",{class:"text-lg text-center mb-2"}," \u7EDF\u8BA1 ",-1),cu={class:"flex justify-center text-sky-900"},mu={class:"flex items-center flex-col w-16"},hu={class:"text-xl font-bold"},Fu=u("div",null,"\u5C40",-1),fu={class:"flex items-center flex-col w-20"},Eu={class:"text-xl font-bold"},gu=u("div",null,"\u80DC\u7387",-1),Cu=u("h2",{class:"text-center my-2"}," \u731C\u6D4B\u6B21\u6570\u7EDF\u8BA1 ",-1),xu={class:"min-w-72 font-mono text-yellow-800"},pu={key:0,class:"text-center"},wu={class:"ml-6"},yu=y({props:{guessRecord:null},setup(e){const s=e,t=x(!1),n=P(()=>s.guessRecord.length===0?0:s.guessRecord.filter(i=>i>0).length/s.guessRecord.length*100),l=P(()=>{const o=s.guessRecord.reduce((i,c)=>{var g;return c<1||(i[c]=((g=i[c])!=null?g:0)+1),i},{});return Object.entries(o).map(([i,c])=>({count:i,countGuesses:c})).sort((i,c)=>parseInt(i.count,10)-parseInt(c.count,10))});return(o,i)=>(r(),B(U,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=c=>t.value=c)},{default:$(()=>[du,u("div",cu,[u("div",mu,[u("div",hu,p(e.guessRecord.length),1),Fu]),u("div",fu,[u("div",Eu,p(d(n).toFixed(1))+"% ",1),gu])]),Cu,u("div",xu,[d(l).length===0?(r(),a("div",pu," \u6682\u65E0\u6570\u636E ")):j("",!0),(r(!0),a(v,null,D(d(l),({count:c,countGuesses:g})=>(r(),a("div",{key:c,class:"flex items-center"},[u("div",wu,p(c),1),u("div",{class:"bg-yellow-300 h-4 mx-2 px-2 flex justify-end items-center","w:border":"rounded-md",style:ge({width:`calc(28px + ${g/e.guessRecord.length*65}%)`})},p(g),5)]))),128))])]),_:1},8,["modelValue"]))}});var vu="/chinese-wordle/assets/all-idioms.fa26d284.json",Bu="/chinese-wordle/assets/freq-idioms.8d5d143d.json";const bu={class:"p-4 mx-auto max-w-2xl"},Du={class:"flex","w:border":"b-1 solid gray-300","w:p":"b-2"},Au={class:"flex justify-center w-18"},_u=u("h1",{class:"flex-1","w:text":"3xl center blue-900"}," \u62FC\u6210\u8BED ",-1),Iu={class:"flex justify-center w-18"},$u={class:"flex my-2"},ku={class:"grid grid-cols-1 sm:grid-cols-2"},Pu=u("div",{class:"h-10"},null,-1),Vu={class:"fixed bottom-2 left-1/2 transform -translate-x-1/2"},Su={key:0,class:"px-2 py-1 mb-1 rounded-md bg-red-500 text-white"},Ru={key:0,class:"text-center rounded mx-auto px-4 py-2 w-50 bg-yellow-100 text-yellow-800"},ju={key:1,class:"flex justify-center"},Ou=["onKeyup"],qu={key:2,class:"flex"},Lu=y({setup(e){var H;const s=N(),t=K(),n=x(null),l=x(""),o=x(""),i=x(null),c=x(!0),g=x(""),I=x(localStorage.getItem("played-wordle")!=="true"),A=x(!1),C=x(!1),m=x(!1),w=x(!1),F=P(()=>w.value||t.lost||t.won),R=x(JSON.parse((H=localStorage.getItem("wordle-guess-record"))!=null?H:"[]")),T=V=>{R.value.push(V),localStorage.setItem("wordle-guess-record",JSON.stringify(R.value))};M(()=>t.lost,()=>{t.lost&&(A.value=!0,T(-1))},{immediate:!1}),M(()=>t.won,()=>{t.won&&(A.value=!0,T(t.guessedIdioms.length))},{immediate:!1}),se(()=>localStorage.setItem("played-wordle","true"));const me=()=>{t.reset(),t.initAnswerIdiom(s.randomIdiom()),w.value=!1},he=V=>{i.value!==null&&clearTimeout(i.value),o.value=V,i.value=window.setTimeout(()=>{o.value="",i.value=null},3e3)},Y=()=>{t.guessIdiom(l.value)||he("\u5B83\u4E0D\u5728\u6211\u4EEC\u7684\u8BCD\u5E93\u91CC..."),l.value=""};return se(async()=>{try{const f=await(await fetch(vu)).json();s.setAllIdioms(f);const S=await(await fetch(Bu)).json();s.setFreqIdioms(S);const k=new URL(location.href).searchParams.get("idiom");if(k){let q;k.length===4?q=J("cnwordle",k):q=J("cnwordle",ee.decode(k)),S.includes(q)?t.initAnswerIdiom(q):(g.value="\u5206\u4EAB\u65E0\u6548\uFF0C\u5237\u65B0\u91CD\u5F00",t.initAnswerIdiom(s.randomIdiom()))}else t.initAnswerIdiom(s.randomIdiom());history.pushState(null,"",location.href.split("?")[0]),c.value=!1}catch{g.value="\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0"}}),(V,f)=>(r(),a(v,null,[b(iu,{modelValue:I.value,"onUpdate:modelValue":f[0]||(f[0]=E=>I.value=E)},null,8,["modelValue"]),b(yu,{modelValue:C.value,"onUpdate:modelValue":f[1]||(f[1]=E=>C.value=E),"guess-record":R.value},null,8,["modelValue","guess-record"]),d(t).answerIdiom&&d(t).answerOrigPinyin?(r(),B(Te,{key:0,modelValue:A.value,"onUpdate:modelValue":f[2]||(f[2]=E=>A.value=E),answer:d(t).answerIdiom,"answer-pinyin":d(t).answerOrigPinyin,won:d(t).won},null,8,["modelValue","answer","answer-pinyin","won"])):j("",!0),b(uu,{modelValue:m.value,"onUpdate:modelValue":f[3]||(f[3]=E=>m.value=E),excluded:d(t).excludeList,included:d(t).includeList},null,8,["modelValue","excluded","included"]),u("div",bu,[u("div",Du,[u("div",Au,[u("button",{class:"bg-red-400 text-white rounded-md px-2 py-1",onClick:f[4]||(f[4]=E=>{A.value=!0,w.value=!0,T(-1)})}," \u7B54\u6848 ")]),_u,u("div",Iu,[u("button",{class:"text-emerald-700 text-xl mx-2",onClick:f[5]||(f[5]=E=>C.value=!0)},[b(d(L),{icon:"ion:ios-stats"})]),u("button",{class:"text-emerald-700 text-xl mx-2",onClick:f[6]||(f[6]=E=>I.value=!0)},[b(d(L),{icon:"ph:info-bold"})])])]),u("div",$u,[b(au,{disabled:d(t).guessedIdioms.length>0&&!d(F)},null,8,["disabled"]),b(Je,{hints:d(t).hints.map(E=>E.content)},null,8,["hints"]),u("button",{class:"bg-teal-500 text-white rounded-md h-8 w-22",onClick:f[7]||(f[7]=E=>m.value=!0)}," \u67E5\u770B\u6392\u9664 ")]),u("div",ku,[(r(!0),a(v,null,D(d(t).guesses,(E,S)=>(r(),B(Ve,{key:S,idiom:E.idiom,pinyin:E.pinyin,"guess-results":E.result,class:_(d(t).won&&S===d(t).guesses.length-1?["!children:border-green-400","!children:border-double"]:[])},null,8,["idiom","pinyin","guess-results","class"]))),128)),(r(!0),a(v,null,D(d(t).totalChances-d(t).guesses.length,E=>(r(),B(tu,{key:E,class:_(d(t).won?["!children:border-red-50"]:[]),onClick:f[8]||(f[8]=S=>{var k;return(k=n.value)==null?void 0:k.focus()})},null,8,["class"]))),128))]),Pu,u("div",Vu,[b(W,null,{default:$(()=>[o.value?(r(),a("div",Su,p(o.value),1)):j("",!0)]),_:1}),b(W,null,{default:$(()=>[c.value||g.value?(r(),a("div",Ru,p(g.value||"\u52A0\u8F7D\u4E2D..."),1)):d(F)?(r(),a("div",qu,[u("div",{class:_(["flex px-2 w-28 rounded-l bg-gray-100 items-center justify-center",d(t).won?"bg-green-100 text-green-900":"bg-red-100 text-red-900"])},[u("div",null,p(d(t).won?"\u606D\u559C\u4F60":"\u5F88\u9057\u61BE"),1)],2),u("button",{class:"rounded-r w-18","w:p":"x-4 y-2","w:bg":"indigo-500 hover:indigo-600 active:indigo-700","w:text":"white",onClick:me}," \u91CD\u5F00 ")])):(r(),a("div",ju,[ue(u("input",{ref_key:"idiomInput",ref:n,"onUpdate:modelValue":f[9]||(f[9]=E=>l.value=E),maxlength:"4",class:"rounded-l px-2 w-32","w:border":"1 solid gray-300","w:focus":"ring ring-blue-400 border-blue-400","w:disabled":"bg-gray-100",onKeyup:xe(Y,["enter"])},null,40,Ou),[[Ce,l.value]]),u("button",{class:"rounded-r w-18","w:p":"x-4 y-2","w:bg":"blue-500 hover:blue-600 active:blue-700 disabled:blue-gray-400","w:text":"white",onClick:Y}," \u786E\u8BA4 ")]))]),_:1})])])],64))}});const ce=pe(Lu);ce.use(we());ce.mount("#app");