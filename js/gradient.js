//This file deals with the javascript gradients

var currentStep = [1,1];
var colorArray = [
	[
		[],['#02696D','black'],[],
	],
	[
		['#FAD928','#02696D'],['#02696D','#F89921'],['#F89921','#FAD928'],
	],
	[
		[],['black','#F89921'],[],
	],
];

var keyDown = false;
$(document).ready(function(){

	//listen for keyDown
	$(document).keydown(function(e){
		if(keyDown == false){
			keyDown = true;
			switch(e.which){
				case 38:
					//up
					if(currentStep[1] == 1 && currentStep[0] != 0){
						moveBackground(currentStep,"up");
					}
					else{
						keyDown = false;
					}
					break;
				case 40:
					//down
					if(currentStep[1] == 1 && currentStep[0] != 2){
						moveBackground(currentStep,"down");
					}
					else{
						keyDown = false;
					}
					break;
				case 37:
					//left
					if(currentStep[0] == 1 && currentStep[1] != 0){
						moveBackground(currentStep,"left");
					}
					else{
						keyDown = false;
					}
					break;
				case 39:
					//right
					if(currentStep[0] == 1 && currentStep[1] != 2){
						moveBackground(currentStep,"right");
					}
					else{
						keyDown = false;
					}
					break;
			}
		}
	});

});


function moveBackground(previousStep,direction){
	console.log(direction);

	var color = "black";
	var nextStep = previousStep.slice();

	switch(direction){
		case "up":
			nextStep[0] -= 1;
			changeGradient(previousStep,nextStep,direction);
			break;
		case "down":
			nextStep[0] += 1;
			changeGradient(previousStep,nextStep,direction);
			break;
		case "left":
			nextStep[1] -= 1;
			changeGradient(previousStep,nextStep,direction);
			break;
		case "right":
			nextStep[1] += 1;
			changeGradient(previousStep,nextStep,direction);
			break;
	}
	

	function changeGradient(previousStep,newStep,direction){
		console.log("previous " + previousStep);
		console.log("new: " + newStep);


		//remove current gradient elements
		$('.gradient').remove();

		//add new elements, fadeOut previous, fadeInNew
		var previousGradient;
		var nextGradient;

		if(direction == 'up' || direction == 'down'){
			if(newStep[0] != 1){
				console.log("1");
				nextGradient = "<div id=\"backgroundGradient2\" class=\"gradient fadeIn\" style=\"background: linear-gradient(45deg, " + colorArray[newStep[0]][newStep[1]][0] + " 0%, " + colorArray[newStep[0]][newStep[1]][1] + " 100%); }\"></div>";
				previousGradient = "<div id=\"backgroundGradient1\" class=\"gradient fadeOut\" style=\"background: linear-gradient(135deg, " + colorArray[previousStep[0]][previousStep[1]][0] + " 0%, " + colorArray[previousStep[0]][previousStep[1]][1] + " 100%); }\"></div>";
			}
			else{
				console.log("2");
				nextGradient = "<div id=\"backgroundGradient2\" class=\"gradient fadeIn\" style=\"background: linear-gradient(135deg, " + colorArray[newStep[0]][newStep[1]][0] + " 0%, " + colorArray[newStep[0]][newStep[1]][1] + " 100%); }\"></div>";
				previousGradient = "<div id=\"backgroundGradient1\" class=\"gradient fadeOut\" style=\"background: linear-gradient(45deg, " + colorArray[previousStep[0]][previousStep[1]][0] + " 0%, " + colorArray[previousStep[0]][previousStep[1]][1] + " 100%); }\"></div>";
			}
		}
		else{
			console.log("3");
			nextGradient = "<div id=\"backgroundGradient2\" class=\"gradient fadeIn\" style=\"background: linear-gradient(135deg, " + colorArray[newStep[0]][newStep[1]][0] + " 0%, " + colorArray[newStep[0]][newStep[1]][1] + " 100%); }\"></div>";
			previousGradient = "<div id=\"backgroundGradient1\" class=\"gradient fadeOut\" style=\"background: linear-gradient(135deg, " + colorArray[previousStep[0]][previousStep[1]][0] + " 0%, " + colorArray[previousStep[0]][previousStep[1]][1] + " 100%); }\"></div>";
		}
		
		$("body").prepend(nextGradient);
		$("body").prepend(previousGradient);

		setTimeout(function(){
			currentStep = newStep.slice();
			keyDown = false;
		},500);
	}
	
}
