var canvas;
var divP;


const screenW  = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;
const screenH = window.innerHeight|| document.documentElement.clientHeight||
document.body.clientHeight;

function setup() {
  canvas = createCanvas(screenW, screenH,WEBGL);
  canvas.position(0,400);
  canvas.style('z-index', '-1');
  frameRate(60);

  //canvas.parent("p5hero");
  //divP = document.getElementsByClassName('p5hero');
  //divP.appendChild(canvas);
  pixelDensity(1);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(0,0);
  //lights.
  lights();
  ambientLight(75);
  noStroke();
  fill(color(234, 51, 35));
  push();
    rotateX(60.02);
    rotateY(frameCount * 0.21);
    box(200);
  pop();
  push();
    //fill(color(24, 90, 188));
    shininess(0);
    ambientMaterial(color(24, 90, 188));
    translate(400,-50);
    rotateX(-100);
    rotateX(frameCount * -0.21);
    rotateY(60.02);
    torus(100, 70,  96, 64);
  pop();
  push();
    //fill(color(24, 90, 188));
    shininess(0);
    ambientMaterial(color(244, 187, 37));
    translate(-400,-50);
    rotateX(-100);
    rotateX(frameCount * -0.21);
    rotateY(frameCount * -0.21);
    cylinder(100, 200,  96, 64);
  pop();
}
