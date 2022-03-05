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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    breadcrumb: _components_breadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      orders_by_date: [],
      orders_stat: [],
      recent_orders: []
    };
  },
  setup: function setup() {
    return {
      title: 'How To Install Vue 3 in Laravel 8 From Scratch'
    };
  },
  methods: {
    loadDashboardOrderBy: function loadDashboardOrderBy() {
      var options = _defineProperty({
        chart: {
          height: 340,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        colors: ['#2a76f4'],
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%'
          }
        },
        stroke: {
          show: false,
          width: 2
        },
        series: [{
          name: 'Orders',
          data: this.orders_by_date.map(function (item) {
            return item.total;
          })
        }],
        labels: this.orders_by_date.map(function (x) {
          return x.date;
        }),
        yaxis: {
          labels: {
            offsetX: -12,
            offsetY: 0
          }
        },
        grid: {
          borderColor: '#e0e6ed',
          strokeDashArray: 4,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          marker: {
            show: true
          },
          x: {
            show: false
          }
        }
      }, "yaxis", {
        labels: {
          formatter: function formatter(value) {
            return "" + value;
          }
        }
      });

      var chart = new ApexCharts(document.querySelector("#Revenu_Status"), options);
      chart.render();
    },
    getAnalytics: function getAnalytics() {
      var _this = this;

      axios.get('/dashboard/analytics').then(function (res) {
        _this.orders_by_date = res.data.orders_by_date;
        _this.orders_stat = res.data.order_stat;
        _this.recent_orders = res.data.recent_orders;

        _this.loadDashboardOrderBy();
      });
    },
    dateFormat: function dateFormat(date) {
      return moment.utc(date).local().format('MMMM Do YYYY, h:mm:ss a');
    },
    openPrint: function openPrint(item) {
      axios.get('/pos/order/update-status/' + item.id).then(function (res) {
        var url = window.location.origin + "/customer/print/" + res.data.order.id;
        console.log("url", url);
        window.open(url, '_blank').focus();
      });
    },
    deleted: function deleted(item) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.get('/pos/order/delete/' + item.id).then(function (response) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this2.getOrders();
          });
        }
      });
    },
    paymentStatus: function paymentStatus(value) {
      switch (value) {
        case 1:
          return "bg-soft-pink";
          break;

        case 2:
          return "bg-soft-success";
          break;

        default:
          return "bg-soft-pink";
          break;
      }
    },
    orderStatus: function orderStatus(value) {
      switch (value) {
        case 1:
          return "bg-soft-purple";
          break;

        case 2:
          return "bg-soft-success";
          break;

        case 3:
          return "bg-soft-purple";
          break;

        case 4:
          return "bg-soft-success";
          break;

        default:
          return "bg-soft-success";
          break;
      }
    },
    orderType: function orderType(value) {
      switch (value) {
        case 'delivery':
          return "<a role='button' class='badge bg-primary'>delivery</a>";
          break;

        case 'takeaway':
          return "<a role='button' class='badge bg-warning'>takeaway</a>";
          break;

        case 'dining':
          return "<a role='button' class='badge bg-success'>dining</a>";
          break;

        default:
          break;
      }
    }
  },
  mounted: function mounted() {
    this.getAnalytics();
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

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-lg-4"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col align-self-center"
};
var _hoisted_7 = {
  "class": "media"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "assets/images/logos/money-beg.png",
  alt: "",
  "class": "align-self-center",
  height: "40"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "media-body align-self-center ms-3"
};
var _hoisted_10 = {
  "class": "m-0 font-24 fw-bold"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-muted mb-0"
}, "Total Revenue", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-auto align-self-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "Revenu_Status_bar",
  "class": "apex-charts mb-n4"
})])], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-12 col-lg-6"
};
var _hoisted_15 = {
  "class": "card"
};
var _hoisted_16 = {
  "class": "card-body"
};
var _hoisted_17 = {
  "class": "row align-items-center"
};
var _hoisted_18 = {
  "class": "col text-center"
};
var _hoisted_19 = {
  "class": "h5 fw-bold"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-uppercase text-muted mt-2 m-0 font-11"
}, "Today's Revenue", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "col-12 col-lg-6"
};
var _hoisted_22 = {
  "class": "card"
};
var _hoisted_23 = {
  "class": "card-body"
};
var _hoisted_24 = {
  "class": "row align-items-center"
};
var _hoisted_25 = {
  "class": "col text-center"
};
var _hoisted_26 = {
  "class": "h5 fw-bold"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-uppercase text-muted mt-2 m-0 font-11"
}, "Today's New Order", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-12 col-lg-6\"><div class=\"card\"><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col text-center\"><span class=\"h5 fw-bold\">82.8%</span><h6 class=\"text-uppercase text-muted mt-2 m-0 font-11\">All Orders Rate</h6></div><!--end col--></div><!-- end row --></div><!--end card-body--></div><!--end card-body--></div>", 1);

var _hoisted_29 = {
  "class": "col-12 col-lg-6"
};
var _hoisted_30 = {
  "class": "card"
};
var _hoisted_31 = {
  "class": "card-body"
};
var _hoisted_32 = {
  "class": "row align-items-center"
};
var _hoisted_33 = {
  "class": "col text-center"
};
var _hoisted_34 = {
  "class": "h5 fw-bold"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-uppercase text-muted mt-2 m-0 font-11"
}, "All Orders", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">View Orders</h4></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"row align-items-center\"><div class=\"col-auto\"><i class=\"las la-file-invoice-dollar font-36 text-muted\"></i></div><!--end col--><div class=\"col\"><div class=\"input-group\"><select class=\"form-select\"><option selected>--- Select ---</option><option value=\"Jan 2021\">Jan 2022</option><option value=\"Feb 2021\">Feb 2022</option><option value=\"Mar 2021\">Mar 2022</option><!-- &lt;option value=&quot;Apr 2021&quot;&gt;Apr 2021&lt;/option&gt; --></select><button class=\"btn btn-soft-primary btn-sm\" type=\"button\"><i class=\"las la-search\"></i></button></div></div><!--end col--></div><!--end row--></div><!--end card-body--></div>", 1);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-8\"><div class=\"card\"><div class=\"card-header\"><div class=\"row align-items-center\"><div class=\"col\"><h4 class=\"card-title\">Orders By Date</h4></div><!--end col--><div class=\"col-auto\"><div class=\"dropdown\"><!-- &lt;a href=&quot;#&quot; class=&quot;btn btn-sm btn-outline-light dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;\n                                                   This Month&lt;i class=&quot;las la-angle-down ms-1&quot;&gt;&lt;/i&gt;\n                                                &lt;/a&gt; --><!-- &lt;div class=&quot;dropdown-menu dropdown-menu-end&quot;&gt;\n                                                    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Today&lt;/a&gt;\n                                                    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Last Week&lt;/a&gt;\n                                                    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Last Month&lt;/a&gt;\n                                                    &lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;This Year&lt;/a&gt;\n                                                &lt;/div&gt; --></div></div><!--end col--></div><!--end row--></div><!--end card-header--><div class=\"card-body\"><div class=\"\"><div id=\"Revenu_Status\" class=\"apex-charts\"></div></div></div><!--end card-body--></div><!--end card--></div>", 1);

var _hoisted_38 = {
  "class": "row"
};
var _hoisted_39 = {
  "class": "col-lg-12"
};
var _hoisted_40 = {
  "class": "card"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "card-title"
}, "Today All Orders")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row")], -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "card-body"
};
var _hoisted_43 = {
  "class": "table-responsive"
};
var _hoisted_44 = {
  "class": "table mb-0"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "thead-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Order No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Table No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Payment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Total"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Created"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Action")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end tr")], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "media"
};
var _hoisted_47 = {
  "class": "media-body align-self-center"
};
var _hoisted_48 = {
  "class": "m-0"
};
var _hoisted_49 = {
  href: "#",
  "class": "font-12 text-primary"
};
var _hoisted_50 = ["innerHTML"];

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rs. ");

var _hoisted_52 = ["onClick"];

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-print text-secondary font-18"
}, null, -1
/* HOISTED */
);

var _hoisted_54 = [_hoisted_53];
var _hoisted_55 = ["onClick"];

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-trash-alt text-secondary font-18"
}, null, -1
/* HOISTED */
);

var _hoisted_57 = [_hoisted_56];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  var _component_AvatarComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AvatarComponent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page-Title "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    active_name: "Dashboard"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end page title end breadcrumb "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_10, "Rs." + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.orders_stat.total_revenue), 1
  /* TEXT */
  ), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end media body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end media")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col"), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, "Rs." + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.orders_stat.today_revenue), 1
  /* TEXT */
  ), _hoisted_20]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end row ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.recent_orders.total), 1
  /* TEXT */
  ), _hoisted_27]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end row ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col"), _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.orders_stat.total_orders), 1
  /* TEXT */
  ), _hoisted_35]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end row ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row"), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end col"), _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end col")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.recent_orders.data, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AvatarComponent, {
      name: '' + item.id
    }, null, 8
    /* PROPS */
    , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_49, "OrderNo: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.order_no), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end media body")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.table ? item.table.name : "N/A"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('badge rounded-pill ' + $options.orderStatus(item.order_status_id))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.order_status.name), 3
    /* TEXT, CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: _this.orderType(item.order_type)
    }, null, 8
    /* PROPS */
    , _hoisted_50), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <p :inner-html.prop=\"\"></p> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('badge rounded-pill ' + $options.paymentStatus(item.payment_status_id))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.payment_status.name), 3
    /* TEXT, CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.total), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.dateFormat(item.created_at)), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      role: "button",
      onClick: function onClick($event) {
        return $options.openPrint(item);
      }
    }, _hoisted_54, 8
    /* PROPS */
    , _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      role: "button",
      onClick: function onClick($event) {
        return $options.deleted(item);
      }
    }, _hoisted_57, 8
    /* PROPS */
    , _hoisted_55)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end tr")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end table")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end /div")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card-body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end card")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end col")])]);
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