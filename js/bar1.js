new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
      datasets: [
        {
          label: "Stress levels",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [0.5,5,7,6]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Time spent on each activity'
      }
    }
});

var p = document.getElementById("Twoslider");
p.addEventListener("input", function() {

  new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
        datasets: [
          {
            label: "Stress levels",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [3,0.5,6,5]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Time spent on each activity'
        }
      }
  });














  }, false); 