(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n(285)},120:function(e,t,n){},128:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){},134:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},140:function(e,t,n){},142:function(e,t,n){},198:function(e,t){},200:function(e,t){},235:function(e,t){},236:function(e,t){},285:function(e,t,n){"use strict";n.r(t);for(var a=n(1),r=n.n(a),o=n(21),i=n.n(o),s=(n(120),n(6)),l=n(7),c=n(9),u=n(8),h=n(10),m=n(3),d=(n(122),n(124),n(126),n(128),n(130),n(132),n(134),n(136),n(138),n(140),n(142),n(288)),g=n(286),p=n(194),f=n(28),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){return function(t){n.props.setPath(e)}},n.state={active:!1},n.toggleNav=n.toggleNav.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){console.log("CALLED");var e=!this.state.active;this.setState({active:e})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-banner nav-mobile",onClick:this.toggleNav},this.state.active?r.a.createElement("div",null,r.a.createElement("div",{className:"nav-button"},r.a.createElement(p.a,{to:"/",onClick:this.handleClick("/")},"Information & Tutorials")),r.a.createElement("hr",null),r.a.createElement("div",{className:"nav-button"},r.a.createElement(p.a,{to:"/new",onClick:this.handleClick("/new")},"New Assignment")),r.a.createElement("hr",null),r.a.createElement("div",{className:"nav-button"},r.a.createElement(p.a,{to:"/token-checker",onClick:this.handleClick("/token-checker")},"Check Token"))):r.a.createElement(f.a,{icon:"bars",size:"2x",className:"white-text hamburger-icon"}))}}]),t}(a.Component),b=function(e){var t=e.setPath,n=function(e){return function(n){t(e)}};return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-banner nav-desktop"},r.a.createElement("div",{className:"nav-button"},r.a.createElement(p.a,{to:"/",onClick:n("/")},"Information & Tutorials")),r.a.createElement("div",{className:"nav-button"},r.a.createElement(p.a,{to:"/new",onClick:n("/new")},"New Assignment")),r.a.createElement("div",{className:"nav-button"},r.a.createElement(p.a,{to:"/token-checker",onClick:n("/token-checker")},"Check Token"))),r.a.createElement(y,{setPath:t}))},w=n(40),v=n(114),k={cryptrKey:"SECRET"},E=new(n.n(v).a)(k.cryptrKey),O=function(){return r.a.createElement("div",{id:"dictation-options"},r.a.createElement("label",null,"Play Count (0 = Unlimited)"),r.a.createElement("br",null),r.a.createElement("input",{id:"play-count",type:"number",defaultValue:"0",min:"0",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{id:"prevent-playback",type:"checkbox"}),r.a.createElement("label",{for:"prevent-playback"},"Prevent Student Score Playback"))},N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={type:"written"},n.setType=n.setType.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setType",value:function(){this.setState({type:document.getElementById("assignment-type").value})}},{key:"handleChange",value:function(e){return function(){e(),console.log("called")}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Assignment Type"),r.a.createElement("br",null),r.a.createElement("select",{id:"assignment-type",onChange:this.handleChange(this.setType)},r.a.createElement("option",{value:"written"},"Written"),r.a.createElement("option",{value:"dictation"},"Dictation")),r.a.createElement("br",null),"dictation"===this.state.type&&r.a.createElement(O,null))}}]),t}(a.Component),C=function(){return r.a.createElement("div",{id:"check-for-options"},r.a.createElement("p",null,"All assignments are checked for correct pitches and rhythms. You can select additional grading criteria from the list below (these will not be checked for by default)"),r.a.createElement("input",{id:"slurs",value:"slur",className:"check-for",type:"checkbox"}),r.a.createElement("label",{for:"slurs"},"Slurs/Phrase Marks"),r.a.createElement("br",null),r.a.createElement("input",{id:"rna",value:"chordSymbol",className:"check-for",type:"checkbox"}),r.a.createElement("label",{for:"rna"},"Roman Numeral & Chord Analysis"),r.a.createElement("br",null),r.a.createElement("input",{id:"text",value:"performance",className:"check-for",type:"checkbox"}),r.a.createElement("label",{for:"text"},"Other Text"))},j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){return function(t){t.preventDefault();var n=document.getElementById("assignment").value,a=document.getElementById("answer").value,r=document.getElementById("assignment-type").value,o="dictation"===r?document.getElementById("play-count").value:null,i="dictation"===r?document.getElementById("prevent-playback").checked:null,s=Object(w.a)(document.getElementsByClassName("check-for")).map(function(e){return e.checked?e.value:null}).filter(function(e){if(e)return e}),l="".concat(window.location.origin,"?assignment="),c=JSON.stringify({assignment:n,answer:a,type:r,playCount:o,preventPlayback:i,checkFor:s}),u=E.encrypt(c);e(l+u)}}},{key:"render",value:function(){return r.a.createElement("form",{id:"new-assignment-form",onSubmit:this.handleSubmit(this.props.setLink)},r.a.createElement("div",{className:"assignment-form-section"},r.a.createElement("h2",{className:"new-assignment-section-heading"},"Score URLs"),r.a.createElement("label",null,"Assignment Score*"),r.a.createElement("br",null),r.a.createElement("input",{id:"assignment",type:"text",placeholder:"Noteflight URL",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Answer Score*"),r.a.createElement("br",null),r.a.createElement("input",{id:"answer",type:"text",placeholder:"Noteflight URL",required:!0}),r.a.createElement("br",null)),r.a.createElement("div",{className:"assignment-form-section"},r.a.createElement("h2",{className:"new-assignment-section-heading"},"Assingnment Options"),r.a.createElement(N,null)),r.a.createElement("div",{className:"assignment-form-section"},r.a.createElement("h2",{className:"new-assignment-section-heading"},"Grading Options"),r.a.createElement(C,null)),r.a.createElement("p",null,"(* indicates a required field)"),r.a.createElement("input",{type:"submit",value:"Generate Assignment Link"}))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={link:null},n.setLink=n.setLink.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setLink",value:function(e){console.log("called"),this.setState({link:e})}},{key:"copyText",value:function(e){document.getElementById("copy-link").select(),document.execCommand("copy")}},{key:"render",value:function(){return r.a.createElement("div",{id:"new-assignment-container"},r.a.createElement("section",{className:"instructions text-box"},r.a.createElement("h2",null,"Create a new assignment"),r.a.createElement("p",null,"Welcome to the assignment creator! To make a new assignment, you will need two URLs: One to your assignment score that you created in ",r.a.createElement("a",{className:"in-text-link",href:"https://www.noteflight.com",target:"_blank"},"Noteflight"),' (the one people will interact with), and an answer template score. Your answer score should be the same as the assignment score, but with all the answers marked exactly as you would like them in the assignment. Make sure both scores are shared on Noteflight with all users, a specific user, or a specific group, and that "Let people copy & export this score" is checked.'),r.a.createElement("p",null,"See the ","tutorials"," for more information on how to setup your scores.")),r.a.createElement(j,{setLink:this.setLink}),this.state.link&&r.a.createElement("div",null,r.a.createElement("p",null,"Share the link below to give students and other users access to your assignment"),r.a.createElement("textarea",{id:"copy-link",value:this.state.link,readonly:"true"}),r.a.createElement("button",{className:"copy-text-button",onClick:this.copyText},"Copy to Clipboard"),r.a.createElement("br",null),r.a.createElement("a",{href:this.state.link,target:"_blank"},"See Your Assignment")))}}]),t}(a.Component),x=n(287),T=n(67),I=n.n(T),A={compact:!0,ignoreComment:!0},P=function(e,t){for(var n,a,r,o=[],i=0;i<t.length;i++)o.push((n=e,a=t,r=i,[I.a.xml2js(n[r].outerHTML,A),I.a.xml2js(a[r].outerHTML,A)]));return o},L={},D=["cx1","cx2","cy1","cy2","ascent","direction","dx","dy","endx","endx","color","beam","performance","chordSymbol","slur"],M=0;M<D.length;M++){L[D[M]]=!0}var F=L,q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={answer:null,staffCount:0,errors:[],currentErrorIndex:0,assignmentScore:null,answerScore:null,currentPlayCount:0},n.setAnswer=n.setAnswer.bind(Object(m.a)(Object(m.a)(n))),n.setStaffCount=n.setStaffCount.bind(Object(m.a)(Object(m.a)(n))),n.setErrors=n.setErrors.bind(Object(m.a)(Object(m.a)(n))),n.setScores=n.setScores.bind(Object(m.a)(Object(m.a)(n))),n.increaseErrorIndex=n.increaseErrorIndex.bind(Object(m.a)(Object(m.a)(n))),n.decreaseErrorindex=n.decreaseErrorindex.bind(Object(m.a)(Object(m.a)(n))),n.resetErrorIndex=n.resetErrorIndex.bind(Object(m.a)(Object(m.a)(n))),n.increaseCurrentPlayCount=n.increaseCurrentPlayCount.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentSetup",value:function(){var e=this.props.params;this.params=e,this.assignmentScore=e.assignment,this.answerScore=e.answer,this.NFClient=window.NFClient;var t=!0,n=!1,a=void 0;try{for(var r,o=e.checkFor[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;F[i]=!1}}catch(c){n=!0,a=c}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}this.assignmentScoreCode=this.parseNFUrl(e.assignment).scoreCode,this.answerScoreCode=this.parseNFUrl(e.answer).scoreCode;var s=this.parseNFUrl(e.assignment).host,l=this.parseNFUrl(e.answer).host;this.options={},this.options.assignment={width:"100%",hieght:"100%",host:s,viewParams:{scale:1.5,role:"template",displayMode:"paginated",playback:e.preventPlayback?"silent":"normal"}},this.options.answer={height:1,width:1,host:l,viewParams:{scale:.1,role:"reader",displayMode:"paginated"}}}},{key:"parseNFUrl",value:function(e){var t=e.split("/");return{host:t[2],scoreCode:t[t.length-1]}}},{key:"setAnswer",value:function(e){this.setState({answerData:e})}},{key:"setStaffCount",value:function(e){this.setState({staffCount:e})}},{key:"setErrors",value:function(e){this.setState({errors:e})}},{key:"setScores",value:function(e,t){this.setState({assignmentScore:e,answerScore:t})}},{key:"increaseErrorIndex",value:function(){var e=this.state.currentErrorIndex;e+1<this.state.errors.length&&e++,this.setState({currentErrorIndex:e})}},{key:"decreaseErrorindex",value:function(){var e=this.state.currentErrorIndex;e-1>=0&&e--,this.setState({currentErrorIndex:e})}},{key:"resetErrorIndex",value:function(){this.setState({currentErrorIndex:0})}},{key:"increaseCurrentPlayCount",value:function(){var e=this.state.currentPlayCount;return e++,this.setState({currentPlayCount:e}),e}},{key:"showError",value:function(e){var t=this.state.errors[e],n=Math.floor(t/this.state.staffCount);this.state.assignmentScore.selectRange(n,0,n,100,[t%this.state.staffCount])}},{key:"deselectMeasures",value:function(){this.state.assignmentScore.clearSelection()}},{key:"compareMeasures",value:function(e){var t=e[0],n=e[1],a=!1;return function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"measure";if(t[r]){if("object"!==typeof n)return t!==n?void(a=!0):void 0;if("chord"===r)return t[r]._text!==n[r]._text?void(a=!0):void 0;if("string"===typeof n[r])return t&&n[r].toLowerCase()===t[r].toLowerCase()?void 0:void(a=!0);for(var o in n[r])F[o]||t&&n&&e(t[r],n[r],o)}else a=!0}(t,n),a}},{key:"measureErrors",value:function(e,t){for(var n=P(e,t),a=[],r=0;r<n.length;r++){this.compareMeasures(n[r])&&a.push(r)}return a}},{key:"componentDidMount",value:function(){var e=this,t=new this.NFClient.ScoreView(this.assignmentScoreCode,this.assignmentScoreCode,this.options.assignment),n=new this.NFClient.ScoreView(this.answerScoreCode,this.answerScoreCode,this.options.answer);this.setScores(t,n);var a=document.getElementById(this.assignmentScoreCode),r=document.getElementById(this.answerScoreCode),o=document.getElementById("check-work"),i=document.getElementById("play-answer");a.className="score-container nf-assignment-score nf-interactive",r.className="score-container nf-answer-score nf-interactive";var s=new DOMParser;a.onload=function(){console.log("assignment Loaded"),t.addEventListener("scoreDataLoaded",function(){console.log("ASSIGNMENT FRAME READY FOR INTERACTION")}),e.params.preventPlayback&&t.addEventListener("playbackRequest",function(){t.stopPlayback()})},r.onload=function(){console.log("Answer Loaded"),n.addEventListener("scoreDataLoaded",function(){n.getNoteflightXML().done(function(t){var n=s.parseFromString(t,"text/xml"),a=Object(w.a)(n.getElementsByTagName("staff")).filter(function(e,t){return t>0});e.setStaffCount(a.length);for(var r=[],l=0;l<a[0].children.length;l++)for(var c=0;c<a.length;c++)r.push(a[c].children[l]);e.setAnswer(r),o.disabled=!1,document.getElementById("reload-warning").remove(),o.innerHTML="Check Your Work",o.disabled=!1,i&&(i.innerHTML="Play Dictation Excerpt",i.disabled=!1)})})},o.onclick=function(n){t.getNoteflightXML().done(function(t){for(var n=s.parseFromString(t,"text/xml"),r=Object(w.a)(n.getElementsByTagName("staff")).filter(function(e,t){return t>0}),o=[],i=0;i<r[0].children.length;i++)for(var l=0;l<r.length;l++)o.push(r[l].children[i]);var c=e.measureErrors(o,e.state.answerData,s);e.resetErrorIndex(),e.setErrors(c),c.length||(a.className="score-container nf-assignment-score nf-interactive assignment-score-passed",e.deselectMeasures(),e.props.passedAssignment())})},"dictation"===this.params.type&&(i.onclick=function(t){(e.state.currentPlayCount<parseInt(e.params.playCount)||"0"===e.params.playCount)&&(n.playFromSelection(0),e.state.currentPlayCount+1===parseInt(e.params.playCount)&&(t.target.innerText="No Plays Remaining",t.target.disabled=!0),e.increaseCurrentPlayCount())})}},{key:"render",value:function(){return this.componentSetup(),this.state.errors.length&&this.showError(this.state.currentErrorIndex),r.a.createElement("div",{id:"nf-interactive"},"dictation"===this.params.type&&r.a.createElement("div",null,r.a.createElement("button",{id:"play-answer",disabled:!0},"Loading Dictation..."),r.a.createElement("p",null,"Plays Remaining: ","0"===this.params.playCount?"Unlimited":parseInt(this.params.playCount)-this.state.currentPlayCount)),r.a.createElement("br",null),r.a.createElement("div",{id:this.assignmentScoreCode}),r.a.createElement("div",{id:this.answerScoreCode}),r.a.createElement("br",null),r.a.createElement("p",{id:"reload-warning"},r.a.createElement("em",null,'If the button below is stuck on "Loading Assignment...", try refreshing the page. You may need to refresh a few time before the score loads correctly.')),!this.props.passed&&r.a.createElement("button",{id:"check-work",disabled:!0},"Loading assignment..."),this.state.errors.length>0&&r.a.createElement("div",{id:"error-navigation-buttons",className:"section-box"},r.a.createElement("h2",null,"Errors"),r.a.createElement("p",null,'Use the buttons below to navigate through the marked errors on the score. Make sure to press the "Check Your Work" button to recheck for errors.'),r.a.createElement("button",{onClick:this.decreaseErrorindex},r.a.createElement(f.a,{icon:"arrow-left"})," Previous Error "),r.a.createElement("button",{onClick:this.increaseErrorIndex},"Next Error ",r.a.createElement(f.a,{icon:"arrow-right"}))))}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).studentName=e.studentName,n.answer=e.answer,n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"encryptData",value:function(e,t){var n={studentName:e,answer:t,date:new Date};return console.log(n),E.encrypt(JSON.stringify(n))}},{key:"copyText",value:function(e){document.getElementById("encrypted-token").select(),document.execCommand("copy")}},{key:"render",value:function(){return r.a.createElement("div",{className:"encrypted-token"},r.a.createElement("p",null,"The token below may serve as proof of completion for this assignment."),r.a.createElement("textarea",{id:"encrypted-token",value:this.encryptData(this.studentName,this.answer)}),r.a.createElement("button",{onClick:this.copyText},"Copy to Clipboard"))}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={signature:null},n.setSignature=n.setSignature.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setSignature",value:function(e){this.setState({signature:e})}},{key:"handleSubmit",value:function(e){return function(t){t.preventDefault();var n=document.getElementById("name").value;e(n)}}},{key:"encryptToken",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{id:"submit-assignment",className:"section-box"},!this.state.signature&&r.a.createElement("form",{id:"sign-and-submit-form",onSubmit:this.handleSubmit(this.setSignature)},r.a.createElement("h2",null,"Congratulations! You passed!"),r.a.createElement("p",null,"If you completed this assignment as part of a class, sign your name below and submit. A unique token will be generated for you to use as proof of completion."),r.a.createElement("label",{for:"name"},"Your Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"name"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Sign & Submit"})),!!this.state.signature&&r.a.createElement(B,{studentName:this.state.signature,answer:this.props.answer}))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={passed:!1},n.passedAssignment=n.passedAssignment.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"passedAssignment",value:function(){this.setState({passed:!0})}},{key:"decryptParams",value:function(){var e=window.location.search.split("assignment=")[1],t=E.decrypt(e);return JSON.parse(t)}},{key:"render",value:function(){if(!window.location.search.match("assignment")){var e=window.location.href.split("/");return e=e[e.length-1],r.a.createElement(x.a,{to:"/".concat(e)})}var t=this.decryptParams();return console.log("ASSIGNMENT-PARAMS: ",t),r.a.createElement("section",{className:"text-box"},r.a.createElement("h2",null,"Interactive Assignment"),r.a.createElement("p",null,"This is an interactive assignment created on ",window.location.origin.split("//")[1],". All assignments are self-grading."),r.a.createElement("p",null,'At any time, you can check your work by pressing the "Check Your Work" button below the assignment. If there are any errors, they will be highlighted on the score. In the case of multiple erros, you can step through each error with arrow buttons that will appear below the assignment to see what you got right, and what you got wrong.'),r.a.createElement("p",null,'If the assingment is a dictation, you will also be allowed to play the dictation via the "Play Dictation Excerpt" button above the assingment. Depending on how the assignment was created, you may have a limited number of playings available. Your remaining playings will also appear above the assingment.'),r.a.createElement("p",null,"All assignments are built using the Noteflight music notation application. For information on how to interact with the Noteflight score, see ",r.a.createElement("a",{href:"https://www.noteflight.com/guide",target:"_blank"},"this link")),r.a.createElement("div",{id:"assignment-container"},r.a.createElement(q,{params:t,passed:this.state.passed,passedAssignment:this.passedAssignment}),this.state.passed&&r.a.createElement(R,{answer:t.answer})))}}]),t}(a.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tutorial-banner",onClick:this.props.toggleActive},r.a.createElement("div",{className:"tutorial-banner-element tutorial-active-indicator"},r.a.createElement("h1",null,this.props.activeState?"-":"+")),r.a.createElement("div",{className:"tutorial-banner-title tutorial-banner-element"},r.a.createElement("h1",null,this.props.title)))}}]),t}(a.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content;return r.a.createElement("div",{className:"content-container"},e.data)}}]),t}(a.Component),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={active:!1},n.toggleActive=n.toggleActive.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggleActive",value:function(){var e=!this.state.active;this.setState({active:e})}},{key:"tutorialSectionClick",value:function(e){var t=e.target.children;console.log(t)}},{key:"render",value:function(){var e=this.props.content;return r.a.createElement("div",{className:"tutorial-container"},r.a.createElement(W,{title:e.title,activeState:this.state.active,toggleActive:this.toggleActive}),this.state.active&&r.a.createElement(Y,{content:e}))}}]),t}(a.Component);function H(e){return r.a.createElement("p",null,e)}function V(e){return r.a.createElement("div",{className:"heading-container"},r.a.createElement("h2",null,e))}function _(e){return r.a.createElement("ol",null,e.map(function(e){return r.a.createElement("li",null,e)}))}function J(e){return r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",null,e)}))}function z(e,t){return r.a.createElement("div",null,r.a.createElement("a",{href:t,target:"_blank"},e))}var K={title:"Student Tutorials",data:[V("Introduction"),H("If you received or found a link to an assignment on this site, welcome! The following tutorials well help you by:"),_(["Showing how to interact with written and dictation assignments","Explaining how assignment are graded, and how incorrect errors are displayed","Showing how to generate a unique token as proof of completion","showing how to view the answer key to an assignment after it has been completed"]),H("Note: Assignments are built using Noteflight scores. If you are not familiar with the Noteflight platform, I suggest that you visit the link below for tutorials on how to use their product."),z("Noteflight User Guide","https://www.noteflight.com/guide"),V("Interacting With Assignments"),H('For both written and dictation assignments, you can check your work at any time by pressing the "Check My Work" button below the score. If everything matches the answer template, you will be allowed to sign and submit your assignment. Otherwise, any incorrect answers will be shown on the score. '),H('For dictation assignments, you can also play the dictation excerpt by pressing the "Play Dictation" button above the score. Depening on how the assignment was setup, you may have a limited number of playings available on any single attempt.'),H("NOTE: Interacting with assignments only works after they have been propery loaded from the noteflight server. Occasionally, there may be an issue connecting to the server, and neither of the previously mentioend buttons will do anything. If this is the case, simple refresh the page, and it should work after a few attempts."),V("Assignment Grading & Error Display"),H("All assignments are checked for correct notes and rhythms, plus any additional grading criteria that the assignment designer may have set."),H("When you check your work, the program checks each measure individually against the answer template. If anything is found to be a mismatch, then the measure will be highlighted to indicate that there is an error."),H("If the assignment requires a chord/roman numeral analysis, upper case vs lower case letters will matter. Other text, like that which you might find above the staff, are not graded for case."),H("If there are errors when the assignment is graded, you can visually step through each measure to see where your errors are. As you step through the errors, you can see what you got right, what you got wrong, and make adjustments as needed."),V("Signing & Submitting Your Work"),H("If you are doing an assignment for a course, and need proof that you completed it, the application can generate a unique token for you that your instructor can later authenticate. Once an assignment has been completed, and there are no errors, you will be allowed to sign your name and submit. Upon submitting, a token, unique to your signature and time the assignment was completed, will be generated. You can then copy this token and provide it as proof to any instructor that you completed the assignment. They can then verify the token to ensure its authenticity."),H("NOTE: Even if you are not completing the assignment for part of a course, you may still wish to generate a token and save it for later. This token will also allow you to view the answer template at a later date, without having to redo the assignment."),V("Viewing the Answer Key After Completion"),H("After you have completed an assignment, signed your name, and generated a unique token, you can view the answer key. This is particularly helpful if you want to review the answers later to help you study."),H('In the navigation menu of this site, go to the tab titled "Check Token". Here, you will be able to paste your token to authenticate it. Once authenticated, there will be an option to "View Answers". Click this link, and you will be taken to the answer template for the assignment.')]},X={title:"Instructor Tutorials",data:[V("Introduction"),H("These tutorials will help instructors learn how to create and share assignments. They will cover:"),_(["Creating basic written and dictation assignments","Configuring your scores on Noteflight to allow auto-grading","Optimizing your Noteflight scores for easy grading","Additional grading configurations","Editing assignments after they have been created","Suggested Practices for creating assignments on Noteflight"]),H("Note: Assignments are built using Noteflight scores. If you are not familiar with the Noteflight platform, I suggest that you visit the link below for tutorials on how to use their product."),z("Noteflight User Guide","https://www.noteflight.com/guide"),V("Creating Assignments"),H("To create a new assignment, go to the new assignment tab in the navigation at the top of the site. There, you will be presented with a number of options for how to configure your assignment."),H("There are two required entries: both URLs linking to scores on Noteflight. The assignment score should be the score that displays to the user, without any of the answers marked. The answer score should be a copy of the assignment score, but with all the answers marked exactly as you would like them to be graded."),H('Additionally, you may choose between "Written" and "Dictation" assignments. There is no difference in how the two are graded, but a "Dictation" assignment will allow users to play audio from the answer score, and a "Written" assignment will not. There are also a few other available options for dictations, such as setting a maximum play count, and disabling audio playback from the user score.'),V("Configuring Scores on Noteflight"),H("In order for users to be able to view the scores in your assignments, and for the auto-grading to work, you must share your scores on Noteflight correctly."),H('Once your assignment and answer scores are set to your liking, you need to share them with individual people, groups, or all users. To do this, go to "Score Details" in the upper right hand corner of the screen, and then to the "Share" menu. If you intend for your assignment to only be viewed by a few people, you can choose to share your score with them directly, or with a group they are in. If you want you assignment to be usable by anyone, you should set sharing privileges to "Everyone".'),H('To enable auto grading, you must also check the box in the share settings labled "Let people copy & export this score" at the bottom of the share window.'),V("Additional Grading Options"),H("You can optionally specify other musical elements that you want the program to grade. None of these elements are graded by default. These elements are detaild below:"),J(["Slurs & Phrase Marks: this checks slur marks between two notes. It does not check the exact positioning of the slurs, but only that they start and end on the correct notes.",'Roman Numeral & Chord Analysis: This will check for any text made with the "Chord" text tool. For these, upper vs lower case does matter, and an answer will read as incorrect if it does not match the exact capitalization.','Other Text: This would be anything created with the "Text" tool. For this, spelling will matter, but capitalization will not. This is best used for simple text answers, like indicating intervals, cadence types, etc.']),V("Editing Assignments After They Have Been Created"),H("This program does not save any information you enter when you create an assignment. Rather, the link that is generated when you create your assignment contains everytning needed to recreate it when a user follows that link. While this allows for an unlimited number of assignments, you cannot edit any assignment parameters after you generate a link because any edits to the parameters would cause the link to change."),H("However, you can still edit the assignment and answer scores on Noteflight, and those changes will be reflected in you assignment. So if you want to add a few more examples, or change the answer to an existing example, you can do this on Noteflight in the linked scores."),V("Suggested Practices for Creating Assignment Scores"),H("When creating your assignments, it is important to keep in mind that users must know exactly what to enter and where to enter it in order to pass the assignment. Therefore, I recommend the following as general guidlines for creating well structured music assignments:"),J(["Include written instructions when able, either in the document that links to the assignment, or the assignment itself.","Use colors to highlight where users should place their answers. As an example, if they need to add notes, highlight the rests where their notes should go. If they need to add text, create a text object where you would like it, and higlhight it (requires Noteflight premium to add colors).","Avoid requiring overly specific answers. This could be something like requiring full sentences for text answers, or precise rhythms that require an exact sequence of notes and rests.","Avoid ambiguous questions. Make sure there is a single answer to the questions you ask.","Keep assignments simple, and focus on just one or two things. If an assingment has too many elements in it, it can be challenging for users to remember everything they are supposed to enter.","Always do your own assignments after you make them to ensure they can be completed as you designed."]),H("Example assignments can be found at the links below:"),z("Name the Note","https://bit.ly/2XyFt8J"),z("Writing Major Scales","https://bit.ly/2GWV1hs"),z("Simple Melodic Dictation","https://bit.ly/2EwLQkq")]},Q=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=window.location.origin.split("//")[1];return r.a.createElement("div",null,r.a.createElement("section",{className:"text-box"},r.a.createElement("h1",{className:"information-heading"},e),r.a.createElement("p",{className:"information-paragraph"},r.a.createElement("em",null,"Created and maintained by ",r.a.createElement("a",{href:"http://quinndizon.com",target:"_blank"},"Quinn Dizon"))),r.a.createElement("h2",{className:"information-heading"},r.a.createElement("em",null,"NOTE: This software is still in development. Any use at this stage carries no expressed or implied guarantee of full functionality")),r.a.createElement("p",null,"Welcome to ".concat(e," , a tool that allows music teachers to easily create and link to high quality, interactive, self-grading music assignments. \n                            Whether you are a teacher or a student, there is no signup required, and it is absolutely free to use.\n                            ")),r.a.createElement("p",null,"\n                            This application is built using the Noteflight notation interface. If you are unfamiliar with their product, I highly recommend that you visit their site to learn more about the wonderful features Noteflight provides.\n                            "),r.a.createElement("a",{href:"https://www.noteflight.com",target:"_blank"},r.a.createElement("p",null,"Noteflight.com")),r.a.createElement("p",null,"Click the appropriate category below for more information and tutorials on how to use this site.")),r.a.createElement(G,{content:K}),r.a.createElement(G,{content:X}))}}]),t}(a.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"decryptToken",value:function(e){try{E.decrypt(e)}catch(t){return null}return E.decrypt(e)}},{key:"parseDate",value:function(e){return e=new Date(e),"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],", ").concat(e.getMonth()+1,"/").concat(e.getDate(),"/").concat(e.getFullYear(),", at ").concat(e.getHours(),":").concat(e.getMinutes()," ")}},{key:"render",value:function(){var e=JSON.parse(this.decryptToken(this.props.token));return r.a.createElement("div",{id:"decrypted-token",className:"section-box"},e&&r.a.createElement("div",{className:"token-info"},r.a.createElement("h2",{className:"section-heading"},"Verified"),r.a.createElement("h4",null,"Name: ",e.studentName),r.a.createElement("h4",null,"Completed On: ",this.parseDate(e.date)),r.a.createElement("a",{href:e.answer,target:"_blank"},r.a.createElement("h4",null,"View Answers"))),!e&&r.a.createElement("h2",{className:"section-heading"},"The token you have entered is invalid"))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={currentToken:null},n.setToken=n.setToken.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setToken",value:function(e){this.setState({currentToken:e})}},{key:"handleSubmit",value:function(e){return function(t){t.preventDefault(),e(document.getElementById("encrypted-token").value)}}},{key:"render",value:function(){return r.a.createElement("div",{id:"token-checker",className:"text-box"},r.a.createElement("form",{id:"token-input-form",onSubmit:this.handleSubmit(this.setToken)},r.a.createElement("h2",null,"Token Checker"),r.a.createElement("p",null,"Paste your token in the text box below. If a token is authentic, information will be displayed, including the user's signature, the date and time completed, and the answer template to the assignment."),r.a.createElement("textarea",{id:"encrypted-token",style:{width:"95%",margin:"0 auto",minHeight:"10em"}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Verify Token"})),!!this.state.currentToken&&r.a.createElement($,{token:this.state.currentToken}))}}]),t}(a.Component),ee=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e));var a=new window.URLSearchParams(window.location.search).get("assignment");return n.state={path:"/",assignment:a},n.setPath=n.setPath.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setPath",value:function(e){this.setState({path:e}),this.forceUpdate()}},{key:"render",value:function(){var e=new window.URLSearchParams(window.location.search),t=window.location.href.split("/");return t=t[t.length-1],console.log("LOCATION: ",window.location.href),r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,{setPath:this.setPath}),r.a.createElement("div",{className:"app-body"},this.state.assignment&&!e.get("assignment")&&r.a.createElement("a",{href:window.location.origin+"?assignment="+this.state.assignment},"Return to Assignment"),"/"===this.state.path&&e.get("assignment")&&r.a.createElement(U,null),"/"===this.state.path&&!e.get("assignment")&&r.a.createElement(g.a,{path:"/",exact:!0,component:Q}),r.a.createElement(g.a,{path:"/new",exact:!0,component:S}),r.a.createElement(g.a,{path:"/token-checker",exact:!0,component:Z}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,2,1]]]);
//# sourceMappingURL=main.4bf0fbea.chunk.js.map