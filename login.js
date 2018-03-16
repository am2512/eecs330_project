


 function isEmpty(){ 
    console.log('here')
     var alertString = ''
     var uName =  document.getElementById("username").value
     var pWord = document.getElementById("password").value
     
     if (uName.length === 0) {
       alertString = alertString + 'You have not entered a username.\n'
     }
     if (pWord.length === 0) {
        alertString = alertString + 'You have not entered a password.\n'
     }
     if (alertString.length === 0) {
        console.log('theradfe4')
//         window.event.returnValue = false;
        document.location.href = "createaccount.html";
        console.log('there1')
        return 0 
     } else {
        alert(alertString + "Please check your inputs.")
        console.log('therasdfe')
        return 1
     }
         
 }


 function isEmptyCreate(){ 
    console.log('here')
     var alertString = ''
     var uName =  document.getElementById("username").value
     var pWord = document.getElementById("password").value
     var pWord2 = document.getElementById("passwordtwo").value
     
     if (uName.length === 0) {
       alertString = alertString + 'You have not entered a username.\n'
     }
     if (pWord.length === 0) {
        alertString = alertString + 'You have not entered a password.\n'
     }
     if (pWord.length === 0) {
        alertString = alertString + 'You have not reentered your password.\n'
     }
     if (pWord != pWord2) {
        alertString = alertString + 'Passwords do not match.\n'
     }
     if (alertString.length === 0) {
        console.log('there4')
//         window.event.returnValue = false;
        alert("Rerouting. Account succsefully made. Click to Continue.")
        document.location.href = "login.html";
        console.log('there1')
        return 0 
     } else {
        alert(alertString + "Please check your inputs.")
        console.log('therasdfe')
        return 1
     }
         
 }
