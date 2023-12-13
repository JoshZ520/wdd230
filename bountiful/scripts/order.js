// Load fruit list for building smoothies

// Function to populate a dropdown
function populateDropdown(dropdownId, options) {
  const dropdown = document.getElementById(dropdownId);

  options.forEach((optionText, index) => {
    const option = document.createElement("option");
    option.value = `option${index + 1}`;
    option.textContent = optionText;
    dropdown.appendChild(option);
  });
}

// Function to display selected option
function showSelectedOption(elementId, selectedValue) {
  document.getElementById(elementId).textContent = selectedValue;
}

// Fetch data from JSON file and populate dropdowns
fetch("data/fruit.json")
  .then((response) => response.json())
  .then((data) => {
    populateDropdown("dropdown", data.name);
    populateDropdown("dropdown1", data.name);
    populateDropdown("dropdown2", data.name);
  })
  .catch((error) => console.error("Error fetching data:", error));

// Fetch data from the JSON file
fetch("data/fruit.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = `option${item.id}`;
      option.textContent = item.name;
      dropdown.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
