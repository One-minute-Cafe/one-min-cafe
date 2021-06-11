//create form and appendchild to div
let form = document.createElement("form");
    form.setAttribute("id", "orderForm");
   let div= document.getElementById("form");
    div.appendChild(form);
    // Create an filedset element and legend
    let filedset = document.createElement("fieldset");
    form.appendChild(filedset);
    let legend = document.createElement("legend");
    filedset.appendChild(legend);
    //name of order
    let labelOrder = document.createElement("label");
    form.appendChild(labelOrder);
    labelOrder.innerHTML="Order Name : ";
    let inputName =document.createElement()

    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");
  
     // Create an input element for date of birth
     var DOB = document.createElement("input");
     DOB.setAttribute("type", "text");
     DOB.setAttribute("name", "dob");
     DOB.setAttribute("placeholder", "DOB");
  
     // Create an input element for emailID
     var EID = document.createElement("input");
     EID.setAttribute("type", "text");
     EID.setAttribute("name",