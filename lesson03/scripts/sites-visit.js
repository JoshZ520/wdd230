// Create a key

const visits_key = "site-visits";

function getSiteVisits() {
  // Check to see if key exist in local
  let currentValue = localStorage.getItem(visits_key);

  let siteVisits = 1;
  //if key don't exist intialize key to 1

  //if key is good add 1 to current value
  if (currentValue != null) {
    siteVisits = parseInt(currentValue) + 1;
  }

  // save new value
  localStorage.setItem(visits_key, `${siteVisits}`);

  return siteVisits;
}

document.getElementById("visitcount").textContent = `${getSiteVisits()}`;
// update html with current value
