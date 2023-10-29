import React from "react";
import Sketch from "react-p5";
let started = false;






const NightJungle = (props) => {
  const setup = (p5, canvasParentRef) => {
    if (started) {
        p5.remove();
        return;
      }
      started = true;
      p5.createCanvas(500, 500).parent(canvasParentRef);
      p5.background("#000000");
    };
	

    const draw = (p5) => {
	
    let fromC = p5.color(47, 156, 149,30); //Selected color 1
    let toC = p5.color(163, 247, 181,30); //Selected color 2
    let interA = p5.lerpColor(fromC, toC, 0.66); //Color for group A
    let interB = p5.lerpColor(fromC, toC, 0.33); //Color for group B
    let interC = p5.lerpColor(fromC, toC, 0.01); //Color for group C
	
    let fromB = p5.color(70, 58, 171,67); //Selected color 3
    let toB = p5.color(113, 96, 247,97); //Selected color 4
    let interD = p5.lerpColor(fromB, toB, 0.66); //Color for group A
    let interE = p5.lerpColor(fromB, toB, 0.33); //Color for group B
    let interF = p5.lerpColor(fromB, toB, 0.01); //Color for group C
	

	
	//Defining the movement
	p5.rotate(p5.radians(p5.frameCount)); //I will use frameCount too to define the rotations, converting the value first to radiants
    p5.translate(p5.cos(p5.frameCount)*p5.width,p5.sin(p5.frameCount)*p5.height); //Each frame that passes there is a translation in the width and height until the max width and height have been reached
	p5.scale(0.1); //I recommend playing around with this parameter to create bigger/smaller circles!
	
	//First group
	p5.noStroke();
	p5.fill(interA);
	p5.circle(100, 100, 100);
	p5.circle(200, 200, 100);
	p5.circle(300, 300, 100);
	
	//Second group
	p5.translate(250,0); //Translating from the first group slightly on the x axis
	p5.fill(interB);
	p5.circle(100, 100, 100);
	p5.circle(200, 200, 100);
	p5.circle(300, 300, 100);
	
	//Third group
	p5.translate(250,0); //Translating it from the second group slightly on the x axis
	p5.fill(interC);
	p5.circle(100, 100, 100);
	p5.circle(200, 200, 100);
	p5.circle(300, 300, 100);
	
	p5.translate(250,0); //Translating it from the second group slightly on the x axis
	p5.fill(interD);
	p5.circle(100, 100, 100);
	p5.circle(200, 200, 100);
	p5.circle(300, 300, 100);
	
	p5.fill(interE);
	p5.translate(250,0); //Translating from the first group slightly on the x axis
	p5.circle(100, 100, 100);
	p5.circle(200, 200, 100);
	p5.circle(300, 300, 100);
	
	p5.fill(interF);
	p5.translate(250,0); //Translating it from the second group slightly on the x axis
	p5.circle(100, 100, 100);
	p5.circle(200, 200, 100);
	p5.circle(300, 300, 100);
    };
return <Sketch setup={setup} draw={draw} />;
}
export default NightJungle;




