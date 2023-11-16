let meetdate = new Date();
let dayofweek = meetdate.getDay();

if (dayofweek == 1 || dayofweek == 2 || dayofweek == 4) {
  let meetgreet = document.getElementById("meetgreet");
  meetgreet.style.display = "block";
}
