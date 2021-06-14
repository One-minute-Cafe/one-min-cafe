
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



let count=0
function handleSubmit(event){
  event.preventDefault();
  // console.log(event.target);
  const name=event.target.name.value;
  const drinkType  = event.target.drinkType.value;
  const price=event.target.price.value;
  //   console.log(price);
  new Coffee( name,drinkType,price);
  // savingToLs(Coffee.drinks)
    count++
  console.log('count',count)
  
  let convertCount = JSON.stringify(count); 
  localStorage.setItem('Count',convertCount);
  document.getElementById('span').textContent=`${count}`
}



function savingToLs(nameA){

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
  
  function render(){
    let total =0
    orders.textContent = '';
    // console.log(Coffee.drinks.length);
  for(let i = 0; i < Coffee.drinks.length; i++){
    const orderLI = document.createElement('li');
    orderLI.setAttribute('id',`li${i}`)
    // console.log(i);
    // console.log('price',Coffee.drinks[i].price);

    total=parseInt(Coffee.drinks[i].price)+total
    console.log('total',total);

    orderLI.textContent = ` ${Coffee.drinks[i].name}   ${Coffee.drinks[i].drinkType} .... ${Coffee.drinks[i].price}`;
    orders.appendChild(orderLI);
    const remove=document.createElement('button')
    remove.setAttribute('id','buttRemove')
    remove.textContent='delete'
    orderLI.appendChild(remove)
    // console.log(Coffee.drinks[i].drinkType);
    
    remove.addEventListener('click',function(orderLI){
      let text=orderLI.path[1].outerText

      if(text.includes(Coffee.drinks[i].name)){
  
        let priceLess=Coffee.drinks[i].price
        console.log(priceLess);
        let arr= Coffee.drinks
 
        let after_remove=arr.splice(Coffee.drinks[i], 1);
        total=total-parseInt(priceLess)
        console.log('delete',total);
        let convTotal=JSON.stringify(total)
        localStorage.setItem('Totals',convTotal)
        savingToLs(Coffee.drinks)

        }

      })
      
    }
    document.getElementById("total").value = `${total}$`;
    
    let convTotal=JSON.stringify(total)
    localStorage.setItem('Totals',convTotal)
  }




gettingOrders();




