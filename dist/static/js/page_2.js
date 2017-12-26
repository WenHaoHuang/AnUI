webpackJsonp([2],{

/***/ "hrZb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "itYq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/flexItem/index.vue
//
//
//
//
//
//

/* harmony default export */ var flexItem = ({
    name: "flexItem",
    data: function data() {
        return {
            classDirection: this.direction ? 'flex-' + this.direction : '',
            classJustify: this.justify ? 'flex-justify-' + this.justify : '',
            classAlign: this.align ? 'flex-align-' + this.align : ''
        };
    },

    props: {
        direction: {
            type: String,
            default: ''
        },
        justify: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            default: ''
        }
    }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-690f715d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/flexItem/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex",class:[_vm.classDirection,_vm.classJustify,_vm.classAlign]},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_flexItem = (esExports);
// CONCATENATED MODULE: ./src/components/flexItem/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("hrZb")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  flexItem,
  components_flexItem,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_flexItem = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/basic/layout.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var layout = ({
    name: 'layout',
    components: {
        flexItem: src_components_flexItem
    },
    data: function data() {
        return {
            data: ''
        };
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0897b67a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/basic/layout.vue
var layout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"page page-article page-wrap"},[_c('h2',[_vm._v("Layout 布局")]),_vm._v(" "),_c('div',{staticClass:"section-content"},[_vm._v("全站采用flex布局，使用前确认目标浏览器是否兼容。")]),_vm._v(" "),_c('h3',[_vm._v("flexItem")]),_vm._v(" "),_c('div',{staticClass:"section-content"},[_c('p',[_vm._v("默认")]),_vm._v(" "),_c('flex-item',[_c('div',{staticClass:"flex-hd"},[_vm._v("flex-hd")]),_vm._v(" "),_c('div',{staticClass:"flex-bd"},[_vm._v("flex-bd")]),_vm._v(" "),_c('div',{staticClass:"flex-ft"},[_vm._v("flex-ft")])]),_vm._v(" "),_c('p',[_vm._v("direction:默认row,可选row,column")]),_vm._v(" "),_c('flex-item',{attrs:{"direction":"column"}},[_c('div',{staticClass:"flex-hd"},[_vm._v("flex-hd")]),_vm._v(" "),_c('div',{staticClass:"flex-bd"},[_vm._v("flex-bd")]),_vm._v(" "),_c('div',{staticClass:"flex-ft"},[_vm._v("flex-ft")])]),_vm._v(" "),_c('p',[_vm._v("justify:默认start,可选start,end,center,between,around")]),_vm._v(" "),_c('flex-item',{attrs:{"justify":"around"}},[_c('div',{staticClass:"flex-hd"},[_vm._v("flex-hd")]),_vm._v(" "),_c('div',{staticClass:"flex-ft"},[_vm._v("flex-ft")]),_vm._v(" "),_c('div',{staticClass:"flex-hd"},[_vm._v("flex-hd")])]),_vm._v(" "),_c('p',[_vm._v("align:默认start,可选start,end,center")]),_vm._v(" "),_c('flex-item',{attrs:{"align":"center"}},[_c('div',{staticClass:"flex-hd"},[_vm._v("flex-hd")]),_vm._v(" "),_c('div',{staticClass:"flex-bd"},[_vm._v("flex-bd")]),_vm._v(" "),_c('div',{staticClass:"flex-ft"},[_vm._v("flex-ft")])])],1),_vm._v(" "),_c('h3',[_vm._v("margin 外留白")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',[_vm._v("padding 内留白")]),_vm._v(" "),_vm._m(1)])}
var layout_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-content"},[_c('p',[_vm._v("四个方向，分别为mt,mr,mb,ml.默认为0，10个档位，基础单位0.01rem。例如：mt20")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-content"},[_c('p',[_vm._v("四个方向，分别为pt,pr,pb,pl.默认为0，10个档位，基础单位0.01rem。例如：pt20")])])}]
var layout_esExports = { render: layout_render, staticRenderFns: layout_staticRenderFns }
/* harmony default export */ var basic_layout = (layout_esExports);
// CONCATENATED MODULE: ./src/views/basic/layout.vue
function layout_injectStyle (ssrContext) {
  __webpack_require__("r2ur")
}
var layout_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var layout___vue_template_functional__ = false
/* styles */
var layout___vue_styles__ = layout_injectStyle
/* scopeId */
var layout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var layout___vue_module_identifier__ = null
var layout_Component = layout_normalizeComponent(
  layout,
  basic_layout,
  layout___vue_template_functional__,
  layout___vue_styles__,
  layout___vue_scopeId__,
  layout___vue_module_identifier__
)

/* harmony default export */ var views_basic_layout = __webpack_exports__["default"] = (layout_Component.exports);


/***/ }),

/***/ "r2ur":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});