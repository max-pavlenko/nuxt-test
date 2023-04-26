exports.ids = [6,1];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("fffbc2dc", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DateDescription.vue?vue&type=template&id=0cd9d031&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._ssrNode("<div class=\"capitalize mr-auto\" data-v-0cd9d031>" + _vm._ssrEscape(_vm._s(_vm.data.description)) + "</div> <time class=\"font-bold\" data-v-0cd9d031>" + _vm._ssrEscape(_vm._s(_vm.data.time)) + "</time>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DateDescription.vue?vue&type=template&id=0cd9d031&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DateDescription.vue?vue&type=script&lang=js&
/* harmony default export */ var DateDescriptionvue_type_script_lang_js_ = ({
  name: "DateDescription",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/DateDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DateDescriptionvue_type_script_lang_js_ = (DateDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DateDescription.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DateDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cd9d031",
  "4e25131f"
  
)

/* harmony default export */ var DateDescription = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateDescription_vue_vue_type_style_index_0_id_0cd9d031_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateDescription_vue_vue_type_style_index_0_id_0cd9d031_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateDescription_vue_vue_type_style_index_0_id_0cd9d031_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateDescription_vue_vue_type_style_index_0_id_0cd9d031_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateDescription_vue_vue_type_style_index_0_id_0cd9d031_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-0cd9d031]{display:flex;gap:15px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0f03793c", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCard_vue_vue_type_style_index_0_id_e29370ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCard_vue_vue_type_style_index_0_id_e29370ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCard_vue_vue_type_style_index_0_id_e29370ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCard_vue_vue_type_style_index_0_id_e29370ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectCard_vue_vue_type_style_index_0_id_e29370ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-e29370ea]{background-color:#fff;border-radius:5px;display:flex;justify-content:space-between;padding:15px;width:100%}.project-photo[data-v-e29370ea]{align-self:stretch;aspect-ratio:16/9;width:120px}.project-title[data-v-e29370ea]{font-size:17px;font-weight:700}.project-status[data-v-e29370ea]{align-self:center;font-size:22px}.project-info[data-v-e29370ea]{align-items:center;display:flex;flex-basis:30%;gap:25px}.active[data-v-e29370ea]{color:#228b22}.disabled[data-v-e29370ea]{color:coral}.dates[data-v-e29370ea]{display:flex;flex-direction:column;gap:13px}.btn-wrapper[data-v-e29370ea]{width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCard.vue?vue&type=template&id=e29370ea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "btn-wrapper",
    on: {
      "click": function ($event) {
        return _vm.onClick(_vm.project, $event);
      }
    }
  }, [_vm._ssrNode("<figure class=\"card\" data-v-e29370ea>", "</figure>", [_vm._ssrNode("<figcaption class=\"project-info\" data-v-e29370ea><img" + _vm._ssrAttr("src", _vm.project.logo_url) + " alt=\"Project logo\" class=\"project-photo\" data-v-e29370ea> <h3 class=\"project-title truncate\" data-v-e29370ea>" + _vm._ssrEscape(_vm._s(_vm.project.name)) + "</h3></figcaption> <strong" + _vm._ssrClass(null, `${_vm.projectStatusClass} project-status`) + " data-v-e29370ea>" + _vm._ssrEscape(_vm._s(_vm.projectStatusText)) + "</strong> "), _vm._ssrNode("<div class=\"dates\" data-v-e29370ea>", "</div>", [_c('DateDescription', {
    attrs: {
      "data": _vm.timeThisWeek
    }
  }), _vm._ssrNode(" "), _c('DateDescription', {
    attrs: {
      "data": _vm.thisMonth
    }
  }), _vm._ssrNode(" "), _c('DateDescription', {
    attrs: {
      "data": _vm.total
    }
  })], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProjectCard.vue?vue&type=template&id=e29370ea&scoped=true&

// EXTERNAL MODULE: ./components/DateDescription.vue + 4 modules
var DateDescription = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectCard.vue?vue&type=script&lang=js&

/* harmony default export */ var ProjectCardvue_type_script_lang_js_ = ({
  components: {
    DateDescription: DateDescription["default"]
  },
  computed: {
    projectStatusClass() {
      return this.project.is_active === 1 ? 'active' : 'disabled';
    },
    projectStatusText() {
      return this.projectStatusClass.toUpperCase();
    },
    timeThisWeek() {
      return {
        description: 'time this week',
        time: '00:00:00'
      };
    },
    thisMonth() {
      return {
        description: 'this month',
        time: '00:00:00'
      };
    },
    total() {
      return {
        description: 'total',
        time: '00:00:00'
      };
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/ProjectCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectCardvue_type_script_lang_js_ = (ProjectCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e29370ea",
  "9db3b70c"
  
)

/* harmony default export */ var ProjectCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DateDescription: __webpack_require__(49).default})


/***/ })

};;
//# sourceMappingURL=project-card.js.map