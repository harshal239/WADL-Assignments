let obj = new XMLHttpRequest();
let users = [];
obj.open("GET", "http://localhost:3006/Users");
obj.send();
obj.onload = () => {
  users = JSON.parse(obj.responseText);

  var table = document.getElementById("myTable");

  for (let i = 0; i < users.length; i++) {
    var row = table.insertRow(1);
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();

    cell1.innerHTML = users[i].name;
    cell2.innerHTML = users[i].email;
    cell3.innerHTML = users[i].phone;
  }
};

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}
