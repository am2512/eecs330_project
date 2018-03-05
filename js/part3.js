// var textBoxDisplays= ["You've had high level of stress during this time period. We noticed you coded "
// 					+ "and did not dedicate time to socializing. We recommend scheduling a lunch break with a few close friends",+
// 					"You played piano for 2.35 hours during this time period and were relaxed. Try reaching out "+
// 					"to music groups in your area to play more!" ,"You were very relaxed. We noticed you worked out and meditated. Good job! Keep it up!"
// 					,"You were very stressed while playing golf. Consider other alternatives for this activity. Maybe play piano, meditate or work out.",
// 					"We noticed that you were more stressed than usual this week. We have found from other uses that videogames, yoga, and family time have reduced stress. Maybe try one one of these activities next week!"];


var textBoxDisplays= ["text1","text2","text3","text4","text5","text6","text7"]
var textBoxDisplays= 
	[ "On February 21st, you logged 3 hours of homework, and you seemed moderately stressed out. You didn’t seem to have much time for fun stuff - maybe you could try to fit in an hour at the gym to stress-bust?",
	"Things seem to be getting very hectic for you - you logged 3 hours of homework, and you were feeling frustrated and exhausted. Try to take some time off for a bit of meditation - everyone needs some time off from work!",
	"On February 23rd, you were really stressed out - you were exhausted after 4 hours of homework. Quick tip: Try to take a break for some piano practice - trust us, you’ll feel better!",
	"You spent 2 hours working out, and you were exhausted, but your stress levels have dropped significantly. You were feeling good about your day.",
	" You logged 1 hour of meditation, 1 hour of golfing, and 1 hour of homework. You also told us that you were feeling calm. You were the most relaxed that you’ve been all week. Great balance between work and play! ",
	"On February 26th, you spent 1 hour golfing, and 2.5 hours on homework. You seemed a little frustrated. A bit of meditation may be a good idea? ",
	"February 27th was a stressful day for you. You spent 3 hours doing homework and you seemed a little angry too. How about some piano practice for an hour? We definitely recommend it!"
	]

var days = ["February 21st","February 22nd","February 23rd", "February 24th","February 25th","February 26th","February 27th"]

document.getElementById("Threeslider").value = 3
document.getElementById("part3DisplayBox").innerHTML = textBoxDisplays[3]
document.getElementById("dayOnBottom").innerHTML = days[3]

function changeText() {
	slider = document.getElementById("Threeslider")
	// disiaply = document.getElementById("part3DisaplyBox")
	value = slider.value
	console.log(value)
	console.log(typeof value)
	document.getElementById("part3DisplayBox").innerHTML = textBoxDisplays[value]
	document.getElementById('graphImage').src= "part3images/graph" + value + ".jpg"
	document.getElementById("dayOnBottom").innerHTML = days[value]
	// if (value < 1 ){
	// 	document.getElementById("part3DisplayBox").innerHTML = textBoxDisplays[0]
	// } else if (value < 2 ){
	// 	document.getElementById("part3DisplayBox").innerHTML  = textBoxDisplays[1]
	// } else if (value < 4) {
	// 	document.getElementById("part3DisplayBox").innerHTML  = textBoxDisplays[2]
	// } else if (value < 6 ){
	// 	document.getElementById("part3DisplayBox").innerHTML  = textBoxDisplays[3]
	// } else if (value < 8){
	// 	document.getElementById("part3DisplayBox").innerHTML  = textBoxDisplays[4]
	// } else if (value < 9){
	// 	document.getElementById("part3DisplayBox").innerHTML  = textBoxDisplays[5]
	// } else {
	// 	document.getElementById("part3DisplayBox").innerHTML  = textBoxDisplays[6]
	// }
	return 0
} 

