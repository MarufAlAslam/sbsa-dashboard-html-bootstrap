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



var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);