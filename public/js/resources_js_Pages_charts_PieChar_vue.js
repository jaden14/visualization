"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_charts_PieChar_vue"],{

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