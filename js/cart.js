// const orderForm = document.getElementById('orderForm');
// orderForm.addEventListener('submit', handleSubmit);
const orders = document.getElementById('orders');
// constructor function to create a basic drink
function Coffee(name, drinkType, price) {
    this.name = name;
    this.drinkType = drinkType;
    this.price = price;
    Coffee.drinks.push(this);
    savingToLs(Coffee.drinks);
}
Coffee.drinks = [];
function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);
    const name = event.target.name.value;
    const drinkType = event.target.drinkType.value;
    const price = event.target.price.value;
    //   console.log(price);
    new Coffee(name, drinkType, price);
}
function savingToLs(nameA) {
    let convertedArr = JSON.stringify(nameA);
    localStorage.setItem('Order', convertedArr);
    render();
}
function gettingOrders() {
    let data = localStorage.getItem('Order');
    // console.log(data);
    let parsedOrder = JSON.parse(data);
    // console.log(parsedOrder);
    if (parsedOrder) {
        Coffee.drinks = parsedOrder;
        render();
    }
}
let total = 0
function render() {
    orders.textContent = '';
    // console.log(Coffee.drinks.length);
    for (let i = 0; i < Coffee.drinks.length; i++) {
        const orderLI = document.createElement('li');
        orderLI.setAttribute('id', `li${i}`)
            // console.log(i);
            // console.log('price',Coffee.drinks[i].price);
        total = parseInt(Coffee.drinks[i].price) + total
        // console.log('total', total);
        // let convTotal=JSON.stringify(total)
        // localStorage.setItem('Totals',convTotal)
        orderLI.textContent = ` ${Coffee.drinks[i].name}-------------------------${Coffee.drinks[i].price}`;
        orders.appendChild(orderLI);
        const remove = document.createElement('button')
        remove.setAttribute('id', 'buttRemove')
        remove.textContent = 'delete'
        orderLI.appendChild(remove)
            // console.log(Coffee.drinks[i].drinkType);
        remove.addEventListener('click', function(orderLI) {
            // console.log(Coffee.drinks);
            // let arr=Coffee.drinks
            // console.log(arr);
            // if()
            // console.log(drinkLI.path);
            // console.log(Coffee.drinks[i].name);
            // console.log(drinkLI.path[1].outerText);
            let text = orderLI.path[1].outerText
                // console.log(text);
                // console.log(text.includes(Coffee.drinks[i].name));
                // console.log();
            if (text.includes(Coffee.drinks[i].name)) {
                // console.log('hi');
                // console.log('',Coffee.drinks[i]);
                // console.log( Coffee.drinks);
                let priceLess = Coffee.drinks[i].price
                console.log(priceLess);
                let arr = Coffee.drinks
                    // console.log(localStorage.Order.length);
                    // console.log(Coffee.drinks.length);
                let after_remove = arr.splice(Coffee.drinks[i], 1);
                total = total - parseInt(priceLess)
                // console.log('delete', total);
                let convTotal = JSON.stringify(total)
                localStorage.setItem('Totals', convTotal)
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
    let convTotal = JSON.stringify(total)
    localStorage.setItem('Totals', convTotal)
}
gettingOrders();