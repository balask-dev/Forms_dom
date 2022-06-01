var form = document.createElement("form");
var titleA = label("label", "First Name:");
titleA.setAttribute("for", "firstName");
var row1 = document.createElement("br");

var inpA = document.createElement("input");
inpA.setAttribute("type", "text");
inpA.setAttribute("id", "firstName");
form.append(titleA, row1, inpA);
var titleB = document.createElement("br");

var inpz = label("label", "Last Name:");
inpz.setAttribute("for", "lastName");
var row2 = document.createElement("br");

var inpB = document.createElement("input");
inpB.setAttribute("type", "text");
inpB.setAttribute("id", "lastName");
form.append(titleB,inpz ,row2,inpB);

var row3 = document.createElement("br");
var titleC = label("label", "Parmanant Address:");
titleC.setAttribute("for", "Address1");
var row4 = document.createElement("br");

var titleC2 = document.createElement("input");
titleC.setAttribute("type", "text");
titleC.setAttribute("id", "Address1");
form.append(row3, titleC, row4, titleC2);

var row4 = document.createElement("br");
var inpD = label("label", "Temporary Address:");
inpD.setAttribute("for", "Address2");
var row5 = document.createElement("br");

var titleD = document.createElement("input");
titleD.setAttribute("type", "text");
titleD.setAttribute("id", "Address2");
form.append(row4, inpD, row5, titleD);

var row6 = document.createElement("br");
var inpe = label("label", "PinCode:");
inpe.setAttribute("for", "PinCode");
var row7 = document.createElement("br");

var input5 = document.createElement("input");
input5.setAttribute("type", "Number");
input5.setAttribute("id", "PinCode");
form.append(row6, inpe, row7, input5);

var row8 = document.createElement("br");
var inpF = label("label", "Gender:");
inpF.setAttribute("for", "gender");
var row10 = document.createElement("br");

var inp1 = document.createElement("input");
inp1.setAttribute("type", "radio");
inp1.setAttribute("name", "gender");
inp1.setAttribute("value", "Male");
var label7 = label("label", "Male");
inp1.setAttribute("id", "Male");

var inp2 = document.createElement("input");
inp2.setAttribute("type", "radio");
inp2.setAttribute("name", "gender");
inp2.setAttribute("value", "feMale");
var label8 = label("label", "FeMale");
inp2.setAttribute("id", "feMale");

form.append(row8, inpF, row10, inp1, label7, inp2, label8);

var row11 = document.createElement("br");

var inpG = label(
  "label",
  "Choice of food:<i>( choose 3 out of 5)</i>"
);
inpG.setAttribute("for", "food");
var row12 = document.createElement("br");

var titleF = document.createElement("input");
titleF.setAttribute("type", "checkbox");
titleF.setAttribute("class", "checkbox");
titleF.setAttribute("value", "Continental");
var titleA0 = label("label", "Continental");
var row13 = document.createElement("br");

var titleG = document.createElement("input");
titleG.setAttribute("type", "checkbox");
titleG.setAttribute("class", "checkbox");
titleG.setAttribute("value", "Mexican");
var titleA1 = label("label", "Mexican");
var row14 = document.createElement("br");

var titleH = document.createElement("input");
titleH.setAttribute("type", "checkbox");
titleH.setAttribute("class", "checkbox");
titleH.setAttribute("value", "Chinese");
var titleA2 = label("label", "Chinese");

var row15 = document.createElement("br");
var titleI = document.createElement("input");
titleI.setAttribute("type", "checkbox");
titleI.setAttribute("class", "checkbox");
titleI.setAttribute("value", "Arbian");
var titleA3 = label("label", "Arbian");
var row16 = document.createElement("br");

var titleJ = document.createElement("input");
titleJ.setAttribute("type", "checkbox");
titleJ.setAttribute("class", "checkbox");
titleJ.setAttribute("value", "Malaysian");
var titleA4 = label("label", "Malaysian");
var row17 = document.createElement("br");

form.append(
  row11,
  inpG,
  row12,
  titleF,
  titleA0,
  row13,
  titleG,
  titleA1,
  row14,
  titleH,
  titleA2,
  row15
);
form.append(titleI, titleA3, row16, titleJ, titleA4, row17);

var row18 = document.createElement("br");

var titleA5 = label("label", "State:");
titleA5.setAttribute("for", "state");

var row19 = document.createElement("br");

var titleK = document.createElement("input");
titleK.setAttribute("type", "text");
titleK.setAttribute("id", "state");

form.append(row18, titleA5, row19, titleK);

var title1 = document.createElement("br");

var title2 = label("label", "Country:");
title2.setAttribute("for", "country");

var title12 = document.createElement("br");

var input14 = document.createElement("input");
input14.setAttribute("type", "text");
input14.setAttribute("id", "country");

var title3 = document.createElement("br");
var title4 = document.createElement("br");
var title5 = document.createElement("br");

form.append(title1, title2, title12, input14, title3, title4, title5);

 
var data = document.createElement("div");
data.innerHTML = "<h4>Database</h4>";

var table = document.createElement("table");
table.setAttribute("class", "table");

var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");

var tr = document.createElement("tr");
var th1 = label("th", "First Name");
var th2 = label("th", "Last Name");
var th3 = label("th", "Address");
var th4 = label("th", "Pincode");
var th5 = label("th", "Gender");
var th6 = label("th", "Food");
var th7 = label("th", "State");
var th8 = label("th", "Country");

tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr);
table.append(thead);
document.body.append(form);
document.body.append(data, table);

function show() {
   var r1 = document.getElementById("firstName").value;
   var r2 = document.getElementById("lastName").value;
   var r3 = document.getElementById("Address1").value;
   var r4 = document.getElementById("Address2").value;
   var r5 = document.getElementById("PinCode").value;
   var r6 = document.getElementById("state").value;
   var r7 = document.getElementById("country").value;
 
  let data = [];
  let data1 = document.getElementsByClassName("checkbox");
  for (let i = 0; i < data1.length; i++) {
    data1[i].checked == true && data.push(data1[i].value);
  }
 
  const radioButtonValue = document.querySelector(
    `input[type="radio"][name=gender]:checked`
  ).value;

  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td1 = label("td", r1);
  var td2 = label("td", r2);
  var td3 = label("td", r3 + " " + r4);
  var td4 = label("td", r5);
  var td5 = label("td", radioButtonValue);
  var td6 = label("td", data.join(","));
  var td7 = label("td", r6);
  var td8 = label("td", r7);

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  tbody.append(tr);
  table.append(tbody);
}
function label(value1, value2) {
  var result = document.createElement(value1);
  result.innerHTML = value2;
  return result;
}
