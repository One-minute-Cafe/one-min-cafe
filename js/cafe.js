 
let cart = [{name:'mohammed',price:3},{name:'ahmad',price:5}]
 let cartitem = document.getElementsByClassName('itemprice');
 cartitem.addEventListener('click',addToCart);

 function addToCart(){
     console.log(cartitem);
 }
addToCart()