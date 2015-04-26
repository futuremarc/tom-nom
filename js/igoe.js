var floatingHeads = [];

function preload() {

}
var igoe

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('container');
	
	var index = 0;
	for (var i = 0; i < width; i += width / 8) {
		for (var j = 0; j < height; j += height / 6) {
			floatingHeads.push(new FloatingHead(i, j, index));
			index++;
		}
	}

	// igoe = createImg('../assets/igoe.jpg', 'tom igoe');
	// igoe.parent('center-container');
	// igoe.class('center-image');
	
}


function draw() {
	for (var i = 0; i < floatingHeads.length; i++) {
		floatingHeads[i].update();
	}
}



var FloatingHead = function(x, y, i) {
	this.img = createImg('../assets/' + i + '.gif', 'floating head');
	this.img.size(this.img.elt.offsetWidth/2, this.img.elt.offsetHeight/2);
	this.vector = createVector(x, y);
	this.xOff = random(.01, 100);
	this.yOff = random(.01, 100);
	this.img.class('circular');
	this.img.position(this.vector.x + this.img.elt.offsetWidth/4, this.vector.y + this.img.elt.offsetHeight/4);
	
}

FloatingHead.prototype.update = function() {
	this.xOff+=.1;
	this.yOff-=.1;
	//text("TOM!", this.vector.x + this.img.elt.offsetWidth, this.vector.y + this.img.elt.offsetHeight);
	this.vector.x += sin(this.xOff);
	this.vector.y += sin(this.yOff);
	this.img.position(this.vector.x + this.img.elt.offsetWidth/4, this.vector.y + this.img.elt.offsetHeight/4);

}

