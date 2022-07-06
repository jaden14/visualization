<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {[]}
    },
    casetrend: Object
  },
  data() {
    return {
      chartData: {
        labels: "",
        datasets: [ 
          {
            label: 'Case Count',
            backgroundColor:  [
      '#1B4F72',
      '#145A32',
      '#641E16',
      '#1B2631',
      '#7B7D7D',
      '#6E2C00',
      '#512E5F'
            ],
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: ""

          } ]
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
    }
  },
  mounted() {
        let Months = new Array();
        let Datas = new Array();

        let data = this.casetrend;
        if(data){
            data.forEach(element => {
            Months.push(element.month);
            Datas.push(element.tvisists);
          })
            this.chartData.labels = Months;
            this.chartData.datasets[0].data = Datas;
        }
    },
}
</script>