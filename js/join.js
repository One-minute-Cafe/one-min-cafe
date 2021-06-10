let driver=document.getElementById('dr')
let parnter=document.getElementById('pa')
let driverForm=document.getElementById('driverForm')
let parnterForm=document.getElementById('partnerForm')



driver.addEventListener('click',function(e){
    event.preventDefault();
    parnter.style.display='none'
    driverForm.style.display='block'
})


parnter.addEventListener('click',function(){
    event.preventDefault();
    driver.style.display='none'
    parnterForm.style.display='block'
})


