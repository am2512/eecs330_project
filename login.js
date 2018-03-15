


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
        console.log('there')
        return 0 
     } else {
        alert(alertString + "Please check your inputs.")
        console.log('therasdfe')
        return 1
     }
         
  
 }
