var floatingHeads = [];

function preload() {

}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('container');
	
	var index = 0;
	for (var i = 0; i < width; i += width / 4) {
		for (var j = 0; j < height; j += height / 3) {
			floatingHeads.push(new FloatingHead(i, j, index));
			index++;
		}
	}
}

function draw() {
	for (var i = 0; i < floatingHeads.length; i++) {
		floatingHeads[i].update();
	}
}

var FloatingHead = function(x, y, i) {
	this.img = createImg('../assets/' + i + '.gif', 'tom');
	this.vector = createVector(x, y);
	this.xOff = random(.01, 100);
	this.yOff = random(.01, 100);
	this.img.class('circular');
	this.img.position(this.vector.x + 50, this.vector.y + 50);
	
	
}

FloatingHead.prototype.update = function() {
	this.xOff+=.1;
	this.yOff-=.1;
	this.vector.x += sin(this.xOff);
	this.vector.y += sin(this.yOff);
	this.img.position(this.vector.x + 50, this.vector.y + 50);

}