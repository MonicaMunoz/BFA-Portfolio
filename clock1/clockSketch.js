//CLOCK SKETCH


function setup() {

createCanvas(600,600);
angleMode(DEGREES);
radians(DEGREES)


}

function draw() {
  clear();
  background(255,165,0);
  translate(300,300);
  rotate(-90);

  let deg = 45.0;
  let rad = radians(deg);
  print(deg + ' degrees is ' + rad + ' radians');
  // Prints: 45 degrees is 0.7853981633974483 radians

  let hr = hour();
  let mn = minute();
  let sc= second();
  let session = "AM";

  if (hr > 0) {
    hr = hr-12;
    session = "PM";
    background(46, 75, 193);
  }


  //secondhhand
  strokeWeight(9);
  stroke(random(55,100,150));
  noFill();
  let secAngle = map(sc, 0,60,0,360);
  arc(0,0,300,300,0,secAngle);



  //MinuteHand
  stroke(50,100,255);
  let minAngle = map(mn,0,60, 0,360);
  // arc(200,200,280,280,0,minAngle);


  //Hourhand
  stroke(150,55,70);
  let hourAngle = map(hr % 12,0,12, 0, 360);
  //arc(200,200,260,260,0,hourAngle);

  //pushpop is used at the end to affect only that portion

  //TRIANGLE
  push();
  rotate(secAngle);
  stroke(140,10,150);
  triangle(30, 75, 58, 20, 86, 75);
  //line(0, 0, 100, 0);
  pop();

  //  BLUE HAND
  push();
  rotate(minAngle);
  stroke(55,100,350);
  line(0, 0, 75, 0);
  pop();


  //PURPLE HAND
  push();
  rotate(hourAngle);
  stroke(155,10,250);
  line(0, 0, 50, 0);
  pop();

  stroke(55,20,200);
  point(0,0);





}
