
myLineChart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [{ 
        data: [1,1,1,1,2,6,7,8,7,1],
        label: "Playing Piano",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [3,3,4,8,9,2,1,4,6,1],
        label: "Meditation",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [1,3,3,9,9,7,6,1,1,1],
        label: "Homework",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [4,5,2,7,8,1,1,1,1,1],
        label: "Working Out",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Stress levels for each activity'
    }
  }
});

var p = document.getElementById("Twoslider");
p.addEventListener("input", function() {

  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1950,1999,2050],
      datasets: [{ 
       data: [1,1,0,1,6,6,7,8,7,1],
       label: "Playing Piano",
       borderColor: "#3e95cd",
       fill: false
     }, { 
       data: [3,3,2,2,2,2,2,4,6,1],
       label: "Meditation",
       borderColor: "#8e5ea2",
       fill: false
     }, { 
       data: [1,3,3,1,1,2,3,1,1,1],
       label: "Homework",
       borderColor: "#3cba9f",
       fill: false
     }, { 
       data: [1,2,2,7,6,1,1,1,1,1],
       label: "Working Out",
       borderColor: "#e8c3b9",
       fill: false
     }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Stress levels for each activity'
      }
    }
  });










  }, false); 
