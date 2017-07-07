//global variables
var btn = document.getElementById("btn");
var bodyDiv = document.getElementById("content");	

btn.addEventListener("click", function(){
	var pageRequest = new XMLHttpRequest(); //new Ajax request

	pageRequest.open("GET","https://api.myjson.com/bins/dn5lj"); //get data from this site

	pageRequest.onload = function(){
		if(pageRequest.status >= 200 && pageRequest.status < 400){
			var ourData = JSON.parse(pageRequest.responseText); //changes data from array of string to array of objects
			renderHTML(ourData);
		} else {

		}
		
	};

	pageRequest.onerror = function(){
		console.log("connection error");
	};

	pageRequest.send();
});


function renderHTML(data){
	var htmlString = "";
	for(var i = 0; i < data.length; i++){
		htmlString += "<p>" + data[i].title + "</p>";
	}
	bodyDiv.insertAdjacentHTML('beforeend',htmlString);
}	