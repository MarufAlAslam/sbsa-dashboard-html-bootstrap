// get the id(#) from url
const url = window.location.href;
const urlArray = url.split("/");
const id = urlArray[urlArray.length - 1];
const orderTable = document.getElementsByClassName("order-table");
const removeActiveClassesFromTabs = () => {
  orderTable.forEach((table) => {
    table.classList.remove("active");
  });
};

const newOrders = document.getElementById("new-orders");
const pendingOrders = document.getElementById("pending-orders");
const backOrders = document.getElementById("back-orders");
const cancelledOrders = document.getElementById("cancelled-orders");
const histories = document.getElementById("histories");

const newTab = document.getElementById("new-tab");
const pendingTab = document.getElementById("pending-tab");
const backorderedTab = document.getElementById("backordered-tab");
const cancelledTab = document.getElementById("cancelled-tab");
const historyTab = document.getElementById("history-tab");

const newBtn = document.getElementById("new-order-btn");
const pendingBtn = document.getElementById("pending-btn");
const backBtn = document.getElementById("back-btn");
const canelledBtn = document.getElementById("cancelled-btn");
const historyBtn = document.getElementById("history-btn");

const tabItems = document.getElementsByClassName("tab-item");

if (id === "#new") {
  // removeActiveTabClass();
  histories.classList.remove("active");
  newOrders.classList.add("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.add("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.add("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.newBtn("active");
} else if (id === "#pending") {
  // removeActiveTabClass();
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.add("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.add("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.add("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.newBtn("active");
} else if (id === "#back") {
  // removeActiveTabClass();
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.add("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.add("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.add("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.newBtn("active");
} else if (id === "#cancelled") {
  // removeActiveTabClass();
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.add("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.add("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.add("active");
  historyBtn.classList.newBtn("active");
} else if (id === "#history") {
  // removeActiveTabClass();
  histories.classList.add("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.add("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.add("active");
}

// display different tabs by clicking on different btns
newTab.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.add("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.add("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.add("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.remove("active");
});

// display different tabs by clicking on different btns
newBtn.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.add("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.add("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.add("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.remove("active");
});

// display different tabs by clicking on different btns
pendingTab.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.add("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.add("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.add("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.remove("active");
});

// display different tabs by clicking on different btns
pendingBtn.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.add("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.add("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.add("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.remove("active");
});

// display different tabs by clicking on different btns
backorderedTab.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.add("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.add("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.add("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.remove("active");
});

// display different tabs by clicking on different btns
backBtn.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.add("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.add("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.add("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.remove("active");
});
// display different tabs by clicking on different btns
cancelledTab.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.add("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.add("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.add("active");
  historyBtn.classList.remove("active");
});
// display different tabs by clicking on different btns
canelledBtn.addEventListener("click", () => {
  histories.classList.remove("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.add("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.add("active");
  historyTab.classList.remove("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.add("active");
  historyBtn.classList.remove("active");
});
// display different tabs by clicking on different btns
historyTab.addEventListener("click", () => {
  histories.classList.add("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.add("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.add("active");
});
historyBtn.addEventListener("click", () => {
  histories.classList.add("active");
  newOrders.classList.remove("active");
  pendingOrders.classList.remove("active");
  backOrders.classList.remove("active");
  cancelledOrders.classList.remove("active");

  newTab.classList.remove("active");
  pendingTab.classList.remove("active");
  backorderedTab.classList.remove("active");
  cancelledTab.classList.remove("active");
  historyTab.classList.add("active");

  newBtn.classList.remove("active");
  pendingBtn.classList.remove("active");
  backBtn.classList.remove("active");
  canelledBtn.classList.remove("active");
  historyBtn.classList.add("active");
});
