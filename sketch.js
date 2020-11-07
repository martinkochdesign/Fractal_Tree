var angle = 0;
var a = 200;
//var depth = 100;
var count = 0;
var ratio = 0.7071;
var dir = 1;

function setup() { 
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);

} 

function draw() { 
  background(0);
    noStroke();
    fill(255, 255, 255);
    textSize(15);
  text("Angle = "+floor(angle)+" º", 0, height-8);
    textSize(10);
  text("M. A. Koch, PhD. 2020", width-115, height-8);
  //nofill();
  strokeWeight(2);
  stroke(255,255,255,128);
  translate(width/2, height);
  generate(a);
  if (dir == 1){ 
  angle+=0.1;
  if (angle > 45){
  dir = -1;}
  }
  if (dir == -1){ 
  angle-=0.1;
  if (angle < 1){
  dir = 1;}
  }
 //noLoop();
}

function generate(len) {
  strokeWeight(map(len, 5, a, 1, 10));
  line(0, 0, 0, -len);
//  count++
//  if (count >= 255){count = 0;}
//  stroke(count,255,255,100);
  translate(0, -len);
    
  if (len > 8) {
  push();
  rotate(angle);
  generate(len * ratio)
  pop();
  push();
  rotate(-angle);
  generate(len * ratio)
  pop();  
  }
}