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
