let unsorted = []
let box_width = 100

function setup() {
	createCanvas(windowWidth, windowHeight / 1.5);
	background(51);

	for (let i = 0; i < windowWidth / box_width; i++) {
		//unsorted.append(random(10));
		console.log(random(1, 10));
	}
	console.log(unsorted);
}

function draw() {

}
