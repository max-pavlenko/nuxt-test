(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(t,e,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("24c2f0c8",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o(311)},315:function(t,e,o){var n=o(71)((function(i){return i[1]}));n.push([t.i,".modal{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:100}.modal-content{background-color:#fff;border-radius:5px;max-width:500px;padding:20px;width:100%}.modal-header{align-items:center;display:flex;justify-content:space-between}.modal-body,.modal-header{margin-bottom:20px}label{display:block;margin-bottom:5px}input[type=email],input[type=password]{border:none;border-radius:5px;box-shadow:0 2px 10px rgba(0,0,0,.1);padding:10px;width:100%}.form-actions{align-items:center;display:flex;justify-content:space-between}",""]),n.locals={},t.exports=n},320:function(t,e,o){"use strict";o.r(e);var n={name:"Modal",props:{headerText:{type:String,required:!0},onSubmit:{type:Function,required:!0},onClose:{type:Function,required:!1}},data:function(){return{isVisible:!0}},methods:{closeModal:function(){this.isVisible=!1,this.onClose()}}},l=(o(314),o(34)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",style:"display: ".concat(t.isVisible?"flex":"none"),attrs:{role:"dialog"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"font-[600] underline underline-offset-2"},[t._v(t._s(t.headerText))]),t._v(" "),null!=t.onClose?e("button",{staticClass:"close-button",attrs:{"aria-label":"Close modal dialog"},on:{click:t.closeModal}},[t._v("X")]):t._e()]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._t("formBody"),t._v(" "),e("div",{staticClass:"form-actions"},[t._t("formActions")],2)],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);