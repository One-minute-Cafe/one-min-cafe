let driver=document.getElementById('dr')
let parnter=document.getElementById('pa')
let driverForm=document.getElementById('driverForm')

let parnterForm=document.getElementById('partnerForm')



driver.addEventListener('click',function(e){
    e.preventDefault();
    parnter.style.display='none'
    driverForm.style.display='block'
})


parnter.addEventListener('click',function(e){
    e.preventDefault();
    driver.style.display='none'
    parnterForm.style.display='block'
})



// add costructer function


function DriverForm(firstName,lastName,phone,time){
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.time=time
    
    DriverForm.all.push(this)
    
}

DriverForm.all=[]

driverForm.addEventListener('submit',submitFormDriver)


function submitFormDriver(event){
    
    event.preventDefault();
    
    const firstName=event.target.firstName.value;
    const lastName=event.target.lastName.value
    const phone=event.target.phone.value
    const time=event.target.time.value
    
    console.log(time,firstName,lastName,phone)
    new DriverForm(firstName,lastName,phone,time);
    
    savingLs();
   
    
    driverForm.reset();

    
}


function savingLs(){

    localStorage.setItem('drivers',JSON.stringify(DriverForm.all))
}




// PARTNER FORM 

function PartnerForm(fname,lname,number,location,bestCofe){
    this.fname=fname;
    this.lname-lname;
    this.number=number;
    this.location=location;
    this.bestCofe=bestCofe;

    PartnerForm.all.push(this)
    

}

PartnerForm.all=[]

parnterForm.addEventListener('submit',submitPartnerForm)
function submitPartnerForm(event){

event.preventDefault();

const fname=event.target.fname.value;
const lname=event.target.lname.value;
const number=event.target.number.value;
const location=event.target.location.value;
const bestCofe=event.target.bestCofe.value;

// console.log(fname,lname,number,location,bestCofe)

new PartnerForm(fname,lname,number,location,bestCofe)

localStorage.setItem('partners',JSON.stringify(PartnerForm.all))

parnterForm.reset()


}
// submitPartnerForm()


// after submitted parnter

let submitedPartner=document.getElementById('afterSubmited')

parnterForm.addEventListener('submit',after)

function after(){
parnterForm.style.display='none'
driver.style.display='block'
let text=document.createElement('p')
submitedDriver.appendChild(text)
text.textContent=`${PartnerForm.all.fname} ${PartnerForm.all.lname} Thanks to choose our website ,we will contact with you soon `

}
// after submitted driver

driverForm.addEventListener('submit',function(){
    driverForm.style.display='none'
    parnter.style.display='block'
    let text=document.createElement('p')
    submitedPartner.appendChild(text)
    text.textContent=`${DriverForm.all.firstName} ${DriverForm.all.lastName} Thanks to choose our website ,we will contact with you soon `


})
