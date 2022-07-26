const toDarkMode = () => {
  $(".to-darkmode-btn").css({ display: "none" });
  $(".to-lightmode-btn").css({ display: "flex" });
  $(".app").removeClass("light-theme");
  $(".app").addClass("dark-theme");
};
const toLightMode = () => {
  $(".to-lightmode-btn").css({ display: "none" });
  $(".to-darkmode-btn").css({ display: "flex" });
  $(".app").removeClass("dark-theme");
  $(".app").addClass("light-theme");
};
const collapseNav = () => {
  $(".nav-content span, .nav-content .accordion-button > i").css({
    display: "none",
  });
  $(".navbar-opened").css({ display: "none" });
  $(".navbar-closed").css({ display: "block" });
  $(".nav-content").css({ width: "9rem" });
  $(".nav-link-box").css({ justifyContent: "center" });
  $(".nav-link-box-acc").css({ justifyContent: "center" });
  $(".sld-logo-box").css({ justifyContent: "center" });
  $(".page-content").css({ padding: "10.5rem 3.5rem 3.5rem 11.5rem" });
  $("header").css({ padding: "0 3.5rem 0 11.5rem" });
};
const openNav = () => {
  $(".nav-content span, .nav-content .accordion-button > i").css({
    display: "block",
  });
  $(".nav-content").css({ width: "25rem" });
  $(".navbar-opened").css({ display: "block" });
  $(".navbar-closed").css({ display: "none" });
  $(".nav-link-box").css({ justifyContent: "space-between" });
  $(".nav-link-box-acc").css({ justifyContent: "space-between" });
  $(".sld-logo-box").css({ justifyContent: "flex-start" });
  $(".page-content").css({ padding: "10.5rem 3.5rem 3.5rem 28.5rem" });
  $("header").css({ padding: "0 3.5rem 0 26.5rem" });
};
const ctx = document
  .getElementById("driver-data-ranking-chart")
  .getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Delivered",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.3)"],
        borderWidth: 1,
      },
      {
        label: "Cancelled",
        data: [15, 13, 5, 12, 10, 4],
        backgroundColor: ["rgba(54, 162, 235, 0.3)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

const ctx2 = document.getElementById("workflow-chart").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: [
      "Cleared",
      "Pending",
      "Ins. Paid",
      "Amount Paid",
      "Ins. Due",
      "Amount Due",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 3, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0)",
          "rgba(54, 162, 235, 0)",
          "rgba(255, 206, 86, 0)",
          "rgba(75, 192, 192, 0)",
          "rgba(153, 102, 255, 0)",
          "rgba(255, 159, 64, 0)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx3 = document.getElementById("last-12m-data-chart").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Delivered",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.3)"],
        borderWidth: 0,
      },
      {
        label: "Reversed",
        data: [15, 13, 5, 12, 10, 4],
        backgroundColor: ["rgba(54, 162, 235, 0.3)"],
        borderWidth: 0,
      },
      {
        label: "Shipped",
        data: [10, 4, 15, 5, 10, 12],
        backgroundColor: ["rgba(255, 206, 86, 0.3)"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
