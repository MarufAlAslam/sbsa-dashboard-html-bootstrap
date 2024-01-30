// bar chart
const barChartData = {
  labels: [
    "Saturday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
  ],
  values: [10, 20, 30, 40, 50, 60],
  datasets: [
    {
      label: "Shipped",
      data: [476, 950, 126, 670, 265, 842, 23],
      borderColor: "#2B7F75",
      backgroundColor: "#2B7F75",
      borderWidth: 2,
      borderRadius: 10,
      borderSkipped: false,
    },
    {
      label: "Unshipped",
      data: [154, 675, 764, 123, 187, 93, 198],
      borderColor: "#FFD66B",
      backgroundColor: "#FFD66B",
    },
  ],
};
const myChart = new Chart("barChart", {
  type: "bar",
  data: barChartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        width: 10,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  },
});

// radar chart
const radarChartData = {
  labels: ["Dropship Sale", "DC Sale", "Dropship Qty", "DC Qty"],
  datasets: [
    {
      label: "Shipped",
      data: [150, 320, 390, 420],
      borderColor: "#2B7F75",
      backgroundColor: "#c0d9d6",
      //   dots
      pointBackgroundColor: "#2B7F75",
    },
  ],
};

const myRadarChart = new Chart("radarChart", {
  type: "radar",
  data: radarChartData,
  options: {
    responsive: true,
    // hide indicator
    scale: {
      ticks: {
        display: false,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      "samples-filler-analyser": {
        target: "chart-analyser",
      },
    },
    interaction: {
      intersect: false,
    },
  },
});

// big chart
var bigChartOptions = {
  series: [
    {
      name: "Amazon",
      data: [
        105, 90, 75, 60, 60, 60, 60, 59, 59, 59, 59, 59, 59, 59, 58, 58, 58, 58,
      ],
    },
    {
      name: "Grainger",
      data: [
        455, 390, 325, 260, 259, 259, 258, 257, 257, 256, 255, 255, 254, 254,
        253, 252, 252, 251,
      ],
    },
    {
      name: "Chewy",
      data: [
        105, 90, 75, 60, 60, 60, 60, 59, 59, 59, 59, 59, 59, 59, 58, 58, 58, 58,
      ],
    },
    {
      name: "Walmart",
      data: [
        70, 60, 50, 40, 39.9, 39.8, 39.7, 39.6, 39.5, 39.4, 39.3, 39.2, 39.1,
        39, 38.9, 38.8, 38.7, 38.6,
      ],
    },
  ],
  chart: {
    type: "area",
    height: 400,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ["#2B7F75", "#FF9F38", "#84818A", "#FFC000"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 1,
      opacityTo: 1,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  xaxis: {
    type: "string",
  },
};

var bigChart = new ApexCharts(
  document.querySelector("#bigChart"),
  bigChartOptions
);
bigChart.render();
