"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_callddoc_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/callddoc/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/callddoc/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _charts_BarChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../charts/BarChart */ "./resources/js/Pages/charts/BarChart.vue");
/* harmony import */ var _charts_PieChar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../charts/PieChar.vue */ "./resources/js/Pages/charts/PieChar.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  components: {
    BarChart: _charts_BarChart__WEBPACK_IMPORTED_MODULE_0__["default"],
    PieChart: _charts_PieChar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    casetrend: Object,
    cases_total: Array,
    client_total: Array,
    average: Array,
    total_first: Array,
    total_repeat: Array,
    served: Object,
    served_per_province: Object,
    first_repeat_client: Array,
    department: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/BarChart.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/BarChart.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");


chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BarChart',
  components: {
    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_1__.Bar
  },
  props: {
    chartId: {
      type: String,
      "default": 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      "default": 'label'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 300
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Object,
      "default": function _default() {
        [];
      }
    },
    casetrend: Object
  },
  data: function data() {
    return {
      chartData: {
        labels: "",
        datasets: [{
          label: 'Case Count',
          backgroundColor: ['#1B4F72', '#145A32', '#641E16', '#1B2631', '#7B7D7D', '#6E2C00', '#512E5F'],
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          data: ""
        }]
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    };
  },
  mounted: function mounted() {
    var Months = new Array();
    var Datas = new Array();
    var data = this.casetrend;

    if (data) {
      data.forEach(function (element) {
        Months.push(element.month);
        Datas.push(element.tvisists);
      });
      this.chartData.labels = Months;
      this.chartData.datasets[0].data = Datas;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/PieChar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/PieChar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js");



chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale);
chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.unregister(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PieChart',
  components: {
    Pie: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Pie
  },
  props: {
    chartId: {
      type: String,
      "default": 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      "default": 'label'
    },
    width: {
      type: Number,
      "default": 400
    },
    height: {
      type: Number,
      "default": 400
    },
    cssClasses: {
      "default": '',
      type: String
    },
    styles: {
      type: Object,
      "default": function _default() {}
    },
    plugins: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    served: Array
  },
  data: function data() {
    return {
      plugins: [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]],
      chartData: {
        labels: "",
        datasets: [{
          backgroundColor: ['#1B4F72', '#145A32', '#641E16', '#1B2631', '#7B7D7D', '#6E2C00', '#512E5F'],
          data: "",
          percentage: ""
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            formatter: function formatter(value, context) {
              //context.dataset.data[context.dataIndex] + ', ' +-->
              return context.dataset.percentage[context.dataIndex] + "%";
            },
            color: "white"
          },
          legend: {
            position: 'right'
          }
        }
      }
    };
  },
  mounted: function mounted() {
    var Hospitals = new Array();
    var Client = new Array();
    var Totals = new Array();
    var Percentage = new Array();
    var data = this.served;

    if (data) {
      data.forEach(function (element) {
        if (element.hospitalname) {
          Hospitals.push(element.hospitalname + '(' + element.percentage + '%' + ')');
        } else if (element.provincename) {
          Hospitals.push(element.provincename + '(' + element.percentage + '%' + ')');
        } else if (element.client) {
          Hospitals.push(element.client + '(' + element.percentage + '%' + ')');
        } else if (element.department) {
          Hospitals.push(element.department + '(' + element.percentage + '%' + ')');
        }

        Totals.push(element.total);
        Percentage.push(element.percentage);
      });
      this.chartData.labels = Hospitals;
      this.chartData.datasets[0].data = Totals;
      this.chartData.datasets[0].percentage = Percentage;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/callddoc/index.vue?vue&type=template&id=2c776504":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/callddoc/index.vue?vue&type=template&id=2c776504 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "CalldDoc", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row gap-20 masonry pos-r"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "peers fxw-nw jc-sb ai-c"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "CalldDoc Visualization")])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row gap-20 masonry pos-r"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "masonry-sizer col-md-6"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "masonry-item w-100"
};
var _hoisted_6 = {
  "class": "row gap-20"
};
var _hoisted_7 = {
  "class": "col-md-3"
};
var _hoisted_8 = {
  "class": "layers bd bgc-white p-20"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "CASES")], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "layer w-100"
};
var _hoisted_11 = {
  "class": "peers ai-sb fxw-nw"
};
var _hoisted_12 = {
  "class": "peer peer-greed"
};
var _hoisted_13 = {
  id: "sparklinedash"
};
var _hoisted_14 = {
  "class": "peer"
};
var _hoisted_15 = {
  "class": "d-ib lh-0 va-m fw-300 bdrs-2em pX-15 pY-15 bgc-green-40 c-green-500"
};
var _hoisted_16 = {
  "class": "col-md-3"
};
var _hoisted_17 = {
  "class": "layers bd bgc-white p-20"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "CLIENTS")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "layer w-100"
};
var _hoisted_20 = {
  "class": "peers ai-sb fxw-nw"
};
var _hoisted_21 = {
  "class": "peer peer-greed"
};
var _hoisted_22 = {
  id: "sparklinedash"
};
var _hoisted_23 = {
  "class": "peer"
};
var _hoisted_24 = {
  "class": "d-ib lh-0 va-m fw-300 bdrs-2em pX-15 pY-15 bgc-red-40 c-red-500"
};
var _hoisted_25 = {
  "class": "col-md-3"
};
var _hoisted_26 = {
  "class": "layers bd bgc-white p-20"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "FIRST TIME CLIENTS")], -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "layer w-100"
};
var _hoisted_29 = {
  "class": "peers ai-sb fxw-nw"
};
var _hoisted_30 = {
  "class": "peer peer-greed"
};
var _hoisted_31 = {
  id: "sparklinedash"
};
var _hoisted_32 = {
  "class": "peer"
};
var _hoisted_33 = {
  "class": "d-ib lh-0 va-m fw-300 bdrs-2em pX-15 pY-15 bgc-blue-40 c-blue-500"
};
var _hoisted_34 = {
  "class": "col-md-3"
};
var _hoisted_35 = {
  "class": "layers bd bgc-white p-20"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "REPEAT CLIENTS")], -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "layer w-100"
};
var _hoisted_38 = {
  "class": "peers ai-sb fxw-nw"
};
var _hoisted_39 = {
  "class": "peer peer-greed"
};
var _hoisted_40 = {
  id: "sparklinedash"
};
var _hoisted_41 = {
  "class": "peer"
};
var _hoisted_42 = {
  "class": "d-ib lh-0 va-m fw-300 bdrs-2em pX-15 pY-15 bgc-deep-purple-40 c-deep-purple-500"
};
var _hoisted_43 = {
  "class": "masonry-item col-12"
};
var _hoisted_44 = {
  "class": "bd bgc-white"
};
var _hoisted_45 = {
  "class": "peers fxw-nw@lg+ ai-s"
};
var _hoisted_46 = {
  "class": "peer peer-greed w-60p@lg+ w-100@lg- p-20"
};
var _hoisted_47 = {
  "class": "layers"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "CASES TREND")], -1
/* HOISTED */
);

var _hoisted_49 = {
  "class": "layer w-100"
};
var _hoisted_50 = {
  "class": "peer bdL p-20 w-40p@lg+ w-100p@lg-"
};
var _hoisted_51 = {
  "class": "layers"
};
var _hoisted_52 = {
  "class": "layer w-100"
};
var _hoisted_53 = {
  "class": "layers"
};
var _hoisted_54 = {
  "class": "layer w-100"
};
var _hoisted_55 = {
  "class": "mB-5"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "fw-600 c-grey-700"
}, "RATING", -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "pull-right c-grey-600 fsz-sm"
};
var _hoisted_58 = {
  "class": "progress mT-10"
};
var _hoisted_59 = {
  "class": "visually-hidden"
};
var _hoisted_60 = {
  "class": "masonry-item col-6"
};
var _hoisted_61 = {
  "class": "bd bgc-white"
};
var _hoisted_62 = {
  "class": "peers fxw-nw@lg+ ai-s"
};
var _hoisted_63 = {
  "class": "peer peer-greed w-70p@lg+ w-100@lg- p-20"
};
var _hoisted_64 = {
  "class": "layers"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "SERVED CASES BY HOSPITALS")], -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "layer w-100"
};
var _hoisted_67 = {
  "class": "masonry-item col-6"
};
var _hoisted_68 = {
  "class": "bd bgc-white"
};
var _hoisted_69 = {
  "class": "peers fxw-nw@lg+ ai-s"
};
var _hoisted_70 = {
  "class": "peer peer-greed w-70p@lg+ w-100@lg- p-20"
};
var _hoisted_71 = {
  "class": "layers"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "SERVED CASES BY PROVINCE")], -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "layer w-100"
};
var _hoisted_74 = {
  "class": "masonry-item col-6"
};
var _hoisted_75 = {
  "class": "bd bgc-white"
};
var _hoisted_76 = {
  "class": "peers fxw-nw@lg+ ai-s"
};
var _hoisted_77 = {
  "class": "peer peer-greed w-70p@lg+ w-100@lg- p-20"
};
var _hoisted_78 = {
  "class": "layers"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "CLIENT CONSULTATION FREQUENCY")], -1
/* HOISTED */
);

var _hoisted_80 = {
  "class": "layer w-100"
};
var _hoisted_81 = {
  "class": "masonry-item col-6"
};
var _hoisted_82 = {
  "class": "bd bgc-white"
};
var _hoisted_83 = {
  "class": "peers fxw-nw@lg+ ai-s"
};
var _hoisted_84 = {
  "class": "peer peer-greed w-70p@lg+ w-100@lg- p-20"
};
var _hoisted_85 = {
  "class": "layers"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer w-100 mB-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "lh-1"
}, "CONSULTATION DEPARTMENT")], -1
/* HOISTED */
);

var _hoisted_87 = {
  "class": "layer w-100"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_BarChart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BarChart");

  var _component_PieChart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PieChart");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #Toatl Visits ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.cases_total, function (totals) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(totals.hospitalname), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(totals.total_count).toLocaleString()), 1
    /* TEXT */
    )])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.client_total, function (totals) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(totals.hospitalname), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(totals.total_client).toLocaleString()), 1
    /* TEXT */
    )])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.total_first, function (totals) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(totals.hospitalname), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(totals.total_first).toLocaleString()), 1
    /* TEXT */
    )])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.total_repeat, function (totals) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(totals.hospitalname), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(totals.repeat_time).toLocaleString()), 1
    /* TEXT */
    )])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #Total Page Views ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #Unique Visitors ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #Bounce Rate ==================== ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #Site Visits ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BarChart, {
    casetrend: $props.casetrend
  }, null, 8
  /* PROPS */
  , ["casetrend"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.average, function (averages) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(averages.hospitalname), 1
    /* TEXT */
    ), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(averages.rating).toFixed(2)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "progress-bar bgc-blue-500",
      role: "progressbar",
      "aria-valuenow": "1",
      "aria-valuemin": "0",
      "aria-valuemax": "10",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: averages.rating * 10 + '%'
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Number(averages.rating).toFixed(2)), 1
    /* TEXT */
    )], 4
    /* STYLE */
    )])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #SERVED CASES BY HOSPITAL ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PieChart, {
    served: $props.served
  }, null, 8
  /* PROPS */
  , ["served"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #ERVED CASES BY PROVINCE ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PieChart, {
    served: $props.served_per_province
  }, null, 8
  /* PROPS */
  , ["served"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #FIRST AND REPEAT CLIENT ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PieChart, {
    served: $props.first_repeat_client
  }, null, 8
  /* PROPS */
  , ["served"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" #DEPARTMENT ==================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PieChart, {
    served: $props.department
  }, null, 8
  /* PROPS */
  , ["served"])])])])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/BarChart.vue?vue&type=template&id=4518672c":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/BarChart.vue?vue&type=template&id=4518672c ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Bar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Bar, {
    "chart-options": $data.chartOptions,
    "chart-data": $data.chartData,
    "chart-id": $props.chartId,
    "dataset-id-key": $props.datasetIdKey,
    plugins: $props.plugins,
    "css-classes": $props.cssClasses,
    styles: $props.styles,
    width: $props.width,
    height: $props.height
  }, null, 8
  /* PROPS */
  , ["chart-options", "chart-data", "chart-id", "dataset-id-key", "plugins", "css-classes", "styles", "width", "height"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/PieChar.vue?vue&type=template&id=07a10cf1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/PieChar.vue?vue&type=template&id=07a10cf1 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Pie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pie");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Pie, {
    "chart-options": $data.chartOptions,
    "chart-data": $data.chartData,
    "chart-id": $props.chartId,
    "dataset-id-key": $props.datasetIdKey,
    plugins: $data.plugins,
    "css-classes": $props.cssClasses,
    styles: $props.styles,
    width: $props.width,
    height: $props.height
  }, null, 8
  /* PROPS */
  , ["chart-options", "chart-data", "chart-id", "dataset-id-key", "plugins", "css-classes", "styles", "width", "height"]);
}

/***/ }),

/***/ "./resources/js/Pages/callddoc/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/callddoc/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2c776504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2c776504 */ "./resources/js/Pages/callddoc/index.vue?vue&type=template&id=2c776504");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/callddoc/index.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_visualization_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_visualization_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_2c776504__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/callddoc/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/charts/BarChart.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/charts/BarChart.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BarChart_vue_vue_type_template_id_4518672c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=template&id=4518672c */ "./resources/js/Pages/charts/BarChart.vue?vue&type=template&id=4518672c");
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js */ "./resources/js/Pages/charts/BarChart.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_visualization_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_visualization_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BarChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BarChart_vue_vue_type_template_id_4518672c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/charts/BarChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/charts/PieChar.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/charts/PieChar.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PieChar_vue_vue_type_template_id_07a10cf1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieChar.vue?vue&type=template&id=07a10cf1 */ "./resources/js/Pages/charts/PieChar.vue?vue&type=template&id=07a10cf1");
/* harmony import */ var _PieChar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieChar.vue?vue&type=script&lang=js */ "./resources/js/Pages/charts/PieChar.vue?vue&type=script&lang=js");
/* harmony import */ var F_xampp_htdocs_visualization_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_xampp_htdocs_visualization_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PieChar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PieChar_vue_vue_type_template_id_07a10cf1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/charts/PieChar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/callddoc/index.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/callddoc/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/callddoc/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/charts/BarChart.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/charts/BarChart.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BarChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BarChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BarChart.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/BarChart.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/charts/PieChar.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/charts/PieChar.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PieChar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/PieChar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/callddoc/index.vue?vue&type=template&id=2c776504":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/callddoc/index.vue?vue&type=template&id=2c776504 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_2c776504__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_2c776504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=2c776504 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/callddoc/index.vue?vue&type=template&id=2c776504");


/***/ }),

/***/ "./resources/js/Pages/charts/BarChart.vue?vue&type=template&id=4518672c":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/charts/BarChart.vue?vue&type=template&id=4518672c ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BarChart_vue_vue_type_template_id_4518672c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BarChart_vue_vue_type_template_id_4518672c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BarChart.vue?vue&type=template&id=4518672c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/BarChart.vue?vue&type=template&id=4518672c");


/***/ }),

/***/ "./resources/js/Pages/charts/PieChar.vue?vue&type=template&id=07a10cf1":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/charts/PieChar.vue?vue&type=template&id=07a10cf1 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChar_vue_vue_type_template_id_07a10cf1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PieChar_vue_vue_type_template_id_07a10cf1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PieChar.vue?vue&type=template&id=07a10cf1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/charts/PieChar.vue?vue&type=template&id=07a10cf1");


/***/ })

}]);