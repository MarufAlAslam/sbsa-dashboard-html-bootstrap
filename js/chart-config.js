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
      borderRadius: {
        topLeft: 5,
        topRight: 5,
      },
      borderSkipped: true,
    },
    {
      label: "Unshipped",
      data: [154, 675, 764, 123, 187, 93, 198],
      borderColor: "#FFD66B",
      backgroundColor: "#FFD66B",
      borderWidth: 2,
      borderRadius: {
        topLeft: 5,
        topRight: 5,
      },
      borderSkipped: true,
    },
  ],
};
// var ctx = document.getElementById("barChart").getContext("2d");
const myChart = new Chart("barChart", {
  type: "bar",
  data: barChartData,
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        font: {
          size: 12,
        },
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
    type: "linear",
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
    // titles
    categories: [
      "16 Apr",
      "4 May",
      "22 May",
      "10 Jun",
      "20 Jun",
      "28 Jun",
      "16 Jul",
      "24 Jul",
      "3 Aug",
      "10 Aug",
      "20 Aug",
      "25 Aug",
      "31 Aug",
      "5 Sep",
      "10 Sep",
      "15 Sep",
      "20 Sep",
      "25 Sep",
    ],
  },
};

var bigChart = new ApexCharts(
  document.querySelector("#bigChart"),
  bigChartOptions
);
bigChart.render();

const customChartValues = [
  {
    label: "Pending Invoice Submission",
    value: 13,
  },
  {
    label: "Pending ASN Submission",
    value: 20,
  },
  {
    label: "Missing Tracking Information",
    value: 20,
  },
  {
    label: "In Preparation Stage Packages",
    value: 90,
  },
  {
    label: "Error Rate",
    value: 5,
  },
];


const customBars = document.getElementById("custom-bars");

customChartValues.forEach((item) => {
  const bar = document.createElement("div");
  bar.classList.add("custom-bar");
  bar.innerHTML = `
  <div class="bars mb-3">
  <label for="">${item.label}</label>
  <div
    class="d-flex justify-content-start align-items-center gap-2"
  >
    <div
      class="bar mt-1"
      style="height: 30px; width: ${item.value}%"
    ></div>
    <span class="fs-12 text-muted">${item.value}</span>
  </div>
</div>
  `;
  customBars.appendChild(bar);
});