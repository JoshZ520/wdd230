// confrimation page
document.querySelector(".today").textContent = today.toLocaleDateString();

let url = new URL(window.location);
let params = url.searchParams;

document.querySelector("#order-name").textContent = params.get("name");
document.querySelector("#email").textContent = params.get("email");
document.querySelector("#phone").textContent = params.get("phone");

document.querySelector("#fruit1").textContent = params.get("fruit1");
document.querySelector("#fruit2").textContent = params.get("fruit2");
document.querySelector("#fruit3").textContent = params.get("fruit3");

document.querySelector("#specialInstruction").textContent =
  params.get("instructions");
