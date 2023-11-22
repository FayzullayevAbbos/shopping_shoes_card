const listProductEl = document.querySelector(".listProduct");
const listCartEl = document.querySelector(".listCart");
const cartIconEl = document.querySelector(".card-icon");
const cartTab = document.querySelector(".cartTab-bg");
const prodCount = document.querySelector("#count");
const close = document.querySelector(".close");
const allPrices = document.querySelector(".all-price")

let savatHisob = 0;

cartIconEl.addEventListener("click", (e) => {
  cartTab.style.display = "flex";
});
close.addEventListener("click", (e) => {
  cartTab.style.display = "none";
});

function updateDOM() {
  listProductEl.innerHTML = null;
  let html = "";
  producrts.forEach((el) => {
    html += `<div class="img">
      <img class="item-img" src="${el.img}" alt="" /> 
      <div class="info">
        <div class="name">${el.name}</div>
        <div class="price">${el.price}$</div>
        <button class="btn">Add to card</button>
      </div>
    </div>`;
  });
  listProductEl.innerHTML = html;
}

updateDOM();
let count = 0;

function updateCart() {
  listCartEl.innerHTML = null;
  let new_Cart = "";
  producrts.forEach((elem) => {
    new_Cart += `
        <div class="list">
              <img src="${elem.img}" alt="" />
              <div class="it-name">${elem.name}</div>
              <div class="price-it">0</div>
              <div class="soni">
                <button>-</button>
                <p>${0}</p>
                <button>+</button>
              </div>
         </div>
        `;
  });
  listCartEl.innerHTML = new_Cart;
}
updateCart();

// select cart
// 1-qator
let card_1min = listCartEl.childNodes[1].childNodes[7].childNodes[1];
let card_1count = listCartEl.childNodes[1].childNodes[7].childNodes[3];
let card_1plus = listCartEl.childNodes[1].childNodes[7].childNodes[5];
let card_1sum = listCartEl.childNodes[1].childNodes[5];
// 2-qator
let card_2min = listCartEl.childNodes[3].childNodes[7].childNodes[1];
let card_2count = listCartEl.childNodes[3].childNodes[7].childNodes[3];
let card_2plus = listCartEl.childNodes[3].childNodes[7].childNodes[5];
let card_2sum = listCartEl.childNodes[3].childNodes[5];

// 3-qator
let card_3min = listCartEl.childNodes[5].childNodes[7].childNodes[1];
let card_3count = listCartEl.childNodes[5].childNodes[7].childNodes[3];
let card_3plus = listCartEl.childNodes[5].childNodes[7].childNodes[5];
let card_3sum = listCartEl.childNodes[5].childNodes[5];

// 4-qator
let card_4min = listCartEl.childNodes[7].childNodes[7].childNodes[1];
let card_4count = listCartEl.childNodes[7].childNodes[7].childNodes[3];
let card_4plus = listCartEl.childNodes[7].childNodes[7].childNodes[5];
let card_4sum = listCartEl.childNodes[7].childNodes[5];

// 5-qator
let card_5min = listCartEl.childNodes[9].childNodes[7].childNodes[1];
let card_5count = listCartEl.childNodes[9].childNodes[7].childNodes[3];
let card_5plus = listCartEl.childNodes[9].childNodes[7].childNodes[5];
let card_5sum = listCartEl.childNodes[9].childNodes[5];

// 6-qator
let card_6min = listCartEl.childNodes[11].childNodes[7].childNodes[1];
let card_6count = listCartEl.childNodes[11].childNodes[7].childNodes[3];
let card_6plus = listCartEl.childNodes[11].childNodes[7].childNodes[5];
let card_6sum = listCartEl.childNodes[11].childNodes[5];

// celect product
let pro_1add = listProductEl.childNodes[0].childNodes[3].childNodes[5];
let pro_2add = listProductEl.childNodes[1].childNodes[3].childNodes[5];
let pro_3add = listProductEl.childNodes[2].childNodes[3].childNodes[5];
let pro_4add = listProductEl.childNodes[3].childNodes[3].childNodes[5];
let pro_5add = listProductEl.childNodes[4].childNodes[3].childNodes[5];
let pro_6add = listProductEl.childNodes[5].childNodes[3].childNodes[5];

let card_1 = 0;
let card_2 = 0;
let card_3 = 0;
let card_4 = 0;
let card_5 = 0;
let card_6 = 0;

let a11 = 0;
let a12 = 0;
let a13 = 0;
let a14 = 0;
let a15 = 0;
let a16 = 0;

// product list

pro_1add.addEventListener("click", () => {
  savatHisob += 1;
  prodCount.textContent = savatHisob;
  card_1 += 1;
  card_1count.textContent = card_1;
  card_1sum.textContent = 0;
  a11 = 120 * card_1;
  card_1sum.textContent = `${a11}$`;
  allPrice()
});
pro_2add.addEventListener("click", () => {
  savatHisob += 1;
  prodCount.textContent = savatHisob;
  card_2 += 1;
  card_2count.textContent = card_2;
  card_2sum.textContent = 0;
  a12 = 105 * card_2;
  card_2sum.textContent = `${a12}$`;
  allPrice()
});
pro_3add.addEventListener("click", () => {
  savatHisob += 1;
  prodCount.textContent = savatHisob;
  card_3 += 1;
  card_3count.textContent = card_3;
  card_3sum.textContent = 0;
  a13 = 90 * card_3;
  card_3sum.textContent = `${a13}$`;
  allPrice()
});
pro_4add.addEventListener("click", () => {
  savatHisob += 1;
  prodCount.textContent = savatHisob;
  card_4 += 1;
  card_4count.textContent = card_4;
  card_4sum.textContent = 0;
  a14 = 130 * card_4;
  card_4sum.textContent = `${a14}$`;
  allPrice()
});
pro_5add.addEventListener("click", () => {
  savatHisob += 1;
  prodCount.textContent = savatHisob;
  card_5 += 1;
  card_5count.textContent = card_5;
  card_5sum.textContent = 0;
  a15 = 100 * card_5;
  card_5sum.textContent = `${a15}$`;
  allPrice()
});
pro_6add.addEventListener("click", () => {
  savatHisob += 1;
  prodCount.textContent = savatHisob;
  card_6 += 1;
  card_6count.textContent = card_6;
  card_6sum.textContent = 0;
  a16 = 95 * card_6;
  card_6sum.textContent = `${a16}$`;
  allPrice()
});

//card list
listCartEl.addEventListener("click", (event) => {
  if (event.target == card_1min) {
    if (card_1 >= 1) {
      card_1 -= 1;
      card_1count.textContent = card_1;
      card_1sum.textContent = 0;
      a11 = 120 * card_1;
      card_1sum.textContent = `${a11}$`;
    }
  } else if (event.target == card_2min) {
    if (card_2 >= 1) {
      card_2 -= 1;
      card_2count.textContent = card_2;
      card_2sum.textContent = 0;
      a12 = 105 * card_2;
      card_2sum.textContent = `${a12}$`;
    }
  } else if (event.target == card_3min) {
    if (card_3 >= 1) {
      card_3 -= 1;
      card_3count.textContent = card_3;
      card_3sum.textContent = 0;
      a13 = 90 * card_3;
      card_3sum.textContent = `${a13}$`;
    }
  } else if (event.target == card_4min) {
    if (card_4 >= 1) {
      card_4 -= 1;
      card_4count.textContent = card_4;
      card_4sum.textContent = 0;
      a14 = 130 * card_4;
      card_4sum.textContent = `${a14}$`;
    }
  } else if (event.target == card_5min) {
    if (card_5 >= 1) {
      card_5 -= 1;
      card_5count.textContent = card_5;
      card_5sum.textContent = 0;
      a15 = 100 * card_5;
      card_5sum.textContent = `${a15}$`;
    }
  } else if (event.target == card_6min) {
    if (card_6 >= 1) {
      card_6 -= 1;
      card_6count.textContent = card_6;
      card_6sum.textContent = 0;
      a16 = 95 * card_6;
      card_6sum.textContent = `${a16}$`;
    }
  } else if (event.target == card_1plus) {
    card_1 += 1;
    card_1count.textContent = card_1;
    card_1sum.textContent = 0;
    a11 = 120 * card_1;
    card_1sum.textContent = `${a11}$`;
  } else if (event.target == card_2plus) {
    card_2 += 1;
    card_2count.textContent = card_2;
    card_2sum.textContent = 0;
    a12 = 105 * card_2;
    card_2sum.textContent = `${a12}$`;
  } else if (event.target == card_3plus) {
    card_3 += 1;
    card_3count.textContent = card_3;
    card_3sum.textContent = 0;
    a13 = 90 * card_3;
    card_3sum.textContent = `${a13}$`;
  } else if (event.target == card_4plus) {
    card_4 += 1;
    card_4count.textContent = card_4;
    card_4sum.textContent = 0;
    a14 = 130 * card_4;
    card_4sum.textContent = `${a14}$`;
  } else if (event.target == card_5plus) {
    card_5 += 1;
    card_5count.textContent = card_5;
    card_5sum.textContent = 0;
    a15 = 100 * card_5;
    card_5sum.textContent = `${a15}$`;
  } else if (event.target == card_6plus) {
    card_6 += 1;
    card_6count.textContent = card_6;
    card_6sum.textContent = 0;
    a16 = 95 * card_6;
    card_6sum.textContent = `${a16}$`;
  }
  allPrice()
});

function allPrice() {
    allPrices.textContent = null
    allPrices.textContent = `All Price : ${a11 + a12 + a13 + a14 + a15 + a16}$`
}
