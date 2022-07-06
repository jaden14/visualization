"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_charts_BarChart_vue"],{

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


/***/ })

}]);