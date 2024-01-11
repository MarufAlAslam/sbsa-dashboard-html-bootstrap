const childMenu = document.querySelectorAll(".child-menu");
const arrow = document.querySelectorAll(".arrow");
const btns = document.querySelectorAll(".btn");

const reset = () => {
  childMenu.forEach((item) => {
    item.classList.remove("active");
  });
  arrow.forEach((item) => {
    item.classList.remove("rotate");
  });
  btns.forEach((item) => {
    item.classList.remove("active");
  });
};

// customer
const customer = document.getElementById("customer");
const customerArrow = document.getElementById("customer-arrow");
const customerItems = document.getElementById("customer-items");

customer.addEventListener("click", () => {
  reset();
  customer.classList.add("active");
  customerArrow.classList.add("rotate");
  customerItems.classList.add("active");
});

// vendors
const vendors = document.getElementById("vendors");
const vendorsArrow = document.getElementById("vendors-arrow");
const vendorsItems = document.getElementById("vendors-items");

vendors.addEventListener("click", () => {
  reset();
  vendors.classList.add("active");
  vendorsArrow.classList.add("rotate");
  vendorsItems.classList.add("active");
});

// inventory
const inventory = document.getElementById("inventory");
const inventoryArrow = document.getElementById("inventory-arrow");
const inventoryItems = document.getElementById("inventory-items");

inventory.addEventListener("click", () => {
  reset();
  inventory.classList.add("active");
  inventoryArrow.classList.add("rotate");
  inventoryItems.classList.add("active");
});

// reports
const reports = document.getElementById("reports");
const reportsArrow = document.getElementById("reports-arrow");
const reportsItems = document.getElementById("reports-items");

reports.addEventListener("click", () => {
  reset();
  reports.classList.add("active");
  reportsArrow.classList.add("rotate");
  reportsItems.classList.add("active");
});

$(".menu-btn").click(function () {
  $(this).toggleClass("active");
  $(".sidebar, #mobile-nav").toggleClass("active");
});

$(".tab-item").click(function () {
  $(".tab-item").removeClass("active");
  $(this).addClass("active");
});

$(".header1").click(function () {
  $(".body1").toggleClass("active");
});
$(".header2").click(function () {
  $(".body2").toggleClass("active");
});
$(".header3").click(function () {
  $(".body3").toggleClass("active");
});
$(".header4").click(function () {
  $(".body4").toggleClass("active");
});

$(".edit1, .save1").click(function () {
  $(".edit-on, .edit-off").toggleClass("active");
});
$(".edit2, .save2").click(function () {
  $(".edit-on-2, .edit-off-2").toggleClass("active");
});
