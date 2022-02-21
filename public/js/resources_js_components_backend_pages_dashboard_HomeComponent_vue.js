"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_dashboard_HomeComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    active_name: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_breadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/breadcrumbComponent.vue */ "./resources/js/components/backend/components/breadcrumbComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    breadcrumb: _components_breadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    return {
      title: 'How To Install Vue 3 in Laravel 8 From Scratch'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-sm-12"
};
var _hoisted_3 = {
  "class": "page-title-box"
};
var _hoisted_4 = {
  "class": "float-end"
};
var _hoisted_5 = {
  "class": "breadcrumb"
};
var _hoisted_6 = {
  "class": "breadcrumb-item"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Dashboard ");

var _hoisted_8 = {
  "class": "breadcrumb-item active"
};
var _hoisted_9 = {
  "class": "page-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "home-item",
    to: "/home/dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end nav-item"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "breadcrumb-item",
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: item.link
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])])), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.items]]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end nav-item"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.active_name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.active_name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end page-title-box")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-md-12 col-lg-3 order-lg-1 order-md-2 order-sm-2\"><div class=\"card overflow-hidden\"><div class=\"card-body\"><div class=\"pt-3\"><h3 class=\"text-dark text-center font-24 fw-bold line-height-lg\">Unikit <br>Multi Application</h3><div class=\"text-center text-muted font-16 fw-bold pt-3 pb-1\">We Design and Develop Clean and High Quality Web Applications</div><div class=\"text-center py-3 mb-3\"><a href=\"#\" class=\"btn btn-primary\">Buy Now</a></div><img src=\"assets/images/small/business-1.png\" alt=\"\" class=\"img-fluid px-3 mb-2\"></div></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-9 order-lg-2 order-md-1 order-sm-1\"><div class=\"row justify-content-center\"><div class=\"col-lg-3 col-md-6\"><div class=\"card overflow-hidden\"><div class=\"card-body\"><div class=\"row d-flex\"><div class=\"col-3\"><i class=\"ti ti-users font-36 align-self-center text-dark\"></i></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><div id=\"dash_spark_1\" class=\"mb-3\"></div></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><h3 class=\"text-dark my-0 font-22 fw-bold\">24000</h3><p class=\"text-muted mb-0 fw-semibold\">Sessions</p></div><!--end col--></div><!--end row--></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-3 col-md-6\"><div class=\"card overflow-hidden\"><div class=\"card-body\"><div class=\"row d-flex\"><div class=\"col-3\"><i class=\"ti ti-clock font-36 align-self-center text-dark\"></i></div><!--end col--><div class=\"col-auto ms-auto align-self-center\"><span class=\"badge badge-soft-success px-2 py-1 font-11\">Active</span></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><div id=\"dash_spark_2\" class=\"mb-3\"></div></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><h3 class=\"text-dark my-0 font-22 fw-bold\">00:18</h3><p class=\"text-muted mb-0 fw-semibold\">Avg.Sessions</p></div><!--end col--></div><!--end row--></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-3 col-md-6\"><div class=\"card overflow-hidden\"><div class=\"card-body\"><div class=\"row d-flex\"><div class=\"col-3\"><i class=\"ti ti-activity font-36 align-self-center text-dark\"></i></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><div id=\"dash_spark_3\" class=\"mb-3\"></div></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><h3 class=\"text-dark my-0 font-22 fw-bold\">$2400</h3><p class=\"text-muted mb-0 fw-semibold\">Bounce Rate</p></div><!--end col--></div><!--end row--></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-3 col-md-6\"><div class=\"card overflow-hidden\"><div class=\"card-body\"><div class=\"row d-flex\"><div class=\"col-3\"><i class=\"ti ti-confetti font-36 align-self-center text-dark\"></i></div><!--end col--><div class=\"col-auto ms-auto align-self-center\"><span class=\"badge badge-soft-danger px-2 py-1 font-11\">-2%</span></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><div id=\"dash_spark_4\" class=\"mb-3\"></div></div><!--end col--><div class=\"col-12 ms-auto align-self-center\"><h3 class=\"text-dark my-0 font-22 fw-bold\">85000</h3><p class=\"text-muted mb-0 fw-semibold\">Goal Completions</p></div><!--end col--></div><!--end row--></div><!--end card-body--></div><!--end card--></div><!--end col--></div><!--end row--><div class=\"row\"><div class=\"col-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Audience Overview</h4></div><!--end col--><div class=\"col-auto\"><div class=\"dropdown\"><a href=\"#\" class=\"btn btn-sm btn-outline-light dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> This Year<i class=\"las la-angle-down ms-1\"></i></a><div class=\"dropdown-menu dropdown-menu-end\"><a class=\"dropdown-item\" href=\"#\">Today</a><a class=\"dropdown-item\" href=\"#\">Last Week</a><a class=\"dropdown-item\" href=\"#\">Last Month</a><a class=\"dropdown-item\" href=\"#\">This Year</a></div></div></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"\"><div id=\"ana_dash_1\" class=\"apex-charts\"></div></div></div><!--end card-body--></div><!--end card--></div></div></div><!--end col--></div>", 1);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-8\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Browser Used &amp; Traffic Reports</h4></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"table-responsive browser_users\"><table class=\"table table-hover mb-0\"><thead class=\"thead-light\"><tr><th class=\"border-top-0\">Browser</th><th class=\"border-top-0\">Sessions</th><th class=\"border-top-0\">Bounce Rate</th><th class=\"border-top-0\">Transactions</th></tr><!--end tr--></thead><tbody><tr><td><img src=\"assets/images/logos/chrome-1.png\" alt=\"\" height=\"20\" class=\"me-2\">Chrome</td><td>10853<small class=\"text-muted\">(52%)</small></td><td> 52.80%</td><td>566<small class=\"text-muted\">(92%)</small></td></tr><!--end tr--><tr><td><img src=\"assets/images/logos/micro-edge-1.png\" alt=\"\" height=\"20\" class=\"me-2\">Microsoft Edge</td><td>2545<small class=\"text-muted\">(47%)</small></td><td> 47.54%</td><td>498<small class=\"text-muted\">(81%)</small></td></tr><!--end tr--><tr><td><img src=\"assets/images/logos/in-explorer-1.png\" alt=\"\" height=\"20\" class=\"me-2\">Internet-Explorer</td><td>1836<small class=\"text-muted\">(38%)</small></td><td> 41.12%</td><td>455<small class=\"text-muted\">(74%)</small></td></tr><!--end tr--><tr><td><img src=\"assets/images/logos/opera-1.png\" alt=\"\" height=\"20\" class=\"me-2\">Opera</td><td>1958<small class=\"text-muted\">(31%)</small></td><td> 36.82%</td><td>361<small class=\"text-muted\">(61%)</small></td></tr><!--end tr--><tr><td><img src=\"assets/images/logos/chrome-1.png\" alt=\"\" height=\"20\" class=\"me-2\">Chrome</td><td>10853<small class=\"text-muted\">(52%)</small></td><td> 52.80%</td><td>566<small class=\"text-muted\">(92%)</small></td></tr><!--end tr--></tbody></table><!--end table--></div><!--end /div--></div><!--end card-body--></div><!--end card--><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Browser Used &amp; Traffic Reports</h4></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"table-responsive browser_users\"><table class=\"table mb-0\"><thead class=\"thead-light\"><tr><th class=\"border-top-0\">Channel</th><th class=\"border-top-0\">Sessions</th><th class=\"border-top-0\">Prev.Period</th><th class=\"border-top-0\">% Change</th></tr><!--end tr--></thead><tbody><tr><td><a href=\"\" class=\"text-primary\">Organic search</a></td><td>10853<small class=\"text-muted\">(52%)</small></td><td>566<small class=\"text-muted\">(92%)</small></td><td> 52.80% <i class=\"fas fa-caret-up text-success font-16\"></i></td></tr><!--end tr--><tr><td><a href=\"\" class=\"text-primary\">Direct</a></td><td>2545<small class=\"text-muted\">(47%)</small></td><td>498<small class=\"text-muted\">(81%)</small></td><td> -17.20% <i class=\"fas fa-caret-down text-danger font-16\"></i></td></tr><!--end tr--><tr><td><a href=\"\" class=\"text-primary\">Referal</a></td><td>1836<small class=\"text-muted\">(38%)</small></td><td>455<small class=\"text-muted\">(74%)</small></td><td> 41.12% <i class=\"fas fa-caret-up text-success font-16\"></i></td></tr><!--end tr--><tr><td><a href=\"\" class=\"text-primary\">Email</a></td><td>1958<small class=\"text-muted\">(31%)</small></td><td>361<small class=\"text-muted\">(61%)</small></td><td> -8.24% <i class=\"fas fa-caret-down text-danger font-16\"></i></td></tr><!--end tr--><tr><td><a href=\"\" class=\"text-primary\">Social</a></td><td>1566<small class=\"text-muted\">(26%)</small></td><td>299<small class=\"text-muted\">(49%)</small></td><td> 29.33% <i class=\"fas fa-caret-up text-success\"></i></td></tr><!--end tr--></tbody></table><!--end table--></div><!--end /div--></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-4\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Sessions Device</h4></div><!--end col--><div class=\"col-auto\"><div class=\"dropdown\"><a href=\"#\" class=\"btn btn-sm btn-outline-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> All<i class=\"las la-angle-down ms-1\"></i></a><div class=\"dropdown-menu dropdown-menu-end\"><a class=\"dropdown-item\" href=\"#\">Purchases</a><a class=\"dropdown-item\" href=\"#\">Emails</a></div></div></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"text-center\"><div id=\"ana_device\" class=\"apex-charts\"></div><h6 class=\"bg-light-alt py-3 px-2 mb-0\"><i data-feather=\"calendar\" class=\"align-self-center icon-xs me-1\"></i> 01 January 2020 to 31 December 2020 </h6></div><div class=\"table-responsive mt-2\"><table class=\"table border-dashed mb-0\"><thead><tr><th>Device</th><th class=\"text-end\">Sassions</th><th class=\"text-end\">Day</th><th class=\"text-end\">Week</th></tr></thead><tbody><tr><td>Dasktops</td><td class=\"text-end\">1843</td><td class=\"text-end\">-3</td><td class=\"text-end\">-12</td></tr><tr><td>Tablets</td><td class=\"text-end\">2543</td><td class=\"text-end\">-5</td><td class=\"text-end\">-2</td></tr><tr><td>Mobiles</td><td class=\"text-end\">3654</td><td class=\"text-end\">-5</td><td class=\"text-end\">-6</td></tr></tbody></table><!--end /table--></div><!--end /div--></div><!--end card-body--></div><!--end card--><div class=\"card\"><div class=\"card-body\"><div class=\"d-flex\"><h3 class=\"m-0 align-self-center fw-bold font-22\">80</h3><div class=\"d-block ms-3 align-self-center\"><span class=\"badge bg-soft-primary px-2 py-1 font-11\">Right now</span><h5 class=\"my-2\">Traffic Sources</h5><p class=\"mb-2 text-muted\">It is a long established fact that a reader will be of a page when looking at its layout. </p><a href=\"\" class=\"btn btn-primary\">Read More <i class=\"las la-arrow-right\"></i></a></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page-Title "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: "Dashboard"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end page title end breadcrumb "), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row")]);
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/backend/components/breadcrumbComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/backend/components/breadcrumbComponent.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _breadcrumbComponent_vue_vue_type_template_id_1c485aa7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbComponent.vue?vue&type=template&id=1c485aa7 */ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7");
/* harmony import */ var _breadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbComponent.vue?vue&type=script&lang=js */ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_possys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_possys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_breadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_breadcrumbComponent_vue_vue_type_template_id_1c485aa7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/backend/components/breadcrumbComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_1fd4e942__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=1fd4e942 */ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js */ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_possys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_possys_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HomeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomeComponent_vue_vue_type_template_id_1fd4e942__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/backend/pages/dashboard/HomeComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_breadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_breadcrumbComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./breadcrumbComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_breadcrumbComponent_vue_vue_type_template_id_1c485aa7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_breadcrumbComponent_vue_vue_type_template_id_1c485aa7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./breadcrumbComponent.vue?vue&type=template&id=1c485aa7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/components/breadcrumbComponent.vue?vue&type=template&id=1c485aa7");


/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeComponent_vue_vue_type_template_id_1fd4e942__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeComponent_vue_vue_type_template_id_1fd4e942__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeComponent.vue?vue&type=template&id=1fd4e942 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942");


/***/ })

}]);