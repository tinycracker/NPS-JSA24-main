let getCategories = JSON.parse(localStorage.getItem("categories")); /// Lấy về các loại sản phẩm
console.log(getCategories); //[{},{},... ]


let getProducts = JSON.parse(localStorage.getItem("products")); /// lấy về data sản phẩm

///// Render giá trị categories ra trang chủ
////// render giá trị categories ra giao diện
const divCategories = document.getElementById("categories");
for (let key of getCategories) {
  divCategories.innerHTML += `
  <div class="category-card">
    <a href="">
      <img src="${key.image}" alt="">
    </a>
    <div class="category-container">
      <a href="">
        <h3>${key.name}</h3>
      </a>
      <a href="">
        <p>${key.quantity}</p>
      </a>
    </div>
  </div>
  `
}


////// Render data sản phẩm ra màn hình website
let star;
const divProducts = document.getElementById("products");
for (let key of getProducts) {
  if (key.stars == 1) {
    star = `<i class="fa-solid fa-star"></i>`
  }
  else if (key.stars == 2) {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  else if (key.stars == 3) {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  else if (key.stars == 4) {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  else {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  divProducts.innerHTML += `
        <div class="card">
          <div class="image-container">
            <img src="${"../assets/products/" + key.image}" alt="">
          </div>
          <div class="container">
            <p>${key.category}</p>
            <h5>${key.name}</h5>
            <div class="stars">
            ${star}
            </div>
            <h6>
              <span class="old-price">${key.oldPrice}</span>
              <span class="new-price">${key.newPrice}</span>
            </h6>
            <button class = "btn btn-add-to-cart">Add to cart</button>
          </div>
        </div>
`
}

