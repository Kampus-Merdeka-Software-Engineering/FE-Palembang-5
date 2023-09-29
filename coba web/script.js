function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  }

// detail product pop-up


document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const productModal = document.getElementById("product-modal");
    const productDetails = document.getElementById("product-details");
    const closeModal = document.getElementsByClassName("close")[0];
    
// masih data manual
    const products = [
        { id: 1, name: "Produk 1", description: "Deskripsi produk 1", price: 100 },
        { id: 2, name: "Produk 2", description: "Deskripsi produk 2", price: 150 },
        { id: 3, name: "Produk 3", description: "Deskripsi produk 3", price: 200 },
        { id: 4, name: "Produk 4", description: "Deskripsi produk 3", price: 200 },
        { id: 5, name: "Produk 5", description: "Deskripsi produk 3", price: 200 },
    ];

    let productsInRow = 0;
    // Tampilkan produk dalam halaman
    products.forEach(product => {
      
        const productItem = document.createElement("div");
        productItem.classList.add("product"); 
      
        productItem.innerHTML = `
        <div class="product-details">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Harga: $${product.price}</p>
        </div>
       
        <div class="product-image">
          <!-- Gambar produk di sini -->
        </div>
        <div class="product-action">
          <!-- Tombol beli atau tindakan lainnya di sini -->
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

        productList.appendChild(productItem);
        productsInRow++;
        if (productsInRow >= 3) {
            const lineBreak = document.createElement('br');
            productList.appendChild(lineBreak);
            productsInRow = 0;
        }
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
});



