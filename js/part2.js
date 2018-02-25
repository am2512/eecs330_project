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
      elements[i].style.backgroundColor = "#526b93"
      elements[i].setAttribute('data-button', '7'); 
    }
  } else {
    elements = document.getElementsByClassName("activitiesButton")
    for (i = 0 ; i < elements.length ; i++) {
      elements[i].style.backgroundColor = "#4b83dd"  
      elements[i].setAttribute('data-button', '0'); 
    }
  }

}

function setActive(id) {

  element = document.getElementById(id)
  data = element.getAttribute('data-button')

  console.log(data)
  if (data == "0") {
    element.style.backgroundColor = "#526b93"
    element.setAttribute('data-button', '7');
  } else {
    element.style.backgroundColor = "#4b83dd"
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


//pie chart code
var width = 300;
var height = 300;
var center = [width / 2, height / 2];
var innerRadius = 0;
var outerRadius = 100;

var data = [
  [0, 35], 
  [0, 19], 
  [0, 35], 
  [0, 7], 
  [0, 45],
  [0, 27], 
  [1, 0] // need last one to have a start value > 0, end value == 0
];
var color = d3.scale.category20();

var pie = d3.layout.pie()
  .value(function (d) { return d[0]; })
  .sort(null);

var svg = d3.select('#piechart')
  .attr('width', width)
  .attr('height', height)
  .append('g')
    .attr('transform', 'translate(' + center[0] + ', ' + center[1] + ')');

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

var hoverArc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius + 10);

var path = svg.datum(data).selectAll('path')
    .data(pie)
  .enter().append('path')
    .attr('fill', function (d, i) { return color(i); })
    .attr('d', arc)
// set wedge opacity to 0 if it has mass on load (only the last wedge has mass to account for transition in
.style('opacity', function (d) { return d.data[0] === 0 ? 1 : 0; })
    .each(function (d) { this._current = d; })
.on('mouseover', function (d, i) {
  
  d3.select(this)
    .transition()
      .duration(500)
      .ease('elastic')
  .attr('transform', function (d) {
    var dist = 10;
    d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
    var x = Math.sin(d.midAngle) * dist;
    var y = -Math.cos(d.midAngle) * dist;
    return 'translate(' + x + ',' + y + ')';
  });
}).on('mouseout', function (d, i) {
  d3.select(this)
    .transition()
      .duration(500)
      .ease('bounce')
      .attr('transform', 'translate(0,0)')
});




// new values for transitions
pie.value(function (d) { return d[1]; });

path = path.data(pie);
path.transition().duration(1000).attrTween('d', arcTween);

function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}


