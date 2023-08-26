let h1Elements = document.getElementsByTagName("h1");

console.log(h1Elements);

let firsth1Element = h1Elements[0];

console.log(firsth1Element);

console.log(firsth1Element.innerText);

firsth1Element.innerText = "Practicing DOM Manipulation!";

// Create a new element node: <p></p>

const pElement = document.createElement("p");

// Set text inside it - <p>innerText property refers to the text inside an element</p>

pElement.innerText = "innerText property refers to the text inside an element";

// Get the object referring to the div element on the page

const divElement = document.getElementById("facts-list");

// Add the newly created <p> element as child of the div element

divElement.appendChild(pElement);

function loadTable() {
  // Create <table> element with styles

  let table = document.createElement("table");

  table.setAttribute("border", "solid");

  table.setAttribute("width", "400px");

  // Create header row and append it to the <table> element

  let thead = document.createElement("thead");

  thead.innerHTML = `

    <tr>

        <th>Id</th>

        <th>Name</th>

    </tr>

  `;

  table.append(thead);

  // Create body element

  let tbody = document.createElement("tbody");

  // Create a table row and append it to the body

  let tRow = document.createElement("tr");

  tRow.innerHTML = `

    <td>1</td>

    <td>Rajesh</td>

  `;

  // Append <tr> element to <tbody>

  tbody.appendChild(tRow);

  // Append <tbody> element to <table>

  table.appendChild(tbody);

  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);
}

loadTable();

function getStyledTable() {
  let table = document.createElement("table");

  table.setAttribute("border", "solid");

  table.setAttribute("width", "400px");

  return table;
}

function loadTableRefactored() {
  // Create <table> element with styles

  let table = getStyledTable();

  // Create table header

  let thead = getTableHeader();

  table.append(thead);

  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);
}
