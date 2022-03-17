const priceSign = "$";
const allProducts = [
  {
    id: 0,
    title: "Men Product 1",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "men_1.jpg",
    qty: 0,
  },
  {
    id: 1,
    title: "Men Product 2",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "men_2.jpg",
    qty: 0,
  },
  {
    id: 2,
    title: "Men Product 3",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "men_3.jpg",
    qty: 0,
  },
  {
    id: 3,
    title: "Women Product 1",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "women_1.jpg",
    qty: 0,
  },
  {
    id: 4,
    title: "Women Product 2",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "women_2.jpg",
    qty: 0,
  },
  {
    id: 5,
    title: "Women Product 3",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "women_3.jpg",
    qty: 0,
  },
  {
    id: 6,
    title: "Perfume 1",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "perfume_1.jpg",
    qty: 0,
  },
  {
    id: 7,
    title: "Perfume 2",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "perfume_2.jpg",
    qty: 0,
  },
  {
    id: 8,
    title: "Perfume 3",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias?",
    url: "perfume_3.jpg",
    qty: 0,
  },
];

function displayProduct() {
  let innerDisplayProduct = "";

  allProducts.forEach((element, index) => {
    innerDisplayProduct += `<div class="shop-card">
        <div class="imgBx">
            <img src="../images/${element.url}" alt="Men Product One" />

        </div>
        <div class="content">
            <div class="productName">
                <h3>${element.title}
                </h3>
            </div>
            <div class="price-rating">
                <h2>${priceSign}${element.price}</h2>
            </div>
            <div class="rating">
                <button type="button" class="btn btn-dark"
                onclick="addToCart('${element.id}','${element.title}','${element.url}','${element.price}','${element.qty}')"
                >
                    Add to cart
                </button>

            </div>
        </div>
    </div>`;
  });

  let parentProductDiv = document.getElementById("parent-product-div");
  parentProductDiv.innerHTML = innerDisplayProduct;
}

function onLoadCartQty() {
  let getCartQ = localStorage.getItem("cartQ");
  getCartQ = parseInt(getCartQ);
  if (getCartQ) {
    document.getElementById("cart-menu-span").innerText = getCartQ;
  } else {
    document.getElementById("cart-menu-span").innerText = 0;
  }
}

function addToCart(id, title, url, price, qty) {
  let getCartQ = localStorage.getItem("cartQ");
  getCartQ = parseInt(getCartQ);
  if (getCartQ) {
    localStorage.setItem("cartQ", getCartQ + 1);
    document.getElementById("cart-menu-span").innerText = getCartQ + 1;
  } else {
    localStorage.setItem("cartQ", 1);
    document.getElementById("cart-menu-span").innerText = 1;
  }

  let product = {
    id: parseInt(id),
    title,
    url,
    price: parseInt(price),
    qty: parseInt(qty),
  };
  setItemsInCart(product);
}

function setItemsInCart(product) {
  let getProductsInCart = localStorage.getItem("setProductsInCart");
  getProductsInCart = JSON.parse(getProductsInCart);


  if (getProductsInCart == undefined || getProductsInCart == null) {
    getProductsInCart = [product];
  }else{
    getProductsInCart = ["maham 2"];
  }
  localStorage.setItem("setProductsInCart", JSON.stringify(getProductsInCart));
}

displayProduct();
onLoadCartQty();

// string to number === ParseInt(string)
// console.log("product in setItemsInCart funtion",product)
// let getProductsInCart=localStorage.getItem('setProductsInCart')
// console.log(getProductsInCart)
// console.log(typeof getProductsInCart)
// let getProductsInCart=localStorage.getItem('setProductsInCart')
// console.log("getProductsInCart",JSON.parse(getProductsInCart))
// object to string ==== JSON.stringify(object)
// string to object ===
// Localstorage save always string "" '' ``
// localStorage.setItem("setProductsInCart",1)

// '{
//     id:parseInt(id),
//     title,
//     url,
//     price:parseInt(price),
//     qty:parseInt(qty)
//    }'
