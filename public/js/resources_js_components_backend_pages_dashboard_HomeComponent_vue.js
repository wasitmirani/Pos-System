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


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-4\"><div class=\"card\"><div class=\"card-body\"><div class=\"row\"><div class=\"col align-self-center\"><div class=\"media\"><img src=\"assets/images/logos/money-beg.png\" alt=\"\" class=\"align-self-center\" height=\"40\"><div class=\"media-body align-self-center ms-3\"><h6 class=\"m-0 font-24 fw-bold\">$1850.00</h6><p class=\"text-muted mb-0\">Total Revenue</p></div><!--end media body--></div><!--end media--></div><!--end col--><div class=\"col-auto align-self-center\"><div class=\"\"><div id=\"Revenu_Status_bar\" class=\"apex-charts mb-n4\"></div></div></div><!--end col--></div><!--end row--></div><!--end card-body--></div><!--end card--><div class=\"row\"><div class=\"col-12 col-lg-6\"><div class=\"card\"><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col text-center\"><span class=\"h5 fw-bold\">$24,500</span><h6 class=\"text-uppercase text-muted mt-2 m-0 font-11\">Today&#39;s Revenue</h6></div><!--end col--></div><!-- end row --></div><!--end card-body--></div><!--end card-body--></div><!--end col--><div class=\"col-12 col-lg-6\"><div class=\"card\"><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col text-center\"><span class=\"h5 fw-bold\">520</span><h6 class=\"text-uppercase text-muted mt-2 m-0 font-11\">Today&#39;s New Order</h6></div><!--end col--></div><!-- end row --></div><!--end card-body--></div><!--end card-body--></div><!--end col--><div class=\"col-12 col-lg-6\"><div class=\"card\"><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col text-center\"><span class=\"h5 fw-bold\">82.8%</span><h6 class=\"text-uppercase text-muted mt-2 m-0 font-11\">Conversion Rate</h6></div><!--end col--></div><!-- end row --></div><!--end card-body--></div><!--end card-body--></div><!--end col--><div class=\"col-12 col-lg-6\"><div class=\"card\"><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col text-center\"><span class=\"h5 fw-bold\">$80.5</span><h6 class=\"text-uppercase text-muted mt-2 m-0 font-11\">Avg. Value</h6></div><!--end col--></div><!-- end row --></div><!--end card-body--></div><!--end card--></div><!--end col--></div><!--end row--><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">View Invoices</h4></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col-auto\"><i class=\"las la-file-invoice-dollar font-36 text-muted\"></i></div><!--end col--><div class=\"col\"><div class=\"input-group\"><select class=\"form-select\"><option selected>--- Select ---</option><option value=\"Jan 2021\">Jan 2021</option><option value=\"Feb 2021\">Feb 2021</option><option value=\"Mar 2021\">Mar 2021</option><option value=\"Apr 2021\">Apr 2021</option></select><button class=\"btn btn-soft-primary btn-sm\" type=\"button\"><i class=\"las la-search\"></i></button></div></div><!--end col--></div><!--end row--></div><!--end card-body--></div><!--end card--></div><!-- end col--><div class=\"col-lg-8\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Revenu Status</h4></div><!--end col--><div class=\"col-auto\"><div class=\"dropdown\"><a href=\"#\" class=\"btn btn-sm btn-outline-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> This Month<i class=\"las la-angle-down ms-1\"></i></a><div class=\"dropdown-menu dropdown-menu-end\"><a class=\"dropdown-item\" href=\"#\">Today</a><a class=\"dropdown-item\" href=\"#\">Last Week</a><a class=\"dropdown-item\" href=\"#\">Last Month</a><a class=\"dropdown-item\" href=\"#\">This Year</a></div></div></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"\"><div id=\"Revenu_Status\" class=\"apex-charts\"></div></div></div><!--end card-body--></div><!--end card--></div><!-- end col--></div>", 1);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-2 col-md-4\"><div class=\"card\"><div class=\"card-body\"><img src=\"assets/images/products/04.png\" alt=\"\" class=\"img-fluid px-2 px-lg-5\"><hr class=\"hr-dashed\"><div class=\"d-flex justify-content-between\"><div><a href=\"#\" class=\"font-15 fw-bold text-primary\">N95 Mask</a><p class=\"text-muted mb-0 fw-semibold font-13\">Covid Safety</p></div><div class=\"align-self-center\"><h6 class=\"fw-bold font-22 m-0\">$10</h6></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-2 col-md-4\"><div class=\"card\"><div class=\"card-body\"><img src=\"assets/images/products/01.png\" alt=\"\" class=\"img-fluid px-2 px-lg-5\"><hr class=\"hr-dashed\"><div class=\"d-flex justify-content-between\"><div><a href=\"#\" class=\"font-15 fw-bold text-primary\">White Table Camera</a><p class=\"text-muted mb-0 fw-semibold font-13\">Security</p></div><div class=\"align-self-center\"><h6 class=\"fw-bold font-22 m-0\">$99</h6></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-2 col-md-4\"><div class=\"card\"><div class=\"card-body\"><img src=\"assets/images/products/02.png\" alt=\"\" class=\"img-fluid px-2 px-lg-5\"><hr class=\"hr-dashed\"><div class=\"d-flex justify-content-between\"><div><a href=\"#\" class=\"font-15 fw-bold text-primary\">New Colorfull Shoes</a><p class=\"text-muted mb-0 fw-semibold font-13\">Fashion &amp; Life Style</p></div><div class=\"align-self-center\"><h6 class=\"fw-bold font-22 m-0\">$89</h6></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-2 col-md-4\"><div class=\"card\"><div class=\"card-body\"><img src=\"assets/images/products/03.png\" alt=\"\" class=\"img-fluid px-2 px-lg-5\"><hr class=\"hr-dashed\"><div class=\"d-flex justify-content-between\"><div><a href=\"#\" class=\"font-15 fw-bold text-primary\">Imported VR Box</a><p class=\"text-muted mb-0 fw-semibold font-13\">Entertainment</p></div><div class=\"align-self-center\"><h6 class=\"fw-bold font-22 m-0\">$49</h6></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-2 col-md-4\"><div class=\"card\"><div class=\"card-body\"><img src=\"assets/images/products/05.png\" alt=\"\" class=\"img-fluid px-2 px-lg-5\"><hr class=\"hr-dashed\"><div class=\"d-flex justify-content-between\"><div><a href=\"#\" class=\"font-15 fw-bold text-primary\">Fever Gun</a><p class=\"text-muted mb-0 fw-semibold font-13\">Electric</p></div><div class=\"align-self-center\"><h6 class=\"fw-bold font-22 m-0\">$29</h6></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-2 col-md-4\"><div class=\"card\"><div class=\"card-body\"><img src=\"assets/images/products/06.png\" alt=\"\" class=\"img-fluid px-2 px-lg-5\"><hr class=\"hr-dashed\"><div class=\"d-flex justify-content-between\"><div><a href=\"#\" class=\"font-15 fw-bold text-primary\">Hand Bag</a><p class=\"text-muted mb-0 fw-semibold font-13\">Fashion &amp; Life Style</p></div><div class=\"align-self-center\"><h6 class=\"fw-bold font-22 m-0\">$69</h6></div></div></div><!--end card-body--></div><!--end card--></div><!--end col--></div>", 1);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-6\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Earnings Reports</h4></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table mb-0\"><thead class=\"thead-light\"><tr><th class=\"border-top-0\">Date</th><th class=\"border-top-0\">Item Count</th><th class=\"border-top-0\">Text</th><th class=\"border-top-0\">Earnings</th></tr><!--end tr--></thead><tbody><tr><td>01 January</td><td>50</td><td class=\"text-danger\">-$70</td><td>$15,000</td></tr><!--end tr--><tr><td>02 January</td><td>25</td><td>-</td><td>$9,500</td></tr><!--end tr--><tr><td>03 January</td><td>65</td><td class=\"text-danger\">-$115</td><td>$35,000</td></tr><!--end tr--><tr><td>04 January</td><td>20</td><td>-</td><td>$8,500</td></tr><!--end tr--><tr><td>05 January</td><td>40</td><td class=\"text-danger\">-$60</td><td>$12,000</td></tr><!--end tr--><tr><td>06 January</td><td>45</td><td class=\"text-danger\">-$65</td><td>$13,500</td></tr><!--end tr--><tr><td>07 January</td><td>30</td><td>-</td><td>$15,500</td></tr><!--end tr--></tbody></table><!--end table--></div><!--end /div--></div><!--end card-body--></div><!--end card--></div><!--end col--><div class=\"col-lg-6\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Most Populer Products</h4></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table mb-0\"><thead class=\"thead-light\"><tr><th class=\"border-top-0\">Product</th><th class=\"border-top-0\">Price</th><th class=\"border-top-0\">Sell</th><th class=\"border-top-0\">Status</th><th class=\"border-top-0\">Action</th></tr><!--end tr--></thead><tbody><tr><td><div class=\"media\"><img src=\"assets/images/products/01.png\" height=\"30\" class=\"me-3 align-self-center rounded\" alt=\"...\"><div class=\"media-body align-self-center\"><h6 class=\"m-0\">Unikit Camera EDM 5D(White)</h6><a href=\"#\" class=\"font-12 text-primary\">ID: A3652</a></div><!--end media body--></div></td><td>$50 <del class=\"text-muted font-10\">$70</del></td><td>450 <small class=\"text-muted\">(550)</small></td><td><span class=\"badge badge-soft-warning px-2\">Stock</span></td><td><a href=\"#\"><i class=\"las la-pen text-secondary font-18\"></i></a><a href=\"#\"><i class=\"las la-trash-alt text-secondary font-18\"></i></a></td></tr><!--end tr--><tr><td><div class=\"media\"><img src=\"assets/images/products/02.png\" height=\"30\" class=\"me-3 align-self-center rounded\" alt=\"...\"><div class=\"media-body align-self-center\"><h6 class=\"m-0\">Unikit Shoes Max-Zon</h6><a href=\"#\" class=\"font-12 text-primary\">ID: A5002</a></div><!--end media body--></div></td><td>$99 <del class=\"text-muted font-10\">$150</del></td><td>750 <small class=\"text-muted\">(00)</small></td><td><span class=\"badge badge-soft-primary px-2\">Out of Stock</span></td><td><a href=\"#\"><i class=\"las la-pen text-secondary font-18\"></i></a><a href=\"#\"><i class=\"las la-trash-alt text-secondary font-18\"></i></a></td></tr><!--end tr--><tr><td><div class=\"media\"><img src=\"assets/images/products/04.png\" height=\"30\" class=\"me-3 align-self-center rounded\" alt=\"...\"><div class=\"media-body align-self-center\"><h6 class=\"m-0\">Unikit Mask N99 [ISI]</h6><a href=\"#\" class=\"font-12 text-primary\">ID: A6598</a></div><!--end media body--></div></td><td>$199 <del class=\"text-muted font-10\">$250</del></td><td>280 <small class=\"text-muted\">(220)</small></td><td><span class=\"badge badge-soft-warning px-2\">Stock</span></td><td><a href=\"#\"><i class=\"las la-pen text-secondary font-18\"></i></a><a href=\"#\"><i class=\"las la-trash-alt text-secondary font-18\"></i></a></td></tr><!--end tr--><tr><td><div class=\"media\"><img src=\"assets/images/products/07.png\" height=\"30\" class=\"me-3 align-self-center rounded\" alt=\"...\"><div class=\"media-body align-self-center\"><h6 class=\"m-0\">Unikit Bag (Blue)</h6><a href=\"#\" class=\"font-12 text-primary\">ID: A9547</a></div><!--end media body--></div></td><td>$40 <del class=\"text-muted font-10\">$49</del></td><td>500 <small class=\"text-muted\">(1000)</small></td><td><span class=\"badge badge-soft-primary px-2\">Out of Stock</span></td><td><a href=\"#\"><i class=\"las la-pen text-secondary font-18\"></i></a><a href=\"#\"><i class=\"las la-trash-alt text-secondary font-18\"></i></a></td></tr><!--end tr--><tr><td><div class=\"media\"><img src=\"assets/images/products/05.png\" height=\"30\" class=\"me-3 align-self-center rounded\" alt=\"...\"><div class=\"media-body align-self-center\"><h6 class=\"m-0\">Unikit Fever Gun</h6><a href=\"#\" class=\"font-12 text-primary\">ID: A2047</a></div><!--end media body--></div></td><td>$80 <del class=\"text-muted font-10\">$59</del></td><td>800 <small class=\"text-muted\">(2000)</small></td><td><span class=\"badge badge-soft-primary px-2\">Out of Stock</span></td><td><a href=\"#\"><i class=\"las la-pen text-secondary font-18\"></i></a><a href=\"#\"><i class=\"las la-trash-alt text-secondary font-18\"></i></a></td></tr><!--end tr--></tbody></table><!--end table--></div><!--end /div--></div><!--end card-body--></div><!--end card--></div><!--end col--></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page-Title "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: "Dashboard"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end page title end breadcrumb "), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row")]);
}

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