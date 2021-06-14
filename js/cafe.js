let form = document.createElement("form");
let val;
let customerOrder = [];

//create constractor function
function OrderForm(name,id,path,radioextName,ext1option1,ext1option2,ext1option3,check1,check2,check3,check4,cost){
    this.name=name;
    this.id=id;
    this.path=path;
    this.radioextName=radioextName;
    this.ext1option1=ext1option1;
    this.ext1option2=ext1option2;
    this.ext1option3=ext1option3;
    this.check1=check1;
    this.check2=check2;
    this.check3=check3;
    this.check4=check4;
    this.cost=cost;
    OrderForm.allOrder.push(this);

}
OrderForm.allOrder=[];
new OrderForm('coffee','ord1','../img/Untitled-3.png','amount of suger','no suger','mid suger','more suger','write name','with milk','hot','cold','10');
new OrderForm('Nescafe latte','ord2', '../img/pixel-studios-igeJJErbKIY-unsplash.jpg', 'Types', 'Latte', 'Strong', 'Mocha','More cream', 'Write name', 'hot', 'cold', '5') 
new OrderForm('Tea','ord3', '../img/svitlana-eXw6CPGWwcg-unsplash.jpg','Amount of suger', 'No suger', 'Mid suger', 'More suger','Write name','With milk','Green Tea', 'Black Tea','5' )
console.log(OrderForm.allOrder)

function orderParameter(){
    //display element
  for (let i = 0; i < OrderForm.allOrder.length; i++){
    let div = document.getElementById(OrderForm.allOrder[i].id);
    console.log(div);
    div.appendChild(form);
    let checkbox =document.createElement("input");
    checkbox.setAttribute('name',OrderForm.allOrder[i].name)
    checkbox.setAttribute('value', 'orderchecked')
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("id",OrderForm.allOrder[i].id);
    form.appendChild(checkbox);
    let orderPic = document.createElement("label");
    orderPic.setAttribute("for",OrderForm.allOrder[i].id);
    form.appendChild(orderPic);
    let pic1 =document.createElement("img");
    pic1.setAttribute("src",OrderForm.allOrder[i].path);
    orderPic.appendChild(pic1);
    let name = document.createElement("label");
    name.innerHTML = OrderForm.allOrder[i].name;
    console.log(name.innerHTML);
    form.appendChild(name);
    let quentity = document.createElement('label')
    quentity.innerHTML = ' Quentity'
    quentity.setAttribute('for', 'quentity')
    form.appendChild(quentity)
    let quentityInput = document.createElement('input')
    quentityInput.setAttribute('type', 'number')
    quentityInput.setAttribute('id', 'quentity')
    quentityInput.setAttribute('name', 'Quentity order')
    quentityInput.setAttribute('value','number')
    form.appendChild(quentityInput)
    console.log(quentityInput);
    quentityInput.addEventListener('change', function(event){
     val = event.target.value;
    val*= OrderForm.allOrder[i].cost;
     
    })

    console.log();
    //radio extinction
    let ext1=document.createElement("label");
    ext1.innerHTML = OrderForm.allOrder[i].radioextName;
    form.appendChild(ext1);
    let ext1option1 = document.createElement("label");
    ext1option1.innerHTML = OrderForm.allOrder[i].ext1option1;
    form.appendChild(ext1option1)
    ext1option1.setAttribute("for",OrderForm.allOrder[i].ext1option1)
    let ext1Input1 = document.createElement("input");
    ext1Input1.setAttribute("type","radio");
    ext1Input1.setAttribute("id",OrderForm.allOrder[i].ext1option1);
    ext1Input1.setAttribute("name",OrderForm.allOrder[i].radioextName);
    ext1Input1.setAttribute("value","noSuger");
    form.appendChild(ext1Input1);
    //option 2
    let ext2option2 = document.createElement("label");
    ext2option2.innerHTML = OrderForm.allOrder[i].ext1option2;
    form.appendChild(ext2option2)
    ext2option2.setAttribute("for","ext2option2")
    let ext2Input2 = document.createElement("input");
    ext2Input2.setAttribute("type","radio");
    ext2Input2.setAttribute("id","ext2option2");
    ext2Input2.setAttribute("name",OrderForm.allOrder[i].radioextName);
    ext2Input2.setAttribute("value","midSuger");
    form.appendChild(ext2Input2);
    //option 3
    let ext3option3 = document.createElement("label");
    ext3option3.innerHTML = OrderForm.allOrder[i].ext1option3;
    form.appendChild(ext3option3)
    ext3option3.setAttribute("for","ext3option3")
    let ext3Input3 = document.createElement("input");
    ext3Input3.setAttribute("type","radio");
    ext3Input3.setAttribute("id","ext3option3");
    ext3Input3.setAttribute("name",OrderForm.allOrder[i].radioextName);
    ext3Input3.setAttribute("value","moreSuger");
    form.appendChild(ext3Input3);
    // check1
    let check1 = document.createElement('label');
    check1.setAttribute('for','check1')
    form.appendChild(check1)
    let check1Input = document.createElement('input')
    form.appendChild(check1Input)
    check1Input.setAttribute('type', 'checkbox')
    check1Input.setAttribute('id', 'check1')
    check1Input.setAttribute('name', 'check1Input')
    check1Input.setAttribute('value', 'writename')
    
    check1.innerHTML = OrderForm.allOrder[i].check1
    //check2
    let check2 = document.createElement('label');
    check2.setAttribute('for','check2')
    form.appendChild(check2)
    let check2Input = document.createElement('input')
    form.appendChild(check2Input)
    check2Input.setAttribute('type', 'checkbox')
    check2Input.setAttribute('id', 'check2')
    check2Input.setAttribute('name', 'withmilk')
    check2Input.setAttribute('value', 'check2')
    
    check2.innerHTML = OrderForm.allOrder[i].check2
    //check3
    let check3 = document.createElement('label');
    check3.setAttribute('for','check3')
    form.appendChild(check3)
    let check3Input = document.createElement('input')
    form.appendChild(check3Input)
    check3Input.setAttribute('type', 'radio')
    check3Input.setAttribute('id', 'check3')
    check3Input.setAttribute('name', OrderForm.allOrder[i].check3)
    check3Input.setAttribute('value', 'hot')
   
    check3.innerHTML = OrderForm.allOrder[i].check3
     //check4
    let check4 = document.createElement('label');
    check4.setAttribute('for','check4')
    form.appendChild(check4)
    let check4Input = document.createElement('input')
    form.appendChild(check4Input)
    check4Input.setAttribute('type', 'radio')
    check4Input.setAttribute('id', 'check4')
    check4Input.setAttribute('name', OrderForm.allOrder[i].check4)
    check4Input.setAttribute('value', 'cold')
    
    check4.innerHTML = OrderForm.allOrder[i].check4;

    let submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'submit')
    form.appendChild(submit)
    let brk = document.createElement('br');
    form.appendChild(brk)
}
}
orderParameter();
form.addEventListener('submit',handleSubmit);

let i = 0;
function handleSubmit(event){
    customerOrder = [];
    event.preventDefault();
    console.log(event);

let arr= [];
let orderOne = event.target.ord1.checked
let orderTwo = event.target.ord2.checked
let orderThree = event.target.ord3.checked
arr.push(orderOne,orderTwo,orderThree)

let arrName = [];
let nameOne =  event.target.ord1.name
let nameTwo = event.target.ord2.name
let nameThree = event.target.ord3.name
arrName.push(nameOne, nameTwo, nameThree)

let checkArr = [];

for( let i =0; i < OrderForm.allOrder.length; i++ ){
  if(arr[i]){
let name = arrName[i];
customerOrder.push(name);
// console.log(event.target.ext1option1.checked);
// if (event.target.ext1option1.checked){
// let nosuger = event.target.ext1option1.value;
// customerOrder.push(nosuger);}
if (event.target.ext2option2.checked){
let midsuger = event.target.ext2option2.value;
customerOrder.push(midsuger);}

if(event.target.ext3option3.checked){
let moresuger = event.target.ext3option3.value;
customerOrder.push(moresuger);}
if(event.target.check1.checked){
let writename = event.target.check1.value;
console.log(event.target.check1.value);
customerOrder.push(writename);}
if(event.target.check2.checked){
let withmilk = event.target.check2.value;
customerOrder.push(withmilk);}
if(event.target.check3.checked){
let hot = event.target.check3.value;
customerOrder.push(hot);}
if(event.target.check4.checked){
let cold = event.target.check4.value;
customerOrder.push(cold);}
console.log(event.target.ext3option3.checked);
customerOrder.push(val)  }
console.log(customerOrder);
 
  }
  saveData();
}
  


function saveData(){
    let orderData = JSON.stringify(customerOrder)
    console.log(localStorage.setItem('Order', orderData));
}

// var array = JSON.parse(localStorage.getItem('Order') || '[]');
//     array.push(customerOrder);
//     localStorage.setItem('Order', JSON.stringify(array));
