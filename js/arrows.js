//This file controls the arrow opacity

function setActiveArrow(previousStep,direction){
	var nextStep = previousStep.slice();

	switch(direction){
		case "up":
			nextStep[0] -= 1;
			changeActive(previousStep,nextStep,direction);
			break;
		case "down":
			nextStep[0] += 1;
			changeActive(previousStep,nextStep,direction);
			break;
		case "left":
			nextStep[1] -= 1;
			changeActive(previousStep,nextStep,direction);
			break;
		case "right":
			nextStep[1] += 1;
			changeActive(previousStep,nextStep,direction);
			break;
	}
	
	function changeActive(previous,next,dir){
		var nextPage;
		var previousPage;

		console.log(next);
		if(compareArray(nextStep,[0,1])){
			nextPage = 'Login'; //variable only used for information purposes
			$('#arrowUp .center').addClass("fadeInArrow");
		}
		else if (compareArray(nextStep,[1,0])){
			nextPage = 'About';
			$('#arrowLeft .center').addClass("fadeInArrow");
		}
		else if(compareArray(nextStep,[1,1])){
			nextPage = 'Search';
			$('#arrowDown .center').addClass("fadeInArrow");
		}
		else if(compareArray(nextStep,[1,2])){
			nextPage = 'Library';
			$('#arrowRight .center').addClass("fadeInArrow");
		}
		else if(compareArray(nextStep,[2,1])){
			nextPage = 'Johnny';
		}

		if(compareArray(previousStep,[0,1])){
			previousPage = 'Login'; //variable only used for information purposes
			$('#arrowUp .center').removeClass("fadeInArrow");
			$('#arrowUp .center').addClass("fadeOutArrow");
			setTimeout(function(){
				$('#arrowUp .center').removeClass("fadeOutArrow");
			},2000)
		}
		else if (compareArray(previousStep,[1,0])){
			previousPage = 'About';
			$('#arrowLeft .center').removeClass("fadeInArrow");
			$('#arrowLeft .center').addClass("fadeOutArrow");
			setTimeout(function(){
				$('#arrowLeft .center').removeClass("fadeOutArrow");
			},2000);
			
		}
		else if(compareArray(previousStep,[1,1])){
			previousPage = 'Search';
			$('#arrowDown .center').removeClass("fadeInArrow");
			$('#arrowDown .center').addClass("fadeOutArrow");
			setTimeout(function(){
				$('#arrowDown .center').removeClass("fadeOutArrow");
			},2000);
		}
		else if(compareArray(previousStep,[1,2])){
			previousPage = 'Library';
			$('#arrowRight .center').removeClass("fadeInArrow");
			$('#arrowRight .center').addClass("fadeOutArrow");
			setTimeout(function(){
				$('#arrowRight .center').removeClass("fadeOutArrow");
			},2000);
		}
		else if(compareArray(previousStep,[2,1])){
			previousPage = 'Johnny';
			previousPageid = 4;
		}


	}
}