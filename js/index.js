/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


  // Set the configuration for your app
  // TODO: Replace with your project's config object


  
  // var config = {
  //   apiKey: "AIzaSyDF175I2udAhYekXlJVsGaR1cCZSaNuWpg",
  //   authDomain: "dillo2018-727f2.firebaseapp.com",
  //   databaseURL: "https://dillo2018-727f2.firebaseio.com",
  //   projectId: "dillo2018-727f2",
  //   storageBucket: "dillo2018-727f2.appspot.com",
  //   messagingSenderId: "852271685973"
  // };
  // firebase.initializeApp(config);

  // var database = firebase.database();

  // firebase.database.ref().once("value").then(function(snapshot) {
  //   console.log(snapshot.val())
  // })










// firebas is above
function myFunction() {
    console.log('as');
    document.getElementById("myDropdown").classList.toggle("show");
    var doc =  document.getElementById("question1Input").dataset.binary;
    if (doc === "0"){
      document.getElementById("question1Input").dataset.binary = "1"
    }
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
    document.getElementById("myRange").style.display = "inline-block"
    console.log('block')
    document.getElementById("question1Input").dataset.binary = "0";
//     if (doc === "1"){
      
//       document.getElementById("question1Input").dataset.binary = "1"
//     }
//     var x = document.getElementById("myRange");
//     if (x.style.display === "none") {
//         console.log(x.style.display)
//         x.style.display = "block";
//     } else {
//         console.log(x.style.display)
//         x.style.display = "none";
//     }
  } else {
    console.log('none')
    document.getElementById("myRange").style.display = "none"
    document.getElementById("question1Input").dataset.binary = "1";
  }
}

function setInput(id) {
  document.getElementById("question1Input").value = id
}

function submitTask() {
  var returnString = ''

  var reHHMM = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")
  hhmm1 = document.getElementById("duration-val1").value
  hhmm2 = document.getElementById("duration-val2").value
  if (reHHMM.test(hhmm1) != true ) {
    returnString = returnString + 'Poorly formatted duration input. Cannot log task. Change the input to succsefully log.\n'
  }
  if (reHHMM.test(hhmm2) != true ) {
    returnString = returnString + 'Poorly formatted start time input. Cannot log task. Change the input to succsefully log.\n'
  }

  if (returnString == '') {
    returnString = 'Task succsefully logged. Feel free to add another.'
    resetInputs();
  }

  alert(returnString);
}

function resetInputs() {
  document.getElementById("question1Input").value = "Select an existing category or type in a new one"
  document.getElementById("myRange").value = 5
  document.getElementById("duration-val1").value = "00:00"
  document.getElementById("duration-val2").value = "00:00"
  // This can probably be improved by using the .activitiesButton.color attribute
  // set in style.css, rather than the magic value #ccffff, but I don't know
  // how to do that yet
  document.getElementById("ebutton ebutton1").className = "ebutton"
  document.getElementById("ebutton ebutton2").className = "ebutton"
  document.getElementById("ebutton ebutton3").className = "ebutton"
  document.getElementById("ebutton ebutton4").className = "ebutton"
  document.getElementById("ebutton ebutton5").className = "ebutton"
  console.log('asdfa');
}




function changeID(elm){
    var NAME = elm;
    var currentClass = NAME.className;
    if (currentClass == "ebutton") { 
        NAME.className = "ebuttonnew";   
    } else {
        NAME.className = "ebutton";  
    }
}



  

