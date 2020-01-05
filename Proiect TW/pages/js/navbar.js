  function myFunction() {
  var x = document.getElementById("myDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
    x.style.opacity = "0";
  } else {
    x.style.display = "block";
    x.style.opacity = "1";
  }
}

