// let orderCafe=document.getElementById('cafe')

// const orders = document.getElementById('orders');


// orderCafe.addEventListener('submit', handleSubmit);
// function Coffee(items,price){
//     this.items=items;
//     this.price=price;
    
//     Coffee.all.push(this);
//     // localStorage.setItem('Oreders',JSON.stringify(Coffee.all))
//   }

// Coffee.all=[]
// function handleSubmit(event){
//     event.preventDefault();
//     console.log(event.target);
//     const items=event.target.items.value
   
//     // const price=parseInt(event.target.price.value)
//     const price=event.target.price.value


//     console.log(items,price);

//     new Coffee(items,price);
   
  
//     // console.log(Coffee.all);
//     // var array = JSON.parse(localStorage.getItem('Orders') || '[]');
//     // array.push(Coffee.all);
//     // localStorage.setItem('Orders', JSON.stringify(array));
//     let array=JSON.parse()
//     let save=localStorage.setItem('Oreders',JSON.stringify(Coffee.all))
    
   
//     // localStorage.removeItem(Orders)
//     gettingOrdersFromLs()
   
//   }

  
//   function gettingOrdersFromLs(){
//     let data = localStorage.getItem('Orders');
//     // console.log(data);
//     let parsedOrder = JSON.parse(data);
//     // console.log(parsedOrder);

//     if(parsedOrder){ 
//         Coffee.all = parsedOrder;
//       }
//       orders.textContent = '';
//       console.log( Coffee.all.length);
//       for(let i = 0; i < Coffee.all.length; i++){
     
//     //   for(let x=0;x<i;x++){
          
//           const drinkLI = document.createElement('li');
         
//           drinkLI.textContent = `${Coffee.all[i].items} the price ${Coffee.all[i].price}`;
//           orders.appendChild(drinkLI);
//           console.log();
//     //   }
//   }
   
    
//   }

// gettingOrdersFromLs()

// // // let partner = localStorage.getItem(JSON.parse('submit'));
// // // console.log(partner);





    
// // //     let total=0
  
// // //         // total()
        
// // //         let arrOfCart=[{
// // //             name:'omaima',
// // //             price:23
// // //         },{
// // //             name:'bayan',
// // //             price:12
// // //         }]
// // //         console.log(arrOfCart);
// // let carts=document.querySelectorAll('.carts')
// // // console.log(carts);

// // for(let i=0;i<carts.length;i++){
// // carts[i].addEventListener('click',(event)=>{
// //    event.preventDefault()

// // // let price=document.querySelectorAll('.carts price')
// // // price.addEventListener()
// //     // console.log(arrOfCart.length);
     
// //         cartsNumber();
// //         // console.log();
    
// //     })
// // }

// // let price=0
// // function cartsNumber(){
// //     // console.log(arrOfCart);
// //     let productNumber=localStorage.getItem('cartNumber')
// //     productNumber=parseInt(productNumber)
// // //  console.log(productNumber);
// //     if(productNumber){
// //         localStorage.setItem('cartNumber',productNumber +1)
// //         // document.getElementsByClassName('.span').textContent=productNumber +1
// //         //  price =document.querySelectorAll('.carts price').textContent=value
// //         //  console.log('price',price)
// //     }else{
// //         localStorage.setItem('cartNumber',1)
// //         // document.getElementsByClassName('.span').textContent=1
// //         //  price =document.querySelectorAll('.carts price').textContent=value
// //         // console.log(price)
// //     }
// //     // setItems(arrOfCart)
// // }

// // // function setItems(){
// // //     console.log('cart',arrOfCart);
// // // }


// // // let price =document.querySelectorAll('.carts price')
// // // price.addEventListener('')



// // // span()
// // // function span(){
// // //     let productNumber=localStorage.getItem('cartNumber')
// // //     if(productNumber){
// // //         document.getElementsByClassName('.carts span').textContent=productNumber
// // //     }

// // // }










// // // function CartsCount(items,price){
    
// // //         this.items=items,
    
// // //         this.price=price
// // //         CartsCount.all.push(this)
    
// // //     }
// // //     let total=0
// // //     CartsCount.all=[]
    
// // //     new CartsCount('omaiman',12)
// // //     new CartsCount('bayan',9)
// // // //  let price=document.ge
// // //     console.log(CartsCount.all);
// // //     let cart=document.getElementsByClassName('carts')
// // //     console.log(cart);
// // //     for (let i =0;i<cart.length;i++){
// // //     cart[i].addEventListener('click',function(event){
// // //         event.preventDefault();
// // //         // console.log('hi');
// // //         console.log(event);
// // //         // for(let i=0;i<CartsCount.all.length;i++){
// // //         //     console.log('hiiii');
// // //         //     total=CartsCount.all[i].price +total

// // //         // }
// // //             // console.log(total);
// // //     })
// // // }




'use strict';

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', handleSubmit);
const orders = document.getElementById('orders');

// constructor function to create a basic drink
function Coffee(name, drinkType,price){
  this.name=name;
  this.drinkType = drinkType;
 
  this.price=price;
 
  Coffee.drinks.push(this);
  savingToLs(Coffee.drinks);
}



Coffee.drinks = [];


function handleSubmit(event){
  event.preventDefault();
  // console.log(event.target);
  const name=event.target.name.value;
  const drinkType  = event.target.drinkType.value;
  const price=event.target.price.value;
//   console.log(price);
  new Coffee( name,drinkType,price);

}


function savingToLs(nameA ){

  let convertedArr = JSON.stringify(nameA); 
 
  localStorage.setItem('Order',convertedArr);

  
  render();  
}


function gettingOrders(){
  let data = localStorage.getItem('Order');
  // console.log(data);
  let parsedOrder = JSON.parse(data);
  // console.log(parsedOrder);
  if(parsedOrder){
    Coffee.drinks = parsedOrder;
    render();  
    
  }}
  let total =0

  function render(){
    orders.textContent = '';
    // console.log(Coffee.drinks.length);
  for(let i = 0; i < Coffee.drinks.length; i++){
    const orderLI = document.createElement('li');
    orderLI.setAttribute('id',`li${i}`)
    // console.log(i);
    // console.log('price',Coffee.drinks[i].price);

    total=parseInt(Coffee.drinks[i].price)+total
    console.log('total',total);
    // let convTotal=JSON.stringify(total)
    // localStorage.setItem('Totals',convTotal)
    orderLI.textContent = ` ${Coffee.drinks[i].name}   ${Coffee.drinks[i].drinkType} .... ${Coffee.drinks[i].price}`;
    orders.appendChild(orderLI);
    const remove=document.createElement('button')
    remove.setAttribute('id','buttRemove')
    remove.textContent='delete'
    orderLI.appendChild(remove)
    // console.log(Coffee.drinks[i].drinkType);
    
    remove.addEventListener('click',function(orderLI){
      // console.log(Coffee.drinks);
      // let arr=Coffee.drinks
      // console.log(arr);
      // if()
      // console.log(drinkLI.path);
      // console.log(Coffee.drinks[i].name);
      // console.log(drinkLI.path[1].outerText);
      let text=orderLI.path[1].outerText
      // console.log(text);
      // console.log(text.includes(Coffee.drinks[i].name));
      // console.log();
      if(text.includes(Coffee.drinks[i].name)){
        // console.log('hi');
        // console.log('',Coffee.drinks[i]);
        // console.log( Coffee.drinks);
        let priceLess=Coffee.drinks[i].price
        console.log(priceLess);
        let arr= Coffee.drinks
        // console.log(localStorage.Order.length);
        // console.log(Coffee.drinks.length);
        let after_remove=arr.splice(Coffee.drinks[i], 1);
        total=total-parseInt(priceLess)
        console.log('delete',total);
        let convTotal=JSON.stringify(total)
        localStorage.setItem('Totals',convTotal)
        // document.getElementById("total").value = `${total}$`;
        // console.log(Coffee.drinks);
        // savingToLs()
        savingToLs(Coffee.drinks)
        //  Coffee.drinks.splice(i, 1); 
        // for(let i=0;i<Coffee.drinks.length;i++){
          
          
          
          // }
          
          // console.log(Coffee.drinks[i]);
          
          
          // localStorage.removeItem('Order')
        }
        // console.log(orderLI.path[1].id);
        // onsole.log(`'${orderLI.path[1].id}'`);
        // let id=orderLI.path[1].id
        // document.getElementById(id).remove();
        
        
        //    orderLI[i].remove()
      })
      
    }
    document.getElementById("total").value = `${total}$`;
    let convTotal=JSON.stringify(total)
    localStorage.setItem('Totals',convTotal)
  }




gettingOrders();




