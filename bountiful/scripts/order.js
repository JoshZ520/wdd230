// Load fruit list for building smoothies

const dropdown = document.getElementById("dropdown");
const dropdown2 = document.getElementById("dropdown1");

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

const selectedFruit1 = document.getElementById("selected-fruit");

dropdown.addEventListener("change", function () {
  const selectedValue = this.options[this.selectedIndex].textContent;
  if (selectedValue !== "") {
    selectedFruit1.textContent = `${selectedValue}`;
  } else {
    selectedFruit1.textContent = "";
  }
});
