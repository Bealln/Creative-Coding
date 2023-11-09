import React from "react";
import Sketch from "react-p5";
let started = false;


//In OpenProcessing, create a sketch that uses beginShape() and endShape() to draw nested/repeated shapes 
//that form animated Moire patterns. Each sketch must contain vertices, and your sketch should utilize the following p5.js functions:
//beginShape() endShape() vertex() for loop

//Art purpose: For this art piece I've created 6 rotating ellipse groups intersecting with each other and
//with a diagonal shape using vertices that cross the canvas and intersects the ellipses.
//The intersection plus moving ellipses allows to view Moire Patterns

//Note: The rotating ellipse code is only commented once since it is repeated 6 times


var theta = 0.0; //Defining the angle for the rotation of the ellipses
var ellipseWidthMultiplier = 10; //Each group of ellipses will be formed by a series of ellipses varying in width, this variable sets the step difference in width between ellipses
var ellipseHeightMultiplier = 20;  //Each group of ellipses will be formed by a series of ellipses varying in height, this variable sets the step difference in height between ellipses
var rotationSpeed = 0.005; //Defining the speed at which the ellipses will turn


const MoireDisco = (props) => {
  const setup = (p5, canvasParentRef) => {
    if (started) {
        p5.remove();
        return;
      }
      started = true;
      
      p5.createCanvas(500,500).parent(canvasParentRef);
    };
	

    const draw = (p5) => {
        p5.background(45,43,100);
        p5.noFill(); //Specifying no fill for the ellipses to create the moire patterns
        //Crossing vertices
	
	    p5.beginShape(); //Starting the shape
	    p5.stroke(250); //Defining colour) 
	    //The shape is full width crossing diagonal lines in small increments on the y positioning
	for(i=0; i<50; i++){
		p5.vertex(0, 100 + i*5); 
		p5.vertex(p5.windowWidth,100 + i*5);
		p5.vertex(0, 150 + i*5); 
		p5.vertex(p5.windowWidth,150 + i*5);
	}
	p5.endShape(); //Enging the shape
	
	
    //Circle 1, clockwise 
    p5.push();
	p5.translate(p5.width/2,p5.height/2); //Defining the positioning of the centre of the ellipse
	p5.rotate(theta); //Defining the rotating movement to the angle theta
	for(var i =0; i < 30; i++){ //Using a for loop to create the series of ellipses within a group 
            p5.stroke(200,100,227); //Defining the colour
			p5.ellipse(0, 0, i*ellipseWidthMultiplier,i*ellipseHeightMultiplier); //Using the incement variants to generate larger ellipses
	}

	p5.pop();
	theta += rotationSpeed; //The angle increases at the rotation speed
	
	//Circle 2, anti clockwise
	for(var i =0;  i<3; i++) {
		p5.push();
		p5.translate(p5.width/2,p5.height/2);
		p5.rotate(-theta);
		for(var i =0; i < 30; i++){
                p5.stroke(200,100,227);
				p5.ellipse(0, 0,i*ellipseWidthMultiplier,i*ellipseHeightMultiplier);
		}

		p5.pop();
	}
	
	
	//Circle 3, clockwise
	p5.push();
	p5.translate(p5.width/2 + 100,p5.height/2);
	p5.rotate(theta);
	for(var i =0; i < 30; i++){
		p5.stroke(50, 205, 50);
		p5.ellipse(0, 0,
			i*ellipseWidthMultiplier,
			i*ellipseHeightMultiplier);
	}
	p5.pop();
	
	//Circle 4, anticlockwise
	p5.push();
	p5.translate(p5.width/2 + 100,p5.height/2);
	p5.rotate(-theta);
	for(var i =0; i < 30; i++){
		p5.stroke(17,181,228);
		p5.ellipse(0, 0,
			i*ellipseWidthMultiplier,
			i*ellipseHeightMultiplier);
	}
	p5.pop();
	
	//Circle 5, clockwise
	p5.push();
	p5.translate(p5.width/2 - 100,p5.height/2);
	p5.rotate(theta);
	for(var i =0; i < 30; i++){
		p5.stroke(17,181,228);
		p5.ellipse(0, 0,
			i*ellipseWidthMultiplier,
			i*ellipseHeightMultiplier);
	}
	p5.pop();
	
	//Circle 6, anticlockwise
	p5.push();
	p5.translate(p5.width/2 - 100,p5.height/2);
	p5.rotate(-theta);
	for(var i =0; i < 30; i++){
		p5.stroke(50, 205, 50);
		p5.ellipse(0, 0,
			i*ellipseWidthMultiplier,
			i*ellipseHeightMultiplier);
	}
	p5.pop();
	
    };
return <Sketch setup={setup} draw={draw} />;
}
export default MoireDisco;



