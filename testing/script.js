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
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    populateDropdown("dropdown1", data.dropdown1);
    populateDropdown("dropdown2", data.dropdown2);
    populateDropdown("dropdown3", data.dropdown3);
  })
  .catch((error) => console.error("Error fetching data:", error));
