

var globalLabels = ["Playing Piano", "Meditation", "Homework", "Working Out"]
var globalBackgroundColors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
var globalData = [.5,2,6,5]

new Chart(document.getElementById("bar-chart"), {

    type: 'bar',
    data: {
      labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
      // labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
      datasets: [
        {
          label: "Stress levels",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [10,5,7,6]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Time spent on each activity'
      },

        scales: {
          yAxes: [{
            display: true,
            ticks: {
                // suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
       }

    }
});

var p = document.getElementById("button-0-1");
p.addEventListener("onclick", function() {


localLabels = []
localBackgroundColors = []
localData = []
binaryString = document.getElementById("button-0-1").dataset.binaryString
console.log(binaryString)
var i = 0
for (i; i<binaryString.length ; i++ ) {
  if ('1' == binaryString.charAt(i)) {
    localLabels.push(globalLabels[i])
    localBackgroundColors.push(globalBackgroundColors[i])
    localData.push(globalData[i])
  }
}
console.log(localLabels)
console.log(localBackgroundColors)
console.log(localData)

new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: localLabels,
        datasets: [
          {
            label: "Stress levels",
            backgroundColor: localBackgroundColors,
            data: localData
          }
        ]
      },
      options: {
        // scaleOverride : true,
        legend: { display: false },
        title: {
          display: true,
          text: 'Time spent on each activity'
        },
        scaleBeginAtZero: true,
        // asdf
        scaleStartValue: 0,
    //     yAxes: [{
    //     ticks: {
    //         min: 0,
    //         max: 100,
    //         stepSize: 20
    //     }
    // }]



        scales: {
          yAxes: [{
            display: true,
            ticks: {
                // suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
       }


        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true,
        //       min: 0
        //     }
        //   }]
        // }
    }
  });














  }, false); 
