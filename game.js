//
// Chomper Game core code
// Created by Dalton Herrewynen on May 24, 2024
//

const frameTime=16;//Milliseconds per frame
const velocity=350*(frameTime/1000);//speed compensated for framerate

let paused=true;

//engine call
const animationInterval = setInterval(engine, frameTime);

function engine(){//engine
}

function keybdInput(event){//handles all key-presses
    let key=event.key;
		switch(key){
			case "a":
				//left
				break;
			case "w":
				//up
				break;
			case "d":
        //right
				break;
			case "s":
        //down
				break;
			case "p":
				paused=!paused;
				break;
		}
}
