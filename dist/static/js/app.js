webpackJsonp([6],{

/***/ "1GW8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "B/GT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var filters_namespaceObject = {};
__webpack_require__.d(filters_namespaceObject, "uppercase", function() { return uppercase; });
__webpack_require__.d(filters_namespaceObject, "format", function() { return format; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/headerBar/index.vue
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


/* harmony default export */ var headerBar = ({
    name: 'headerBar',
    data: function data() {
        return {
            data: ''
        };
    },

    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        showMenuFn: function showMenuFn() {
            this.$emit('onClick', true);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0f2c7826","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/headerBar/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header flex flex-align-center text-center"},[_c('router-link',{staticClass:"header_back",attrs:{"to":{name:'layout'}}}),_vm._v(" "),_c('div',{staticClass:"header_title flex-bd text-md"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('aside',{staticClass:"header_menu",on:{"click":_vm.showMenuFn}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_headerBar = (esExports);
// CONCATENATED MODULE: ./src/components/headerBar/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("1GW8")
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
  headerBar,
  components_headerBar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_headerBar = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/sideMenu/index.vue
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

/* harmony default export */ var sideMenu = ({
    name: 'vue',
    data: function data() {
        return {
            data: ''
        };
    },

    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideMenuFn: function hideMenuFn() {
            this.$emit('onClick', false);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d7a7ddb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/sideMenu/index.vue
var sideMenu_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{attrs:{"id":"menu"}},[_c('transition',{attrs:{"name":"fade"}},[_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"cover",on:{"click":_vm.hideMenuFn}})]),_vm._v(" "),_c('transition',{attrs:{"name":"slide-left"}},[_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"menu_body"},_vm._l((_vm.$router.options.routes),function(route){return (!route.meta.hidden)?_c('div',{key:route.id,staticClass:"menu-list"},[_c('div',{staticClass:"item_hd"},[_vm._v(_vm._s(route.name))]),_vm._v(" "),_c('div',{staticClass:"item_bd"},_vm._l((route.children),function(item){return _c('router-link',{key:item.id,staticClass:"item",class:{'current':_vm.$route.name == item.name},attrs:{"to":{name:item.name}}},[_vm._v(_vm._s(item.name)+" "+_vm._s(item.meta.title))])}))]):_vm._e()}))])],1)}
var sideMenu_staticRenderFns = []
var sideMenu_esExports = { render: sideMenu_render, staticRenderFns: sideMenu_staticRenderFns }
/* harmony default export */ var components_sideMenu = (sideMenu_esExports);
// CONCATENATED MODULE: ./src/components/sideMenu/index.vue
function sideMenu_injectStyle (ssrContext) {
  __webpack_require__("jp3E")
}
var sideMenu_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var sideMenu___vue_template_functional__ = false
/* styles */
var sideMenu___vue_styles__ = sideMenu_injectStyle
/* scopeId */
var sideMenu___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var sideMenu___vue_module_identifier__ = null
var sideMenu_Component = sideMenu_normalizeComponent(
  sideMenu,
  components_sideMenu,
  sideMenu___vue_template_functional__,
  sideMenu___vue_styles__,
  sideMenu___vue_scopeId__,
  sideMenu___vue_module_identifier__
)

/* harmony default export */ var src_components_sideMenu = (sideMenu_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//




/* harmony default export */ var App = ({
    name: 'app',
    components: {
        headerBar: src_components_headerBar,
        sideMenu: src_components_sideMenu
    },
    data: function data() {
        return {
            title: '',
            showMenu: false
        };
    },

    watch: {
        '$route': function $route() {
            this.title = this.$route.meta.title;
            this.showMenu = false;
        }
    },
    created: function created() {
        var _this = this;

        this.title = this.$route.meta.title;
        this.set();
        window.onresize = function () {
            _this.set();
        };
    },

    methods: {
        set: function set() {
            var width = document.documentElement.clientWidth;
            var discount = 750 / 100;
            var fontSize = width / discount;
            document.documentElement.style.fontSize = fontSize + 'px';
        },
        showMenuFn: function showMenuFn(val) {
            this.showMenu = val;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-443db265","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header-bar',{attrs:{"title":_vm.title},on:{"onClick":_vm.showMenuFn}}),_vm._v(" "),_c('side-menu',{attrs:{"isShow":_vm.showMenu},on:{"onClick":_vm.showMenuFn}}),_vm._v(" "),_c('router-view')],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("B/GT")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./src/router/routes.js
var route = [{
    path: '/',
    redirect: '/index',
    meta: {
        title: 'hyui',
        hidden: true
    }
}, {
    path: '/index',
    name: 'index',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8hXn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
        title: '首页',
        hidden: true
    }
}, {
    path: '/basic',
    name: 'basic',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8hXn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
        title: 'basic'
    },
    children: [{
        path: '/basic/layout',
        name: 'layout',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("itYq")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '布局'
        }
    }, {
        path: '/basic/container',
        name: 'container',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("GRmY")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '布局容器'
        }
    }, {
        path: '/basic/color',
        name: 'color',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("EWD8")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '色彩'
        }
    }, {
        path: '/basic/button',
        name: 'button',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '按钮'
        }
    }]
}, {
    path: '/form',
    name: 'form',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8hXn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
        title: 'form'
    },
    children: [{
        path: '/form/radio',
        name: 'radio',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '单选框'
        }
    }, {
        path: '/form/checkbox',
        name: 'checkbox',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '复选框'
        }
    }, {
        path: '/form/input',
        name: 'input',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '输入框'
        }
    }, {
        path: '/form/select',
        name: 'select',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '选择器'
        }
    }, {
        path: '/form/switch',
        name: 'switch',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '开关'
        }
    }, {
        path: '/form/slider',
        name: 'slider',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '滑块'
        }
    }]
}, {
    path: '/data',
    name: 'data',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8hXn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
        title: 'data'
    },
    children: [{
        path: '/data/table',
        name: 'table',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '表格'
        }
    }, {
        path: '/data/tag',
        name: 'tag',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '标签'
        }
    }, {
        path: '/data/progress',
        name: 'progress',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '进度条'
        }
    }, {
        path: '/data/pagination',
        name: 'pagination',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '分页'
        }
    }, {
        path: '/data/badge',
        name: 'badge',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '标记'
        }
    }, {
        path: '/data/tree',
        name: 'tree',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '树形控件'
        }
    }]
}, {
    path: '/notice',
    name: 'notice',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8hXn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
        title: 'notice'
    },
    children: [{
        path: '/notice/alert',
        name: 'alert',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '警告'
        }
    }, {
        path: '/notice/loading',
        name: 'loading',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '加载'
        }
    }, {
        path: '/notice/message',
        name: 'message',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '消息提示'
        }
    }, {
        path: '/notice/messageBox',
        name: 'messageBox',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '弹框'
        }
    }, {
        path: '/notice/notification',
        name: 'notification',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '通知'
        }
    }]
}, {
    path: '/other',
    name: 'other',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("8hXn")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    meta: {
        title: 'other'
    },
    children: [{
        path: '/other/dialog',
        name: 'dialog',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '对话框'
        }
    }, {
        path: '/other/tooltip',
        name: 'tooltip',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '文字提示'
        }
    }, {
        path: '/other/popover',
        name: 'popover',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '弹出框'
        }
    }, {
        path: '/other/card',
        name: 'card',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '卡片'
        }
    }, {
        path: '/other/carousel',
        name: 'carousel',
        component: function component(resolve) {
            return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("efeH")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            title: '走马灯'
        }
    }]
}];
/* harmony default export */ var routes = (route);
// CONCATENATED MODULE: ./src/router/index.js




var router = new vue_router_esm["a" /* default */]({
  routes: routes
});

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  next();
});

/*router.afterEach((route)=>{
  //
});*/

/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/fastclick/lib/fastclick.js
var fastclick = __webpack_require__("v5o6");
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__("cTzj");
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./src/filter/filters.js
/**
 * @author: wenhao.huang
 * @date:   2017/12/23
 */

function uppercase(val) {
    return val.toUpperCase();
}

function format(val) {
    return val;
}
// CONCATENATED MODULE: ./src/filter/index.js
/**
 * @author: wenhao.huang
 * @date:   2017/12/23
 */






var filter = {
    install: function install(Vue) {
        keys_default()(filters_namespaceObject).forEach(function (key) {
            Vue.filter(key, filters_namespaceObject[key]);
        });
    }
};

/* harmony default export */ var src_filter = (filter);
// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__("7QTg");
var vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper);

// CONCATENATED MODULE: ./src/main.js
/**
 * @author: wenhao.huang
 * @date:   2017/12/23
 */











fastclick_default.a.attach(document.body);

vue_esm["a" /* default */].config.productionTip = false;

vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

vue_esm["a" /* default */].use(vue_lazyload_default.a, {
    // loading:require('/static/img/icon/loading.png')
});

vue_esm["a" /* default */].use(src_filter);



vue_esm["a" /* default */].use(vue_awesome_swiper_default.a);

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
    el: '#app',
    router: src_router,
    template: '<App/>',
    components: { App: src_App }
});

/***/ }),

/***/ "jp3E":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);