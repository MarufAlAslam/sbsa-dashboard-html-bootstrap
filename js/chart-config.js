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
      borderRadius: {
        topLeft: 10,
        topRight: 10,
      },
    },
    {
      label: "Unshipped",
      data: [154, 675, 764, 123, 187, 93, 198],
      borderColor: "#FFD66B",
      backgroundColor: "#FFD66B",
      borderRadius: {
        topLeft: 10,
        topRight: 10,
      },
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
      tooltip: {
        enabled: true,
      },
    },
  },
});

const radarOptions = {
  series: [
    {
      name: "Series 1",
      data: [250, 370, 490, 440],
    },
  ],
  chart: {
    height: 300,
    width: "100%",
    type: "radar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Dropship Sale", "DC Sale", "Dropship Qty", "DC Qty"],
  },
  fill: {
    opacity: 0.4,
    colors: ["#2B7F75"],
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["#2B7F75"],
  },
  markers: {
    size: 5,
    colors: ["#2B7F75"],
  },
};

var radarChart = new ApexCharts(
  document.querySelector("#radarChart"),
  radarOptions
);
radarChart.render();

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

var fatChartOptions = {
  series: [
    {
      data: [
        {
          x: "Walmart -65%",
          y: 65,
        },
        {
          x: "Chewy - 15%",
          y: 15,
        },
        {
          x: "Grainger - 10%",
          y: 10,
        },
        {
          x: "Home Depot - 9%",
          y: 9,
        },
      ],
    },
  ],
  legend: {
    show: true,
  },
  chart: {
    height: 510,
    with: "100%",
    type: "treemap",
  },
  colors: [
    '#3B93A5',
    '#F7B844',
    '#ADD8C7',
    '#EC3C65',
    '#CDD7B6',
    '#C1F666',
    '#D43F97',
    '#1E5D8C',
    '#421243',
    '#7F94B0',
    '#EF6537',
    '#C0ADDB'
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  },
  // hide the download button
  toolbar: {
    show: false,
  },
};

var fatChart = new ApexCharts(
  document.querySelector("#fat-chart"),
  fatChartOptions
);
fatChart.render();
