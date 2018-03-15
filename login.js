


 function isEmpty(){ 
    console.log('here')
     var alertString = ''
     var uName =  document.getElementById("username").value
     var pWord = document.getElementById("password").value
     
     if (uName.length === 0) {
       alertString = alertString + 'You have not entered a username.\n'
     }
     if (pWord.length === 0) {
        alertString = alertString + 'You have not entered password.\n'
     }
     if (alertString.length === 0) {
        console.log('there4')
        window.event.returnValue = false;
        document.location.href = "index.html";
        console.log('there1')
        return 0 
     } else {
        alert(alertString + "Please check your inputs.")
        console.log('therasdfe')
        return 1
     }
         
  
 }
