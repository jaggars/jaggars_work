$(document).ready(function(){
//string practice//

function fithCharacter(){
var user_input = $('#return5th_input').val();
var output = user_input.charAt(4);
$('#return5th_display').text(output);

}

$("#return5th_submit").click(fithCharacter);



$('#returnLast_submit2').click(function helloWorld(){
	var input = $('#returnLast_input2').val().toUpperCase();
	var output = input;
	$('#returnLast_display2').text(output);
});

$('#greet1_submit').click(function helloBlank(){
	var name = $('#greet1_input').val()
	var text = "Hello " + name + " welcome to the website";
	$('#greet1_display').text(text);

});

$('#greet2_submit').click(function helloSpecific(){
	var name = $('#greet2_input').val()
	if (name == "Bob"|| name == "Alice"|| name == "Brendan") {
	var text = "Hello " + name + " welcome to the website";
	$('#greet2_display').text(text);

}else{
	alert("wrong name");
}

});

$('#integerMax_submit').click(function helloBlank(){
	var n1 = $('#integerMax_input1').val()
	var n2 = $('#integerMax_input2').val()
	if (n1>n2){
		$('#integerMax_display').text(n1);
	}else{

	$('#integerMax_display').text(n2);
}

});
$('#integerSign_submit').click(function helloBlank(){
	var n1 = $('#integerSign_input1').val();
	var n2 = $('#integerSign_input2').val();
	var n3 = $('#integerSign_input3').val();
	if (n1>0){
		var n1 = "+"+n1;
	}
		if (n2>0){
		var n2 = "+"+n2;
	}
		if (n3>0){
		var n3 = "+"+n3;
	}
	$('#integerSign_display').text([n1,n2,n3]);



});















});

//$(document).ready(function(){
//
//	$('#return5th_submit').click(function(){		
//		
//	var user_input = $('#return5th_input').val();
//		
//		$('#return5th_display').text(user_input);
//	});
//
//});