/* IMPORTANT NOTE: This code is not my own, it's borrowed from a w3schools tutorial. This code is not
part of my actual project, just part of the framework I needed to add to the site to apply my new script 
The tutorial: https://www.w3schools.com/howto/howto_js_dropdown.asp */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("settings").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }