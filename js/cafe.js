let form = document.createElement("form");
let val;
let customerOrder = [];
let checkbox;
let orderPic;
let quentityInput;
let ext1Input1;
let ext2Input2;
let ext3Input3;
let check1Input;
let check2Input;
let check3Input;
let check4Input;
let orders = [];
let extension = [];

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

function orderParameter(){

  for (let i = 0; i < OrderForm.allOrder.length; i++){
    
    let div = document.getElementById(OrderForm.allOrder[i].id);
    div.appendChild(form);
    checkbox =document.createElement("input");
    
    checkbox.setAttribute('name', OrderForm.allOrder[i].id)
    checkbox.setAttribute('value', 'orderchecked')
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("id",OrderForm.allOrder[i].id);
    form.appendChild(checkbox);
    orderPic = document.createElement("label");
    orderPic.setAttribute("for",OrderForm.allOrder[i].id);
    form.appendChild(orderPic);
    let pic1 =document.createElement("img");
    pic1.setAttribute("src",OrderForm.allOrder[i].path);
    orderPic.appendChild(pic1);
    let name = document.createElement("label");
    name.innerHTML = OrderForm.allOrder[i].name;

    form.appendChild(name);
    let quentity = document.createElement('label')
    quentity.innerHTML = ' Quentity'
    quentity.setAttribute('for', 'quentity')
    form.appendChild(quentity)
    quentityInput = document.createElement('input')
    quentityInput.setAttribute('type', 'number')
    quentityInput.setAttribute('id', 'quentity')
    quentityInput.setAttribute('name', OrderForm.allOrder[i].name)
    quentityInput.setAttribute('value','number')
    form.appendChild(quentityInput)
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
    form.appendChild(ext1option1);
    ext1option1.setAttribute("for",OrderForm.allOrder[i].ext1option1)
    ext1Input1 = document.createElement("input");
    ext1Input1.setAttribute("type","radio");
    ext1Input1.setAttribute("id",OrderForm.allOrder[i].ext1option1);
    ext1Input1.setAttribute("name",OrderForm.allOrder[i].name);
    ext1Input1.setAttribute("value","noSuger");
    form.appendChild(ext1Input1);
    //option 2
    let ext2option2 = document.createElement("label");
    ext2option2.innerHTML = OrderForm.allOrder[i].ext1option2;
    form.appendChild(ext2option2)
    ext2option2.setAttribute("for","ext2option2")
    ext2Input2 = document.createElement("input");
    ext2Input2.setAttribute("type","radio");
    ext2Input2.setAttribute("id","ext2option2");
    ext2Input2.setAttribute("name",OrderForm.allOrder[i].name);
    ext2Input2.setAttribute("value","midSuger");
    form.appendChild(ext2Input2);
    //option 3
    let ext3option3 = document.createElement("label");
    ext3option3.innerHTML = OrderForm.allOrder[i].ext1option3;
    form.appendChild(ext3option3)
    ext3option3.setAttribute("for","ext3option3")
    ext3Input3 = document.createElement("input");
    ext3Input3.setAttribute("type","radio");
    ext3Input3.setAttribute("id","ext3option3");
    ext3Input3.setAttribute("name",OrderForm.allOrder[i].name);
    ext3Input3.setAttribute("value","moreSuger");
    form.appendChild(ext3Input3);
    // check1
    let check1 = document.createElement('label');
    check1.setAttribute('for','check1')
    form.appendChild(check1)
    check1Input = document.createElement('input')
    form.appendChild(check1Input)
    check1Input.setAttribute('type', 'checkbox')
    check1Input.setAttribute('id', 'check1')
    check1Input.setAttribute('name', OrderForm.allOrder[i].name)
    check1Input.setAttribute('value', OrderForm.allOrder[i].check1)
    
    check1.innerHTML = OrderForm.allOrder[i].check1
    //check2
    let check2 = document.createElement('label');
    check2.setAttribute('for','check2')
    form.appendChild(check2)
    check2Input = document.createElement('input')
    form.appendChild(check2Input)
    check2Input.setAttribute('type', 'checkbox')
    check2Input.setAttribute('id', 'check2')
    check2Input.setAttribute('name', OrderForm.allOrder[i].name)
    check2Input.setAttribute('value', OrderForm.allOrder[i].check2)
    
    check2.innerHTML = OrderForm.allOrder[i].check2
    //check3
    let check3 = document.createElement('label');
    check3.setAttribute('for','check3')
    form.appendChild(check3)
    check3Input = document.createElement('input')
    form.appendChild(check3Input)
    check3Input.setAttribute('type', 'radio')
    check3Input.setAttribute('id', 'check3')
    check3Input.setAttribute('name', OrderForm.allOrder[i].name)
    check3Input.setAttribute('value', OrderForm.allOrder[i].check3)
   
    check3.innerHTML = OrderForm.allOrder[i].check3
     //check4
    let check4 = document.createElement('label');
    check4.setAttribute('for','check4')
    form.appendChild(check4)
   check4Input = document.createElement('input')
    form.appendChild(check4Input)
    check4Input.setAttribute('type', 'radio')
    check4Input.setAttribute('id', 'check4')
    check4Input.setAttribute('name', OrderForm.allOrder[i].name)
    check4Input.setAttribute('value', OrderForm.allOrder[i].check4)
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
let arr = ['ord1','ord2', 'odr3'];
form.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    customerOrder = [];
    event.preventDefault();
    let name2 = event.target.name.value
    console.log(name2);
  let checkboxes1 = document.querySelectorAll(`input[name = '${OrderForm.allOrder[0].name}']`);
  let checkboxes2 = document.querySelectorAll(`input[name = '${OrderForm.allOrder[1].name}']`);
  let checkboxes3 = document.querySelectorAll(`input[name = '${OrderForm.allOrder[2].name}']`);
  console.log(checkboxes1[0]);
  for (let i = 0; i < 3; i++) { 
 let pics = document.querySelectorAll(`input[name = '${OrderForm.allOrder[i].id}']`);
    console.log(pics[0].checked);
    if (pics[0].checked){
        for ( let j = 0; j < checkboxes1.length; j++){
                    if (checkboxes1[j].checked){
                        customerOrder.push(checkboxes1[j].value)
                        console.log(customerOrder);
                    }
                  }
    }
}

   
  
   


  saveData();
}
  


function saveData(){
    let orderData = JSON.stringify(customerOrder)
    // console.log(localStorage.setItem('Order', orderData));
}

// var array = JSON.parse(localStorage.getItem('Order') || '[]');
//     array.push(customerOrder);
//     localStorage.setItem('Order', JSON.stringify(array));
// 