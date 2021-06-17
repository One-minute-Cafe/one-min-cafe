
let driver=document.getElementById('driver')
let parnter=document.getElementById('partner')


let driverForm=document.getElementById('driverForm')
let parnterForm=document.getElementById('partnerForm')
let footer=document.getElementById('socialmediabuttons')



driver.addEventListener('click',function(e){
    e.preventDefault();
    parnter.style.display='none'
    driverForm.style.display='block'
    // footer.style.marginTop='10%'

})



parnter.addEventListener('click',function(event){

    event.preventDefault();
    driver.style.display='none'
    parnterForm.style.display='block'
    // footer.style.marginTop='10%'

})



// add costructer function


function DriverForm(firstName,lastName,phone,time){
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;

    this.time=time;
   
    
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
   
    driverForm.style.display='none'
    parnter.style.display='block'
    let text=document.createElement('p')
    submitedPartner.appendChild(text)
    text.textContent=`${firstName} ${lastName} Thanks to choose our website ,we will contact with you soon `
    driverForm.reset();

    
}

function savingLs(){
// var array = JSON.parse(localStorage.getItem('Driver') || '[]');
// array.push(DriverForm.all);
// localStorage.setItem('Driver', JSON.stringify(array));

let convDriver = JSON.stringify(DriverForm.all)
 localStorage.setItem('Driver',convDriver)




}




// PARTNER FORM 


function PartnerForm(fname,lname,number,location,bestCofe,imageFile){


    this.fname=fname;
    this.lname-lname;
    this.number=number;
    this.location=location;

    this.imageFile=imageFile;


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

// const imageFile=saving


const imageFile=localStorage.getItem('recentImage')
console.log(imageFile);


new PartnerForm(fname,lname,number,location,bestCofe,imageFile)


var array = JSON.parse(localStorage.getItem('Partner') || '[]');
array.push(PartnerForm.all);
localStorage.setItem('Partner', JSON.stringify(array));
// localStorage.removeItem('recentImage')


parnterForm.style.display='none'
driver.style.display='block'
let text=document.createElement('p')
submitedPartner.appendChild(text)

text.textContent=`${fname} ${lname} Thanks to choose our website ,we will contact with you soon `
parnterForm.reset()


}
// submitPartnerForm()


// after submitted parnter

let submitedPartner=document.getElementById('afterSubmited')




// let saving=null;
 document.getElementById('uploadImage').addEventListener("change",function(){
    console.log(this.files.length)
    const reader=new FileReader()
    console.log(reader);
    reader.addEventListener("load",loading)
    function loading(){
        localStorage.setItem('recentImage',reader.result)
       
    //    console.log(saving);
    }
    let arrOfImage=(this.files.length)-1
        console.log(arrOfImage);
    reader.readAsDataURL(this.files[arrOfImage])

//    return reader.result
    console.log(reader.result);
})


// document.addEventListener('DOMContentLoaded',()=>{
//     const recentImage=localStorage.getItem('recentImage')
//     if(recentImage){
//         document.getElementById('img').setAttribute('src',recentImage)
//     }
// })