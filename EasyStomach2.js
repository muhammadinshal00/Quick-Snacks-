document.getElementById('500g').style.display = "none"
document.getElementById('100g').style.display = "block"
 document.getElementById('1kg').style.display = "none"


document.getElementById('btn3').addEventListener('click', function(){
   document.getElementById('100g').style.display = "block"
     document.getElementById('1kg').style.display = "none"


})

 
document.getElementById('btn4').addEventListener('click', function(){
   document.getElementById('500g').style.display = "block"
    document.getElementById('100g').style.display = "none"


})
 
document.getElementById('btn5').addEventListener('click', function(){
   document.getElementById('100g').style.display = "none"
    document.getElementById('500g').style.display = "none"
    document.getElementById('1kg').style.display = "block"


})

 // DOM Elements
 const addToCartBtn = document.getElementById('btn1'); // Using your btn1 ID
 const cartCount = document.getElementById('cartCount');
 const cartContainer = document.getElementById('cartContainer');
 const cartDropdown = document.getElementById('cartDropdown');
 const cartItems = document.getElementById('cartItems');
 const customAlert = document.getElementById('customAlert');
 
 // Cart Data
 let cart = [];
 let itemCount = 0;
 
 // Product Data (customize as needed)
 const currentProduct = {
     id: 1,
     name: 'Oatmeal',
     price: 420        
 };


 
 // Add to Cart Function for btn1
 addToCartBtn.addEventListener('click', function() {
     // Add product to cart
     cart.push(currentProduct);
     itemCount++;
     
     // Update UI
     updateCartUI();
     
     // Show alert
     showCustomAlert();
 });
 
 // Toggle Cart Dropdown
 cartContainer.addEventListener('click', function() {
     cartDropdown.classList.toggle('show');
 });
 
 // Close dropdown when clicking outside
 document.addEventListener('click', function(event) {
     if (!cartContainer.contains(event.target)) {
         cartDropdown.classList.remove('show');
     }
 });
 
 // Update Cart UI
 function updateCartUI() {
     // Update count
     cartCount.textContent = itemCount;
     
     // Update dropdown items
     if (cart.length === 0) {
         cartItems.innerHTML = '<p>Your cart is empty</p>';
     } else {
         let itemsHTML = '';
         cart.forEach(item => {
             itemsHTML += `
                 <div class="cart-item">
                     <h4>${item.name}</h4>
                     <p>${item.price.toFixed(2)}</p>
                 </div>
             `;
         });
         cartItems.innerHTML = itemsHTML;
     }
 }
 
 // Show Custom Alert
 function showCustomAlert() {
     customAlert.style.display = 'block';
     
     // Hide after animation
     setTimeout(() => {
         customAlert.style.display = 'none';
     }, 3000);
 }
