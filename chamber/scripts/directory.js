var gridSelector = document.querySelector("#direct-grid");
var listSelector = document.querySelector("#direct-list");
var directoryData = document.querySelector("#direct-data");

gridSelector.addEventListener("click", () => {
  if (!gridSelector.classList.contains("active")) {
    gridSelector.classList.add("active");
    listSelector.classList.remove("active");
    directoryData.classList.add("direct-cards");
    directoryData.classList.remove("direct-list");
  }
});

listSelector.addEventListener("click", () => {
  if (!listSelector.classList.contains("active")) {
    listSelector.classList.add("active");
    gridSelector.classList.remove("active");
    directoryData.classList.add("direct-list");
    directoryData.classList.remove("direct-cards");
  }
});

const cards = document.querySelector(".direct-cards");

function displayMembers(members) {
  members.forEach((member) => {
    let section = document.createElement("section");
    let sectionHTML = `       
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <img src="${member.imageURL}" alt="picture of ${member.name}" />
          <p>${member.websiteURL}</p>`;
    section.innerHTML = sectionHTML;
    section.classList.add("card");
    cards.appendChild(section);
  });
}

async function getData() {
  const response = await fetch("data/members.json");
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);
  } else {
    console.error("Not Working!!!");
  }
}

getData();
