const darkmode = document.querySelector("#dark-mode");
const bodyelt = document.querySelector("body");

darkmode.addEventListener("click", () => {
  if (darkmode.textContent == "Dark Mode") {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--head-background", "#1b264f");
    document.documentElement.style.setProperty("--links", "#f5f3f5");
    document.documentElement.style.setProperty("--hover-color", "#2A3C7A");
    document.documentElement.style.setProperty(
      "--second-background",
      "#373f51"
    );

    bodyelt.style.backgroundColor = "black";
    darkmode.textContent = "Light Mode";
  } else {
    document.documentElement.style.setProperty("--background-color", "#74c7bd");
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--head-background", "#3057b0");
    document.documentElement.style.setProperty("--links", "#302b27");
    document.documentElement.style.setProperty("--hover-color", "royalblue");
    document.documentElement.style.setProperty("--second-background", "white");
    bodyelt.style.backgroundColor = "#74c7bd";
    darkmode.textContent = "Dark Mode";
  }
});
