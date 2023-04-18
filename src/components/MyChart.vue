<template>
  <div class=" shadow">
    <Bar id="my-chart-id" :data="chartData" />
  </div>
</template>
  
  <script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
  },
  data() {
    return {
      data: this.data,
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            data: [40, 20, 12],
            backgroundColor: "#f87979",
            label: "Data",
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
  