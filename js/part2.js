/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


function setAll(id) {
  console
  element = document.getElementById(id)
  console.log(element)
  console.log(element.innerHTML)
  if (element.innerHTML == 'Select All') {
    elements = document.getElementsByClassName("activitiesButton")
    for (i = 0 ; i < elements.length ; i++) {
      elements[i].style.backgroundColor = "blue"
      elements[i].setAttribute('data-button', '7'); 
    }
  } else {
    elements = document.getElementsByClassName("activitiesButton")
    for (i = 0 ; i < elements.length ; i++) {
      elements[i].style.backgroundColor = "red"  
      elements[i].setAttribute('data-button', '0'); 
    }
  }

}

function setActive(id) {

  element = document.getElementById(id)
  data = element.getAttribute('data-button')

  console.log(data)
  if (data == "0") {
    element.style.backgroundColor = "blue"
    element.setAttribute('data-button', '7');
  } else {
    element.style.backgroundColor = "red"
    console.log('asf')
    element.setAttribute('data-button', '0');
  }

}

function myFunction() {
    console.log('as');
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('as');
}

// console.log('asdf');
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
