//This javascript code will slide in new content on arrow press


var content = [
	['<div id="Search" class="content"><h1 class="title">Login</h1><p class="paragraph">INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE</p></div>'],
	['<div id="Search" class="content"><h1 class="title">About</h1><p class="paragraph">INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE</p></div>'],
	['<div id="Search" class="content"><h1 class="title">Search Bar</h1><p class="paragraph">INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE</p></div>'],
	['<div id="Search" class="content"><h1 class="title">Library</h1><p class="paragraph">INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE</p></div>'],
	['<div id="Search" class="content"><h1 class="title">Johnny is the Best</h1><p class="paragraph">INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE INSERT CONTENT HERE</p></div>'],

];


function slideContent(previousStep,direction){
	var nextStep = previousStep.slice();
	var previousPage;
	var nextPage;
	var previousPageid;
	var nextPageid;
	var Capdirection;

	switch(direction){

		case "up":
			Capdirection = "Down";
			nextStep[0] -= 1;
			break;

		case "down":
			Capdirection = "Up";
			nextStep[0] += 1;
			break;

		case "left":
			Capdirection = "Right";
			nextStep[1] -= 1;
			break;

		case "right":
			Capdirection = "Left";
			nextStep[1] += 1;
			break;
	}
	
	if(compareArray(nextStep,[0,1])){
		nextPage = 'Login'; //variable only used for information purposes
		nextPageid = 0;
	}
	else if (compareArray(nextStep,[1,0])){
		nextPage = 'About';
		nextPageid = 1;
	}
	else if(compareArray(nextStep,[1,1])){
		nextPage = 'Search';
		nextPageid = 2;
	}
	else if(compareArray(nextStep,[1,2])){
		nextPage = 'Library';
		nextPageid = 3;
	}
	else if(compareArray(nextStep,[2,1])){
		nextPage = 'Johnny';
		nextPageid = 4;
	}

	if(compareArray(previousStep,[0,1])){
		previousPage = 'Login'; //variable only used for information purposes
		previousPageid = 0;
	}
	else if (compareArray(previousStep,[1,0])){
		previousPage = 'About';
		previousPageid = 1;
	}
	else if(compareArray(previousStep,[1,1])){
		previousPage = 'Search';
		previousPageid = 2;
	}
	else if(compareArray(previousStep,[1,2])){
		previousPage = 'Library';
		previousPageid = 3;
	}
	else if(compareArray(previousStep,[2,1])){
		previousPage = 'Johnny';
		previousPageid = 4;
	}

	$('.page').remove();
	
	var newPage = "<div id='contentParent2' class=\"contentParent page slide" + Capdirection + "In\">"+ content[nextPageid] +"</div>";
	var oldPage = "<div id='contentParent1' class=\"contentParent page slide slide"+Capdirection+"Out\">"+ content[previousPageid] +"</div>";

	$("#backgroundGradient2").after(newPage);
	$("#backgroundGradient2").after(oldPage);
}



function compareArray(array1,array2){
	var is_same = (array1.length == array2.length) && array1.every(function(element, index) {
	    return element === array2[index]; 
	});

	return is_same;
}