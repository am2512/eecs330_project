new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
      datasets: [{
        label: "Hours",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [0.5,5,7,6]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Activities and hours spent on them'
      }
    }
});

var p = document.getElementById("Twoslider");
p.addEventListener("input", function() {

new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
        datasets: [{
          label: "Hours",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [3,0.5,6,5]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Activities and hours spent on them'
        }
      }
  });

}, false); 