import React from "react";
import Sketch from "react-p5";


const Concreto = (props) => {
  const setup = (p5, canvasParentRef) => {
	
    p5.createCanvas(300, 500).parent(canvasParentRef);
    p5.background(234,234,234);
    //Printing the artists name, title of work and date for credit
	//print('Concreto,Alfredo Volpi, December 1950');
	// Reference: https://artsandculture.google.com/asset/concreto/XQGNUoKY-Ec7HA
  };

  const draw = (p5) => {

    //Logic:
	// 1. Divide the canvas into horizontal and vertical steps using the global p5.js variables width and height 	
	var widthStep = p5.width/8; //Defining width step
	var heightStep = p5.height/11; //Defining height step
	let green = p5.color(0,102,102); 
	let cream = p5.color(218,210,160);

	//Variables 
	//I've defined a relative position for x1 and y1 using the width and height steps defined
	//I've defined x2,y2,x3 and y3 in relation to x1 and y1 
	
	var x1 = 3*(widthStep); 
	var y1 = 2*(heightStep); 
	var x2 = x1+widthStep;  //For the right facing triangle
	var x2odd = x1-widthStep; //For the left facing triangle
	var y2 = y1
	var x3 = x1
	var y3 = y1 + (heightStep);
	
	
    p5.noStroke(); //Eliminating the default stroke for all triangles 
    
        // 2. Run a for loop that will execute actions depending on conditional expressions
    for (var i = 0; i < 7; i++){
        if (i<6 && i%2===0){
                // 3. If the index number is even it will create:
                //- A green rectangle whose x2 point will be a horizontal step to the right than its x1 ("right facing")
                // - A cream rectangle one vertical steps below and one horizontal step to the right 
                // - A cream rectangle one vertical step bellow and two horizontal steps to the right
        p5.fill(green);
        p5.triangle(x1,y1,x2,y2,x3,y3); 
                p5.fill(cream)
                p5.triangle(x1+ widthStep,y1+heightStep,x2 + widthStep,y2+heightStep,x3 + widthStep,y3+heightStep);
                p5.fill(cream)
                p5.triangle(x1+ 2*widthStep,y1+heightStep,x2 + 2*widthStep,y2+heightStep,x3 + 2*widthStep,y3+heightStep);
                //Each time the triangle will move a full heightStep in the y axis
                y1 = y1+ heightStep;
                y2 = y2+ heightStep;
                y3 = y3+ heightStep;
                
        }
            
            else if (i<6 && i%2!==0){
                // 4. If the index number is uneven it will create:
                //- A green rectangle, utilising the parameter x2odd, which point will be a horizontal step to the left than its x1 ("left facing")
                // - A cream rectangle one vertical steps below and one horizontal step to the right (x2 instead of x2odd will be used for reference)
                // - A cream rectangle one vertical step bellow and two horizontal steps to the right (x2 instead of x2odd will be used for reference)
                p5.fill(green);
                p5.triangle(x1,y1,x2odd,y2,x3,y3);
                p5.fill(cream)
                p5.triangle(x1+ widthStep,y1+heightStep,x2 + widthStep,y2+heightStep,x3 + widthStep,y3+heightStep);
                p5.fill(cream)
                p5.triangle(x1+ 2*widthStep,y1+heightStep,x2 + 2*widthStep,y2+heightStep,x3 + 2*widthStep,y3+heightStep);
                //Each time the triangle will move a full heightStep in the y axis
                y1 = y1+ heightStep;
                y2 = y2+ heightStep;
                y3 = y3+ heightStep;
            }

        else {
                // 5. On the last index iteration:
                // -  A cream rectangle whose x2 point will be a horizontal step to the right than its x1
                p5.noStroke();
                p5.fill(cream);
                p5.triangle(x1,y1,x2,y2,x3,y3);
        }
    }
  };
  

  return <Sketch setup={setup} draw={draw} />;
};


export default Concreto;