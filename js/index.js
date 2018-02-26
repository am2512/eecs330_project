/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    console.log('as');
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('as');
}

console.log('asdf');
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

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

function setInput(id) {
  document.getElementById("question1Input").value = id
}

function submitTask() {
  alert("Task Successfully Logged");
  resetInputs();
}

function resetInputs() {
  document.getElementById("question1Input").value = ""
  document.getElementById("myRange").value = 5
  document.getElementById("duration-val").value = "00:00"
  // This can probably be improved by using the .activitiesButton.color attribute
  // set in style.css, rather than the magic value #ccffff, but I don't know
  // how to do that yet
  document.getElementById("button1").style.backgroundColor = "blue"
  document.getElementById("button2").style.backgroundColor = "blue"
  document.getElementById("button3").style.backgroundColor = "blue"
  document.getElementById("button4").style.backgroundColor = "blue"
  document.getElementById("button5").style.backgroundColor = "blue"
}
