/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(event) {
  event.stopPropagation();
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2(event) {
  event.stopPropagation();
  document.getElementById("myDropdown2").classList.toggle("show2");
}

function myFunction2(event) {
  event.stopPropagation();
  document.getElementById("myDropdown3").classList.toggle("show3");
}

function myFunction2(event) {
  event.stopPropagation();
  document.getElementById("myDropdown4").classList.toggle("show4");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  document.getElementById("myDropdown").classList.remove("show");
  document.getElementById("myDropdown2").classList.remove("show2");
    document.getElementById("myDropdown3").classList.remove("show3");
	  document.getElementById("myDropdown4").classList.remove("show4");
}