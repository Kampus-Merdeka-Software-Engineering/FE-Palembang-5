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
      { id: 1, name: "HP Laptop", click: "Click for more", description: "HP Laptop 14-em0014AU Ryzen 3-7320 Harga: Rp. 7.000.000 Operating system: Windows 11 Home Single Language Processor family: AMD Ryzen™ 3 processor Processor: AMD Ryzen™ 3 7320U (up to 4.1 GHz max boost clock, 4 MB L3 cache, 4 cores, 8 threads)6,71 Chipset AMD integrated SoC  Security management: Mic mute key; Camera privacy shutter; Trusted Platform Module (Firmware TPM) support  Memory 8 GB LPDDR5-6400 MHz RAM (onboard)   Memory layout (slots & size): onboard Internal Storage: 512 GB PCIe® NVMe™ M.2 SSD Cloud service: 25 GB Dropbox storage for 12 months", price: 100, img: "product/p1.jpeg" },
      { id: 2, name: "Logitech Mouse", click: "Click for more", description: "slim ergonomis dirancang dengan 2.4 GHz mouse nirkabel, ideal untuk rumah atau kantor Kompatibel dengan kebanyakan laptop dan komputer desktop via USB receiver (dikemas dalam mouse) 3. Teknologi pelacakan optik, bekerja pada distribusi permukaan 4. 16 saluran kerja nirkabel, frekuensi otomatis melompat 5. Frekuensi: 2402 M HZ-2480 M Hz 6. wi-Fi Range: 10m.", price: 150, img: "product/p17.jpeg" },
      { id: 3, name: "Wireless Keyboard", click: "Click for more", description: "Set Bundle: Ya, Tipe Pengunci Keyboard: Membrane Key, Gaming: Ya, Jenis Garansi: Garansi Resmi Lenovo Indonesia, Model Keyboard & Mouse: Legion KM300 RGB Gaming Combo Wired, Kesesuaian Keyboard: Wired via USB2.0, Masa Garansi: 1 Tahun, Dimensi (P x L x T): Packed 550 x 198 x 52 mm", price: 200, img: "product/p6.jpeg" },
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
          <p>${h_product.click}</p>
          <p>Harga: ${h_product.price}</p>
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
      { id: 1, name: "Produk 1", click: "Click for more", description : "Deskripsi produk 1", price: 100, img: "product/p12.jpeg" },
      { id: 2, name: "Produk 2", click: "Click for more",description: "Deskripsi produk 2", price: 150, img: "product/p1.jpeg" },
      { id: 3, name: "Produk 3", click: "Click for more",description: "Deskripsi produk 3", price: 200, img: "product/p2.jpeg" },
      { id: 4, name: "Produk 4", click: "Click for more",description: "Deskripsi produk 3", price: 200, img: "product/p3.jpeg" },
      { id: 5, name: "Produk 5", click: "Click for more",description: "Deskripsi produk 3", price: 200, img: "product/p4.jpeg" },
      { id: 6, name: "Produk 6", click: "Click for more",description: "Deskripsi produk 3", price: 200, img: "product/p5.jpeg" },
      { id: 7, name: "Produk 7", click: "Click for more",description: "Deskripsi produk 3", price: 200, img: "product/p6.jpeg" },
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
          <p>${product.click}</p>
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
});



// page laptop
document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("Lproduct-list"); // Mengganti ID sesuai dengan yang baru
  const productModal = document.getElementById("Lproduct-modal"); // Mengganti ID sesuai dengan yang baru
  const productDetails = document.getElementById("Lproduct-details"); // Mengganti ID sesuai dengan yang baru
  const closeModal = document.querySelector(".close"); // Menggunakan querySelector karena class "close" akan digunakan untuk semua elemen close
  const cartList = document.getElementById("cart-items");
  const co = document.getElementById("coButton");

  co.addEventListener('click', function () {
    window.location.href = 'cart.html';
  });

  // Data produk masih manual
  const products = [
    
{ id: 1, name: "Laptop 1", click: "Click for more", description: "Deskripsi laptop 1", price: 800, img: "product/acer-laptop.jpeg" },
{ id: 2, name: "Laptop 2", click: "Click for more", description: "Deskripsi laptop 2", price: 1200, img: "product/asus-laptop.jpeg" },
{ id: 3, name: "Laptop 3", click: "Click for more", description: "Deskripsi laptop 3", price: 1500, img: "product/HP-laptop.jpeg" },
{ id: 4, name: "Laptop 4", click: "Click for more", description: "Deskripsi laptop 4", price: 2000, img: "product/lenovo-laptop.jpeg" },
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
        <p>${product.click}</p>
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






// untuk moouse

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("Mproduct-list"); // Mengganti ID sesuai dengan yang baru
  const productModal = document.getElementById("Mproduct-modal"); // Mengganti ID sesuai dengan yang baru
  const productDetails = document.getElementById("Mproduct-details"); // Mengganti ID sesuai dengan yang baru
  const closeModal = document.querySelector(".close"); // Menggunakan querySelector karena class "close" akan digunakan untuk semua elemen close
  const cartList = document.getElementById("cart-items");
  const co = document.getElementById("coButton");

  co.addEventListener('click', function () {
    window.location.href = 'cart.html';
  });

  // Data produk masih manual
  const products = [
    
 { id: 1, name: "Mouse 1", click: "Click for more", description: "Deskripsi mouse 1", price: 20, img: "product/p14.jpeg" },
 { id: 2, name: "Mouse 2", click: "Click for more", description: "Deskripsi mouse 2", price: 30, img: "product/p13.jpeg" },
 { id: 3, name: "Mouse 3", click: "Click for more", description: "Deskripsi mouse 3", price: 25, img: "product/p15.jpeg" },
 { id: 4, name: "Mouse 4", click: "Click for more", description: "Deskripsi mouse 4", price: 15, img: "product/p17.jpeg" },
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
        <p>${product.click}</p>
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


// keyboard
document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("Kproduct-list"); // Mengganti ID sesuai dengan yang baru
  const productModal = document.getElementById("Kproduct-modal"); // Mengganti ID sesuai dengan yang baru
  const productDetails = document.getElementById("Kproduct-details"); // Mengganti ID sesuai dengan yang baru
  const closeModal = document.querySelector(".close"); // Menggunakan querySelector karena class "close" akan digunakan untuk semua elemen close
  const cartList = document.getElementById("cart-items");
  const co = document.getElementById("coButton");

  co.addEventListener('click', function () {
    window.location.href = 'cart.html';
  });

  // Data produk masih manual
  const products = [
    
{ id: 1, name: "Keyboard 1", click: "Click for more", description: "Deskripsi Keyboard 1", price: 20, img: "product/p6.jpeg" },
{ id: 2, name: "Keyboard 2", click: "Click for more", description: "Deskripsi Keyboard 2", price: 30, img: "product/p3.jpeg" },
{ id: 3, name: "Keyboard 3", click: "Click for more", description: "Deskripsi Keyboard 3", price: 25, img: "product/p8.jpeg" },
{ id: 4, name: "Keyboard 4", click: "Click for more", description: "Deskripsi Keyboard 4", price: 15, img: "product/p16.jpeg" },
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
        <p>${product.click}</p>
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
