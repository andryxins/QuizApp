(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6kMK":function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,r,o){var s;return'<div class="show-resalt">\n    <h2 class="show-resalt__title">Your Resalt :</h2>\n    <p class="show-resalt__quantity-answers">'+e.escapeExpression("function"==typeof(s=null!=(s=t.correctAnswers||(null!=n?n.correctAnswers:n))?s:e.hooks.helperMissing)?s.call(null!=n?n:e.nullContext||{},{name:"correctAnswers",hash:{},data:o,loc:{start:{line:3,column:45},end:{line:3,column:63}}}):s)+'/10</p>\n    <button class="show-resalt-btn page-btn">Start Again!</button>\n</div>'},useData:!0})},HcWP:function(e,n,t){},Jpus:function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,o){var s,a=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,u=e.escapeExpression;return'        <option value="'+u("function"==typeof(s=null!=(s=t.id||(null!=n?n.id:n))?s:i)?s.call(a,{name:"id",hash:{},data:o,loc:{start:{line:4,column:23},end:{line:4,column:29}}}):s)+'">'+u("function"==typeof(s=null!=(s=t.name||(null!=n?n.name:n))?s:i)?s.call(a,{name:"name",hash:{},data:o,loc:{start:{line:4,column:31},end:{line:4,column:39}}}):s)+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,o){var s;return'<form method="get" id="searchQuestions" class="search-form">\n    <select class="serch-form__category" name="category">\n'+(null!=(s=t.each.call(null!=n?n:e.nullContext||{},null!=n?n.trivia_categories:n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:3,column:8},end:{line:5,column:17}}}))?s:"")+'\n    </select>\n    <select name="difficulty" class="serch-form__difficulty">\n        <option value="">all difficulty</option>\n        <option value="easy">easy</option>\n        <option value="medium">normal</option>\n        <option value="hard">hard</option>\n    </select>\n    <select name="type" class="serch-form__type">\n        <option value="">any type</option>\n        <option value="multiple">multiple</option>\n        <option value="boolean">true/false</option>\n    </select>\n    <button type="submit" class="serch-form__submit page-btn">start!</button>\n</form>'},useData:!0})},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("noJ4"),t("HcWP"),t("f/Nm"),t("Zkdd"),t("JBxO"),t("FdtR"),t("wcNg");var r=t("Jpus"),o=t.n(r);function s(e,n,t,r,o,s,a){try{var i=e[s](a),u=i.value}catch(e){return void t(e)}i.done?n(u):Promise.resolve(u).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){s(a,r,o,i,u,"next",e)}function u(e){s(a,r,o,i,u,"throw",e)}i(void 0)}))}}var i=a(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://opentdb.com/api_category.php");case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));t("lmye"),t("x3Br"),t("Xlt+");function u(e,n,t,r,o,s,a){try{var i=e[s](a),u=i.value}catch(e){return void t(e)}i.done?n(u):Promise.resolve(u).then(r,o)}var c=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,r,o,s,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.category,r=n.difficulty,o=n.type,e.prev=1,s="https://opentdb.com/api.php?amount=10&category="+t.value+"&difficulty="+r.value+"&type="+o.value,e.next=5,fetch(s);case 5:return a=e.sent,e.next=8,a.json();case 8:return i=e.sent,e.abrupt("return",i.results);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(e){u(s,r,o,a,i,"next",e)}function i(e){u(s,r,o,a,i,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),l=t("6kMK"),f=t.n(l),p=t("LPVm"),h=t.n(p),d=(t("IlJM"),t("RtS0"),t("4owi"),t("WoWj"),t("3dw1"),t("u7H0")),m=t.n(d);function v(e,n,t,r,o,s,a){try{var i=e[s](a),u=i.value}catch(e){return void t(e)}i.done?n(u):Promise.resolve(u).then(r,o)}var w=function(){var e,n=(e=regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){n.insertAdjacentHTML("beforeend",m()(t)),document.querySelector(".currentQuestion").addEventListener("submit",(function(n){n.preventDefault();var r=Array.from(n.target.elements),o=r.find((function(e){return e.checked}));o?(r[r.length-1].setAttribute("disabled","true"),o.value===t.correct_answer?h()({text:"Excellent, you give correct answer!",backgroundColor:"#91e842",duration:2e3,className:"info"}).showToast():h()({text:"You were wrong(",backgroundColor:"#f64c72",duration:2e3,className:"info"}).showToast(),r.forEach((function(e){e.value===t.correct_answer&&(e.nextElementSibling.removeAttribute("style"),e.nextElementSibling.setAttribute("style","background-color: #91e842; border: 3px solid #91e842;"))})),setTimeout((function(){return e(o)}),2e3)):h()({text:"You should choose any answer!!",backgroundColor:"#f64c72",duration:2e3,className:"info"}).showToast()}))})));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(e){v(s,r,o,a,i,"next",e)}function i(e){v(s,r,o,a,i,"throw",e)}a(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();function y(e,n,t,r,o,s,a){try{var i=e[s](a),u=i.value}catch(e){return void t(e)}i.done?n(u):Promise.resolve(u).then(r,o)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(e){y(s,r,o,a,i,"next",e)}function i(e){y(s,r,o,a,i,"throw",e)}a(void 0)}))}}var x,b={correctAnswers:[],userAnswers:[],quantityOfQuestions:0,currentQuestionIdx:0,container:document.querySelector(".container"),initTest:function(){document.querySelector("#searchQuestions").addEventListener("submit",function(){var e=g(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,c(n.target.elements);case 3:if((t=e.sent).length){e.next=7;break}return h()({text:"Sory, we couldn't find anything",backgroundColor:"#f64c72",duration:2e3,className:"info"}).showToast(),e.abrupt("return");case 7:b.testStart(t);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},getCorrectAnswersAndQuantity:function(e){var n;(n=this.correctAnswers).push.apply(n,e.map((function(e){return e.correct_answer}))),this.quantityOfQuestions+=e.length},testStart:function(e){this.getCorrectAnswersAndQuantity(e),this.testRun(e)},testRun:(x=g(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.quantityOfQuestions!==this.currentQuestionIdx){e.next=7;break}return this.showTestResalt(),this.correctAnswers=[],this.userAnswers=[],this.quantityOfQuestions=0,this.currentQuestionIdx=0,e.abrupt("return");case 7:return n[this.currentQuestionIdx].incorrect_answers.splice(Math.round(Math.random()*n[this.currentQuestionIdx].incorrect_answers.length),0,n[this.currentQuestionIdx].correct_answer),this.container.innerHTML="",e.next=11,w(this.container,n[this.currentQuestionIdx]);case 11:t=e.sent,this.userAnswers.push(t.value),this.currentQuestionIdx+=1,this.testRun(n);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return x.apply(this,arguments)}),testResalt:function(){var e=this;return this.userAnswers.reduce((function(n,t,r){return t===e.correctAnswers[r]&&n++,n}),0)},showTestResalt:function(){var e=this.testResalt();this.container.innerHTML="",this.container.insertAdjacentHTML("beforeend",f()({correctAnswers:e})),this.container.querySelector(".show-resalt-btn").addEventListener("click",(function(e){return Q.renderingStartPage()}))}};function _(e,n,t,r,o,s,a){try{var i=e[s](a),u=i.value}catch(e){return void t(e)}i.done?n(u):Promise.resolve(u).then(r,o)}function k(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(e){_(s,r,o,a,i,"next",e)}function i(e){_(s,r,o,a,i,"throw",e)}a(void 0)}))}}var A,R={container:document.querySelector(".container")},Q={renderingStartPage:(A=k(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return n=e.sent,e.next=5,o()(n);case 5:t=e.sent,R.container.innerHTML="",R.container.insertAdjacentHTML("beforeend",t),b.initTest();case 9:case"end":return e.stop()}}),e)}))),function(){return A.apply(this,arguments)})};document.addEventListener("DOMContentLoaded",k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q.renderingStartPage();case 1:case"end":return e.stop()}}),e)}))))},"f/Nm":function(e,n,t){},noJ4:function(e,n,t){},u7H0:function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,o){var s=e.lambda,a=e.escapeExpression;return'    <input type="radio" name="answer" value="'+a(s(n,n))+'" id="'+a(s(n,n))+'" class="form__check-box answear-js">\n    <label for="'+a(s(n,n))+'" class="form__label">'+a(s(n,n))+"</label>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,o){var s,a,i=null!=n?n:e.nullContext||{};return'<div class="test-interface">\n  <h2 class="test-interface__title">'+e.escapeExpression("function"==typeof(a=null!=(a=t.question||(null!=n?n.question:n))?a:e.hooks.helperMissing)?a.call(i,{name:"question",hash:{},data:o,loc:{start:{line:2,column:36},end:{line:2,column:48}}}):a)+'</h2>\n  <form class="currentQuestion test-interface__form">\n\n'+(null!=(s=t.each.call(i,null!=n?n.incorrect_answers:n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:5,column:4},end:{line:8,column:13}}}))?s:"")+'\n\n    <button type="submit" class="nextQuestionBtn-js page-btn page-btn--next-question">Next</button>\n\n  </form>\n</div>\n'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.e7cfa375ce6554dc3335.js.map