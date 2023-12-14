// Load fruit list for building smoothies

const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");
const dropdown3 = document.getElementById("dropdown3");

const selectedFruit1 = document.getElementById("selected-fruit1");
const selectedFruit2 = document.getElementById("selected-fruit2");
const selectedFruit3 = document.getElementById("selected-fruit3");

function populateDropdown(dropdown, data) {
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    dropdown.appendChild(option);
  });
}

// Fetch data from the JSON file
fetch("data/fruit.json")
  .then((response) => response.json())
  .then((fruitData) => {
    populateDropdown(dropdown1, fruitData);
    populateDropdown(dropdown2, fruitData);
    populateDropdown(dropdown3, fruitData);
  })
  .catch((error) => console.error("Error fetching data:", error));

function updateSelectedFruit(selectedElement, dropdown) {
  dropdown.addEventListener("change", function () {
    const selectedOption = this.options[this.selectedIndex];
    const selectedValue = selectedOption ? selectedOption.textContent : "";
    selectedElement.textContent = selectedValue;
  });
}

updateSelectedFruit(selectedFruit1, dropdown1);
updateSelectedFruit(selectedFruit2, dropdown2);
updateSelectedFruit(selectedFruit3, dropdown3);
