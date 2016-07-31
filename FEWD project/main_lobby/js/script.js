$(document).ready(function(){
var the = "pictures/bg-02.jpg";
var myArray = 	["pictures/bg-01.jpg",
				"pictures/bg-02.jpg",
				"pictures/bg-03.jpg",
				"pictures/bg-04.jpg",
				"pictures/bg-05.jpg",
				"pictures/bg-06.jpg",	
				"pictures/bg-07.jpg",	
				"pictures/bg-08.jpg",	
				"pictures/bg-09.jpg",	
				"pictures/bg-10.jpg",	
				"pictures/bg-11.jpg",	
				"pictures/bg-12.jpg",	
				"pictures/bg-13.jpg",	
				"pictures/bg-14.jpg",	
				"pictures/bg-15.jpg",	
				"pictures/bg-16.jpg",
				"pictures/bg-17.jpg",	
				"pictures/bg-18.jpg",	
				"pictures/bg-19.jpg",	
				"pictures/bg-20.jpg",	
				"pictures/bg-21.jpg",	
				"pictures/bg-22.jpg",	
				"pictures/bg-23.jpg",	
				"pictures/bg-24.jpg"];
$(document).ready(function myFunction() {
var x = myArray[Math.floor((Math.random() * myArray.length) + 1)];
$('body').css('background-image','url('+x+')');
});
setInterval(function(){ 
var x = myArray[Math.floor((Math.random() * myArray.length) + 1)];
$('body').css('background-image','url('+x+')');

}, 30000);














});