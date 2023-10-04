console.log(document.title) 
// pemanggilan sudah berhasil tinggal kasih DOMnya


// navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  }

  // HIGHLIGHT PRODUCT maintain

  document.addEventListener("DOMContentLoaded", function () {
    const hProductList = document.getElementById("hproduct-list");
    const hProductModal = document.getElementById("hproduct-modal");
    const hProductDetails = document.getElementById("hproduct-details");
    const hCloseModal = document.getElementsByClassName("close")[0];
  
    const hProduct = [
      { id: 1, name: "Produk 1", description: "Deskripsi produk 1", price: 100, img: "product/p12.jpeg" },
      { id: 2, name: "Produk 2", description: "Deskripsi produk 2", price: 150, img: "product/p1.jpeg" },
      { id: 3, name: "Produk 3", description: "Deskripsi produk 3", price: 200, img: "product/p2.jpeg" },
    ];
  
    hProduct.forEach(h_product => {
  
      const productItem = document.createElement("div");
      productItem.classList.add("hproduct");
  
      productItem.innerHTML = `
        <div class="product-image">
          <img src="${h_product.img}" alt="${h_product.name}">
        </div>
        <div class="product-details">
          <h3>${h_product.name}</h3>
          <p>${h_product.description}</p>
          <p>Harga: ${h_product.price}</p>
        </div>
        <div class="product-action">
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
  
      // Tambahkan event listener untuk menampilkan modal detail produk saat produk diklik
      productItem.addEventListener("click", () => {
        // Isi konten modal dengan informasi produk
        hProductDetails.innerHTML = `
          <h2>${h_product.name}</h2>
          <p>Deskripsi: ${h_product.description}</p>
          <p>Harga: $${h_product.price}</p>
        `;
  
        // Tampilkan modal
        hProductModal.style.display = "block";
      });
      hProductList.appendChild(productItem);
  });
  hCloseModal.addEventListener("click", () => {
    hProductModal.style.display = "none";
  });
});

  // product maintain CATEGORIE
  document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const productModal = document.getElementById("product-modal");
    const productDetails = document.getElementById("product-details");
    const closeModal = document.getElementsByClassName("close")[0];
    const cartList = document.getElementById("cart-items");
    const co = document.getElementById("coButton");
  
    co.addEventListener('click', function () {
      window.location.href = 'cart.html';
    });
  
    // Data produk masih manual
    const products = [
      { id: 1, name: "Produk 1", description: "Deskripsi produk 1", price: 100, img: "product/p12.jpeg" },
      { id: 2, name: "Produk 2", description: "Deskripsi produk 2", price: 150, img: "product/p1.jpeg" },
      { id: 3, name: "Produk 3", description: "Deskripsi produk 3", price: 200, img: "product/p2.jpeg" },
      { id: 4, name: "Produk 4", description: "Deskripsi produk 3", price: 200, img: "product/p3.jpeg" },
      { id: 5, name: "Produk 5", description: "Deskripsi produk 3", price: 200, img: "product/p4.jpeg" },
      { id: 6, name: "Produk 6", description: "Deskripsi produk 3", price: 200, img: "product/p5.jpeg" },
      { id: 7, name: "Produk 7", description: "Deskripsi produk 3", price: 200, img: "product/p6.jpeg" },
    ];
  
    // Tampilkan produk dalam halaman
    products.forEach(product => {
  
      const productItem = document.createElement("div");
      productItem.classList.add("product");
  
      productItem.innerHTML = `
        <div class="product-image">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Harga: $${product.price}</p>
        </div>
        <div class="product-action">
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
  
      // Tambahkan event listener untuk menampilkan modal detail produk saat produk diklik
      productItem.addEventListener("click", () => {
        // Isi konten modal dengan informasi produk
        productDetails.innerHTML = `
          <h2>${product.name}</h2>
          <p>Deskripsi: ${product.description}</p>
          <p>Harga: $${product.price}</p>
        `;
  
        // Tampilkan modal
        productModal.style.display = "block";
      });
  
      // Tambahkan produk ke daftar produk
      productList.appendChild(productItem);
  
      // Tambahkan event listener untuk tombol "Tambahkan ke Keranjang" pada setiap produk
      const addToCartButton = productItem.querySelector(".add-to-cart");
      addToCartButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the productItem click event from firing
        const itemName = product.name;
        const itemPrice = product.price;
  
        // Buat elemen baru untuk item yang ditambahkan ke keranjang
        const cartItem = document.createElement("li");
        cartItem.textContent = itemName + " - " + itemPrice;
  
        // Buat elemen tombol hapus barang dari keranjang
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
          // Hapus elemen li saat tombol hapus ditekan
          cartItem.remove();
        });
  
        cartItem.appendChild(deleteButton);
        // Tambahkan item ke dalam keranjang
        cartList.appendChild(cartItem);
  
        // Close the product modal when an item is added to the cart
        productModal.style.display = "none";
      });
    });
  
    // Tambahkan event listener untuk menutup modal
    closeModal.addEventListener("click", () => {
      productModal.style.display = "none";
    });
  
    // Tutup modal saat mengklik di luar area modal
    window.addEventListener("click", event => {
      if (event.target === productModal) {
        productModal.style.display = "none";
      }
    });
  
    // Tambahkan event listener untuk menampilkan productDetails
    const productDetailButtons = document.querySelectorAll(".product-details-button");
    productDetailButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const product = button.parentElement.parentElement;
        const productName = product.querySelector(".product-details h2").textContent;
        const productDescription = product.querySelector(".product-details p").textContent;
        const productPrice = product.querySelector(".product-details p:last-child").textContent;
  
        // Isi konten productDetails dengan informasi produk
        productDetails.innerHTML = `
          <h2>${productName}</h2>
          <p>${productDescription}</p>
          <p>${productPrice}</p>
        `;
  
        // Tampilkan productDetails
        productModal.style.display = "block";
      });
    });
  });
  

