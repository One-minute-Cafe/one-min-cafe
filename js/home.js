
// document.addEventListener('DOMContentLoaded',(event)=>{
//   event.preventDefault();
//   const recentImage=localStorage.getItem('recentImage')
//   if(recentImage){
//       document.getElementById('img').setAttribute('src',recentImage)
//   }
// })
'use strict';
// const orderForm = document.getElementById('orderForm');
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
  let quantity=drink.quantityOrder1.value;
  const price=drink.priceOr1.value;

  console.log(price);
  // console.log(name,size,milk,price);
  new Coffee(checkOrder1,name, size, milk,quantity,price);
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
  // const checkOrder3=drink.check1.checked
  const name = drink.id3.value;
  const size = drink.sizeOr3.value;
  const milk = drink.milkOr3.value;
  const quantity=drink.quantityOrder3.value;
  const price=drink.priceOr3.value;
  console.log(name,size,milk,price);
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
// function renderOrders(){
//   orders.textContent = '';
//   for(let i = 0; i < Coffee.drinks.length; i++){
//     const drinkLI = document.createElement('li');
  
//     drinkLI.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk} price :${Coffee.drinks[i].price}`;
//     orders.appendChild(drinkLI);
//   }
// }
// let priceTotal;
let totalPrice= document.getElementById('quantityOrder1')
let price=document.getElementById('priceOr1')
console.log(totalPrice.value);
totalPrice.addEventListener('change', function(event) {
  event.preventDefault()
   let priceTotal=totalPrice.value *price.value
  console.log(priceTotal);
  price.value=priceTotal
})
orderForm.addEventListener('submit', handleSubmit);
gettingOrdersFromLs();