const table = document.querySelector('.tbody');
var firstName = '';
var secondName = '';
var age = '';
var email = '';
var phoneNumber = '';

let dataArray = [];
let selectedRow = null;

function getValues() {
  firstName = document.getElementById('fName').value;
  secondName = document.getElementById('sName').value;
  age = document.getElementById('age').value;
  email = document.getElementById('email').value;
  phoneNumber = document.getElementById('phoneNo').value;

  let htmlData = '';

  if (selectedRow == null) {
    dataArray.push({
      firstName: firstName,
      secondName: secondName,
      age: age,
      email: email,
      phoneNumber: phoneNumber,
    });
    console.log(dataArray);
  } else {
    dataArray[selectedRow].firstName = firstName;
    dataArray[selectedRow].secondName = secondName;
    dataArray[selectedRow].age = age;
    dataArray[selectedRow].email = email;
    dataArray[selectedRow].phoneNumber = phoneNumber;
    table.innerHTML = '';
    selectedRow = null;
  }

  dataArray.forEach((el, index) => {
    htmlData += `<tr class="v-middle" id=${index}><td>${el.firstName}</td>
    <td>${el.secondName}</td><td>${el.age}</td><td>${el.email}</td><td>${el.phoneNumber}</td><td><button class="btn btn-warning" onclick="edit(this)">Edit</button></td></tr>`;
  });
  table.innerHTML = htmlData;
  document.getElementById('fName').value = '';
  document.getElementById('sName').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phoneNo').value = '';
}

function edit(e) {
  selectedRow = e.parentElement.parentElement.id;

  let getDataFromArray = dataArray[selectedRow];

  document.getElementById('fName').value = getDataFromArray.firstName;
  document.getElementById('sName').value = getDataFromArray.secondName;
  document.getElementById('age').value = getDataFromArray.age;
  document.getElementById('email').value = getDataFromArray.email;
  document.getElementById('phoneNo').value = getDataFromArray.phoneNumber;
}
