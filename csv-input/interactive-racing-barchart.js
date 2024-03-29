import Vizzu from 'https://vizzuhq.github.io/vizzu-beta-release/0.2.0/vizzu.js';
import dataReady from './csv-input.js'

let chart = new Vizzu('myVizzu');
let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton");
nextButton.addEventListener("click", nextStep);
previousButton.addEventListener("click", prevStep);
let visibilityButton = document.getElementById("visibility-toggle");
visibilityButton.addEventListener("click", toogleVisibility);
let visibility = true;

document.onkeydown = checkKey;

function toogleVisibility() {
	let slider3 = document.getElementById("year-slider");
	if(visibility) {
		slider3.style.visibility ="hidden";
		visibility = false;
	}
	else {
		slider3.style.visibility ="visible";
		visibility = true;
	}
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up");
		// up arrow
    }
    else if (e.keyCode == '40') {
		console.log("down");
        // down arrow
    }
    else if (e.keyCode == '37') {
       prevStep();
    }
    else if (e.keyCode == '39') {
       nextStep();
    }

}

function nextStep() {
	let slider2 = document.getElementById("year-slider");
	console.log(slider2.value);
	slider2.value = (Number(slider2.value) + 5).toString();
	console.log(slider2.value);
	vizzuFinished = vizzuFinished.then(chart =>
			chart.animate(
				{
					data: { filter: record => record.Year == slider2.value },
					descriptor: { title: slider2.value } 
				},
				{ duration: '500ms'})
		);
}

function prevStep() {
	let slider2 = document.getElementById("year-slider");
	console.log(slider2.value);
	slider2.value = (Number(slider2.value) - 5).toString();
	console.log(slider2.value);
	vizzuFinished = vizzuFinished.then(chart =>
			chart.animate(
				{
					data: { filter: record => record.Year == slider2.value },
					descriptor: { title: slider2.value } 
				},
				{ duration: '500ms'})
		);
}
		

let vizzuFinished = Promise.all([dataReady, chart.initializing])
.then(([data, chart]) => 
{
	let year = 2017;

	let slider = document.getElementById("year-slider");

	slider.oninput = e =>
	{
		year = e.target.value;
		vizzuFinished = vizzuFinished.then(chart =>
			chart.animate(
				{
					data: { filter: record => record.Year == year },
					descriptor: { title: year } 
				},
				{ duration: '500ms'})
		);
	};

	data.filter = record => record.Year == '2017';

	return chart.animate(
	{
		data,
		descriptor: {
			channels: {
				x: {attach: ['Country Name'], range: '0,10,1'},
				y: {attach: ['Count'], range: '0,1500000000,1'},
				color: {attach: ['Country Name']},
			},
			sort: 'experimental',
			reverse: true,
			legend: null
		}
	});
})
