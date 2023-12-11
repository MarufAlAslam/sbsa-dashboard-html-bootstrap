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
