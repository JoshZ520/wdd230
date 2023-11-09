// "name": "Joseph",
// "lastname": "Smith",
// "birthdate": "23 December 1805",
// "death": "27 June 1844",
// "length": 14,
// "order": 1,
// "birthplace": "Vermont",
// "numofchildren": 11,
// "imageurl":

const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

function displayProphets(prophets) {
  prophets.forEach((prophet) => {
    let section = document.createElement("section");
    let sectionHTML = `       
        <h3>${prophet.name} ${prophet.lastname}</h3>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>Birth Place: ${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="picture of ${prophet.name} ${prophet.lastname}" />`;
    section.innerHTML = sectionHTML;
    section.classList.add("card");
    cards.appendChild(section);
  });
}

async function getProphetData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayProphets(data.prophets);
  } else {
    console.error("Not Working!!!");
  }
}

getProphetData();
