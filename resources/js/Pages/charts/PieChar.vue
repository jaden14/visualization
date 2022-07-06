<template>
  <Pie
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
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
ChartJS.unregister(ChartDataLabels);

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
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
      default: 400
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
      type: Array,
      default: () => []
    },
    served: Array
  },
  data() {
    return {
      plugins: [ChartDataLabels],
      chartData: {
        labels: "",
        datasets: [
          {
            backgroundColor: [
      '#1B4F72',
      '#145A32',
      '#641E16',
      '#1B2631',
      '#7B7D7D',
      '#6E2C00',
      '#512E5F'
            ],
            data: "",
            percentage:"",
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
          formatter: function(value, context) {
          //context.dataset.data[context.dataIndex] + ', ' +-->
          return context.dataset.percentage[context.dataIndex]+"%";
            },
            color:"white",
          },
          legend:{
            position: 'right'
          }
        }
      }
    }
  },
   mounted() {
        let Hospitals = new Array();
        let Client = new Array();
        let Totals = new Array();
        let Percentage = new Array();

        let data = this.served;
        if(data){
            data.forEach(element => {
            if(element.hospitalname){
              Hospitals.push(element.hospitalname+'('+element.percentage+'%'+')');
            } else if(element.provincename){
              Hospitals.push(element.provincename+'('+element.percentage+'%'+')');
            } else if(element.client){
              Hospitals.push(element.client+'('+element.percentage+'%'+')');
            } else if(element.department){
              Hospitals.push(element.department+'('+element.percentage+'%'+')');
            }
            Totals.push(element.total);
            Percentage.push(element.percentage);
          })
            this.chartData.labels = Hospitals;
            this.chartData.datasets[0].data = Totals;
            this.chartData.datasets[0].percentage = Percentage;
            
        }
    },
}
</script>
