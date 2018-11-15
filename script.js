
var square=document.querySelectorAll(".square");

function makeRandColor(khers){
	var i=Math.floor((Math.random() * 256) + 0);
	var j=Math.floor((Math.random() * 256) + 0);
	var k=Math.floor((Math.random() * 256) + 0);
	var color="rgb("+i+", "+j+", "+k+")";
	khers.style.background= color;
};
square.forEach(makeRandColor);

RGBselect =Math.floor(Math.random() * 5);
RGB = square[RGBselect].style.background;
h1=document.querySelector("h1");
h1.innerHTML=RGB;
container=document.querySelector("#container")
body=document.querySelector("body");
status=document.querySelector("#status");
easy=document.querySelector(".easy");
hard=document.querySelector(".hard");
reset=document.querySelector(".reset");

easy.addEventListener("click",function(){
	if(document.querySelector(".header").style.background!=="rgb(66, 121, 209)"){document.querySelector(".header").style.background="rgb(66, 121, 209)"};
	hard.classList.remove("selected");
	easy.classList.add("selected");
	hard.style.color="rgb(66, 121, 209)";
	easy.style.color="white";
	container.textContent="";
	container.innerHTML='<div class="square"></div><div class="square"></div><div class="square"></div>';
	square=document.querySelectorAll(".square");
	square.forEach(makeRandColor);
	RGBselect =Math.floor(Math.random() * 2);
	square[RGBselect].style.background= RGB ;
	for(var i=0; i<square.length; i++){
square[i].addEventListener("click",function(){
	if(this.style.background==RGB){
		document.querySelector("#status").textContent="Correct";
 		changeColor(square);
 		document.querySelector(".header").style.backgroundColor=RGB;
 		reset.textContent="";
 		reset.textContent="PLAY AGAIN";
	}
	else{
		this.style.background="black";
		document.querySelector("#status").textContent="Try again";
	}
	reset.addEventListener("click",function(){
	square.forEach(makeRandColor);
	RGBselect =Math.floor(Math.random() * 2);
	RGB = square[RGBselect].style.background;
	h1.innerHTML=RGB;
	document.querySelector(".header").style.background="rgb(66, 121, 209)";
	reset.textContent="NEW COLOR";
	document.querySelector("#status").textContent="";
});
})	
}
});

hard.addEventListener("click",function(){
	if(document.querySelector(".header").style.background!=="rgb(66, 121, 209)"){document.querySelector(".header").style.background="rgb(66, 121, 209)"}
	easy.classList.remove("selected")
	hard.classList.add("selected");
	easy.style.color="rgb(66, 121, 209)";
	hard.style.color="white";
	container.textContent="";
	container.innerHTML='<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>';
	square=document.querySelectorAll(".square");
	square.forEach(makeRandColor);
	RGBselect =Math.floor(Math.random() * 5);
	RGB = square[RGBselect].style.background;
	for(var i=0; i<square.length; i++){
square[i].addEventListener("click",function(){
	if(this.style.background===RGB){
		document.querySelector("#status").textContent="Correct";

 		changeColor(square);
 		document.querySelector(".header").style.background=RGB;
 		reset.textContent="";
 		reset.textContent="PLAY AGAIN";
	}
	else{

		this.style.background="black";
		document.querySelector("#status").textContent="Try again";
	}
})	
}

});

function changeColor(square){
	square.forEach(function(divs){
		divs.style.background=RGB;
	})
}


for(var i=0; i<square.length; i++){
square[i].addEventListener("click",function(){
	if(this.style.background===RGB){
		document.querySelector("#status").textContent="Correct";
 		changeColor(square);
 		document.querySelector(".header").style.background=RGB;
 		reset.textContent="";
 		reset.textContent="PLAY AGAIN";
	}
	else{

		this.style.background="black";
		document.querySelector("#status").textContent="Try again";
	}
})	
}

reset.addEventListener("click",function(){
	square.forEach(makeRandColor);
	RGBselect =Math.floor(Math.random() * 5);
	RGB = square[RGBselect].style.background;
	h1.innerHTML=RGB;
	document.querySelector(".header").style.background="rgb(66, 121, 209)";
	reset.textContent="NEW COLOR";
	document.querySelector("#status").textContent="";


});






