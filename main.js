const table = document.querySelector(".tbody");
const subBtn=document.querySelector(".btnSubmit")
var firstName = "";
var secondName = "";
var age = "";
var email = "";
var phoneNumber = "";

let dataArray = [];
let selectedRow=null

const getForm = document.getElementById("form");


const getInputs = getForm.querySelectorAll("input");
const fieldNameArray = Array.from(getInputs);



// if (arrowFunResult == true) {
//     // dataArray.push({
//     //     firstName: firstName,
//     //     secondName: secondName,
//     //     age: age,
//     //     email: email,
//     //     phoneNumber: phoneNumber
//     //  })

//      if(selectedRow==null){
//         dataArray.push({
//             firstName: firstName,
//             secondName: secondName,
//             age: age,
//             email: email,
//             phoneNumber: phoneNumber
//          })
//          console.log(dataArray);
//     }
//     else {
//         dataArray[selectedRow].firstName = firstName;
//         dataArray[selectedRow].secondName = secondName;
//         dataArray[selectedRow].age = age;
//         dataArray[selectedRow].email = email;
//         dataArray[selectedRow].phoneNumber  = phoneNumber;
//         table.innerHTML = "";
//         selectedRow = null;
//     }


// }

firstName = document.getElementById("fName");
secondName = document.getElementById("sName");
age = document.getElementById("age");
email = document.getElementById("email");
phoneNumber = document.getElementById("phoneNo");

let userInputFname = firstName.value;
let userInputSname = secondName.value;
let userInputAge = age.value;
let userInputEmail = email.value;
let userInputPhonenumber = phoneNumber.value;

const alphaValidation = /^[a-zA-z]{6,20}$/;
const emailValidation = /^[\w]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
const numberValidation = /^[0-9]{11,15}$/;
const ageValidation = /^[0-9]{2}$/;

function validator(validationType, fieldName) {
    let userInputFname = fieldName.value; 
    const validationResult = validationType.test(userInputFname);
    
    console.log(validationResult);
    if (validationResult == true) {
        console.log("validation true!");
        fieldName.classList.remove("is-invalid");
        fieldName.classList.add("is-valid");
    }
    else {
        console.log("validation false!");
        fieldName.classList.add("is-invalid");
        fieldName.classList.remove("is-valid");
    }
}

firstName.oninput = function() {
    // let userInputFname = firstName.value;

    validator(alphaValidation, firstName);
    
}

secondName.oninput = function() {
    // let userInputSname = secondName.value;

    validator(alphaValidation, secondName);
    
}


age.oninput = function() {
    // let userInputAge = age.value;

    validator(ageValidation, age);
    
}

email.oninput = function() {
    // let userInputEmail = email.value;

    validator(emailValidation, email);
    
}

phoneNumber.oninput = function() {
    // let userInputPhonenumber = phoneNumber.value;

    validator(numberValidation, phoneNumber);
    
}
let arrowResult
const arrowFunc=()=>{
    arrowResult= fieldNameArray.every((el) => {
        return el.classList.contains("is-valid");
    })
}





subBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    debugger
   arrowFunc()
console.log(arrowResult)
    if (arrowResult ) {
        // dataArray.push({
        //     firstName: firstName,
        //     secondName: secondName,
        //     age: age,
        //     email: email,
        //     phoneNumber: phoneNumber
        //  })
    
         if(selectedRow==null){
            
            dataArray.push({
                firstName: firstName.value,
                secondName: secondName.value,
                age: age.value,
                email: email.value,
                phoneNumber: phoneNumber.value
             })
             console.log(dataArray);
        }
        else {
            dataArray[selectedRow].firstName =  firstName.value;
            dataArray[selectedRow].secondName = secondName.value
            dataArray[selectedRow].age = age.value
            dataArray[selectedRow].email =  email.value
            dataArray[selectedRow].phoneNumber  = phoneNumber.value
            table.innerHTML = "";
            selectedRow = null;
        }
    
    
    }

    else {
        console.log("not working");
    }


    let htmlData = "";

// if(selectedRow==null){
//     dataArray.push({
//         firstName: firstName,
//         secondName: secondName,
//         age: age,
//         email: email,
//         phoneNumber: phoneNumber
//      })
//      console.log(dataArray);
// }
// else {
//     dataArray[selectedRow].firstName = firstName;
//     dataArray[selectedRow].secondName = secondName;
//     dataArray[selectedRow].age = age;
//     dataArray[selectedRow].email = email;
//     dataArray[selectedRow].phoneNumber  = phoneNumber;
//     table.innerHTML = "";
//     selectedRow = null;
// }
   
dataArray.forEach((el,index)=>{
    htmlData += `<tr class="v-middle" id=${index}><td>${el.firstName}</td>
    <td>${el.secondName}</td><td>${el.age}</td><td>${el.email}</td><td>${el.phoneNumber}</td><td><button class="btn btn-warning" onclick="edit(this)">Edit</button></td></tr>`;
})
table.innerHTML = htmlData;
document.getElementById("fName").value = "";
document.getElementById("sName").value = "";
document.getElementById("age").value = "";
document.getElementById("email").value = "";
document.getElementById("phoneNo").value = "";

fieldNameArray.forEach(element => {
    element.classList.remove("is-valid");
});



})

function getValues() {
   
}

function edit(e) {
    selectedRow = e.parentElement.parentElement.id;

    let getDataFromArray = dataArray[selectedRow];

    document.getElementById("fName").value = getDataFromArray.firstName;
    document.getElementById("sName").value = getDataFromArray.secondName;
    document.getElementById("age").value = getDataFromArray.age;
    document.getElementById("email").value = getDataFromArray.email;
    document.getElementById("phoneNo").value = getDataFromArray.phoneNumber;

   // arrowResult();
}