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
      { id: 1, name: "Produk 1", click: "Click for more", description: "Deskripsi produk 1", price: 100, img: "product/p12.jpeg" },
      { id: 2, name: "Produk 2", click: "Click for more", description: "Deskripsi produk 2", price: 150, img: "product/p1.jpeg" },
      { id: 3, name: "Produk 3", click: "Click for more", description: "Deskripsi produk 3", price: 200, img: "product/p2.jpeg" },
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

    // Fetch user data from the API
    fetch("https://cute-frog-miniskirt.cyclic.app/users")
        .then(response => response.json())
        .then(users => {
            // Loop through the user data and create product elements
            users.forEach(user => {
                const productItem = document.createElement("div");
                productItem.classList.add("product");

                productItem.innerHTML = `
                    <div class="product-image">
                        <img src="${user.img}" alt="${user.name}">
                    </div>
                    <div class="product-details">
                        <h3>${user.name}</h3>
                        <p>${user.click}</p>
                        <p>Harga: $${user.price}</p>
                    </div>
                    <div class="product-action">
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                `;

                // Add event listener to show product details in the modal
                productItem.addEventListener("click", () => {
                    // Fill the modal content with user information
                    productDetails.innerHTML = `
                        <h2>${user.name}</h2>
                        <p>Deskripsi: ${user.description}</p>
                        <p>Harga: $${user.price}</p>
                    `;

                    // Show the modal
                    productModal.style.display = "block";
                });

                // Add product to the product list
                productList.appendChild(productItem);

                const addToCartButton = productItem.querySelector(".add-to-cart");
                addToCartButton.addEventListener("click", function (event) {
                    event.stopPropagation();
                    const itemName = user.name;
                    const itemPrice = user.price;

                    // Create a new list item for the cart
                    const cartItem = document.createElement("li");
                    cartItem.textContent = itemName + " - " + itemPrice;

                    // Create a delete button for the cart item
                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "X";
                    deleteButton.className = "delete-button";
                    deleteButton.addEventListener("click", function () {
                        // Remove the list item when the delete button is clicked
                        cartItem.remove();
                    });

                    cartItem.appendChild(deleteButton);

                    // Add the item to the cart list
                    cartList.appendChild(cartItem);
                    productModal.style.display = "none";

                    // Access the element with class "order-overflow" on the cart.html page
                    const orderOverflow = document.querySelector(".order-overflow");

                    // Add cartItem to the div with class "order-overflow"
                    orderOverflow.appendChild(cartItem);
                });
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    // Add event listener to close the modal
    closeModal.addEventListener("click", () => {
        productModal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", event => {
        if (event.target === productModal) {
            productModal.style.display = "none";
        }
    });
});


