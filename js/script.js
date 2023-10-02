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


//   Menangani klik pada tombol "Tambahkan ke Keranjang"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartList = document.getElementById("cart-items");
const co = document.getElementById("coButton");


co.addEventListener('click', function() {
  window.location.href = 'cart.html';
});


addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const item = event.target.parentElement;
    const itemName = item.querySelector(".item-name").textContent;
    const itemPrice = item.querySelector(".item-price").textContent;
    
    
    // Buat elemen baru untuk item yang ditambahkan ke keranjang
    const cartItem = document.createElement("li");
    cartItem.textContent = itemName + " - " + itemPrice;
    
  //   buat elemn baru tombol hapus barang dari keranjang
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

   
  });
});


