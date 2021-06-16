
// document.addEventListener('DOMContentLoaded',(event)=>{
//   event.preventDefault();
//   const recentImage=localStorage.getItem('recentImage')
//   if(recentImage){
//       document.getElementById('img').setAttribute('src',recentImage)
//   }
// })
'use strict';
const orderForm = document.getElementById('orderForm');
// const orders = document.getElementById('orders');
let disaplyForm=document.getElementById('display-form')
let imageMain=document.getElementById('img-click')
imageMain.addEventListener('click',()=>{
  console.log('hi');
  disaplyForm.style.display='block'
  imageMain.style.display='none'
})
function Coffee(check1,name, size, milk,quantity,price){
  this.check1=check1;
  this.name = name;
  this.size = size;
  this.milk = milk;
  this.quantity=quantity;
  this.price=price;
  // this.check2=check2;
  // this.check3=check3;
  Coffee.drinks.push(this);
  savingToLs();
 

}
Coffee.drinks = [];
console.log(Coffee.drinks);

function handleSubmit(event){
  event.preventDefault();
  console.log(event);
  const drink = event.target;
  // console.log(drink);
  const checkOrder1=drink.check1.checked
  // console.log(newThing);
  const checkOrder2=drink.check2.checked;
  const checkOrder3=drink.check3.checked
  // check1,name, size, milk, isHot, drinkType,price
  if(drink.check1.checked){
  const name = drink.idee.value;
  console.log(name);
  const size = drink.sizeOr1.value;
  console.log(size);
  const milk = drink.milkOr1.value;
  console.log(milk);
  const quantity=drink.quantityOrder1.value;
  const price=drink.priceOr1.value;

  console.log(price);
  // console.log(name,size,milk,price);
  new Coffee(checkOrder1,name, size, milk,quantity,price);
  // savingToLs();

  }

  if(drink.check2.checked){

  const name = drink.id2.value;
  console.log(name);
  const size = drink.sizeOr2.value;
  const milk = drink.milkOr2.value;
  const quantity=drink.quantityOrder2.value;
  const price=drink.priceOr2.value;
  console.log(name,size,milk,price);
   new Coffee(checkOrder2,name, size, milk,quantity,price);
  }

  if(drink.check3.checked){
  
  const name = drink.id3.value;
  const size = drink.sizeOr3.value;
  const milk = drink.milkOr3.value;
  const quantity=drink.quantityOrder3.value;
  const price=drink.priceOr3.value;
  // console.log(name,size,milk,price);
  new Coffee(checkOrder3,name, size, milk,quantity,price);
}
// new Coffee(newEshi,name, size, milk, isHot, dType,price);
  // renderOrders();
  orderForm.style.display='none'
  imageMain.style.display='block'
}



function savingToLs(){
  let convertedArr = JSON.stringify(Coffee.drinks); 
  localStorage.setItem('Order',convertedArr);
  console.log(Coffee.drinks);
}



function gettingOrdersFromLs(){
  let data = localStorage.getItem('Order');
  // console.log(data);
  let parsedOrder = JSON.parse(data);
  // console.log(parsedOrder);
  if(parsedOrder){
  Coffee.drinks=parsedOrder;
    // renderOrders();  
  }
}

// let priceTotal;
// for ()
let totalPrice= document.getElementById('quantityOrder1')
let price=document.getElementById('priceOr1')
console.log(totalPrice.value);
let originPrice=price.value
totalPrice.addEventListener('change', function(event) {
  event.preventDefault()
   
   let priceTotal=totalPrice.value *originPrice
  console.log(priceTotal);
  price.value=priceTotal
})

let totalPrice2= document.getElementById('quantityOrder2')
let price2=document.getElementById('priceOr2')
// console.log(totalPrice2.value);
let originPrice2=price2.value
totalPrice2.addEventListener('change', function(event) {
  event.preventDefault()
   
   let priceTotal2=totalPrice2.value *originPrice2
  // console.log(priceTotal);
  price2.value=priceTotal2
})

let totalPrice3= document.getElementById('quantityOrder3')
let price3=document.getElementById('priceOr3')
// console.log(totalPrice3.value);
let originPrice3=price3.value
totalPrice3.addEventListener('change', function(event) {
  event.preventDefault()
   
   let priceTotal3=totalPrice3.value *originPrice3
  // console.log(priceTotal);
  price3.value=priceTotal3
})

orderForm.addEventListener('submit', handleSubmit);
gettingOrdersFromLs();