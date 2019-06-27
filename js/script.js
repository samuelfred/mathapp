
//Area of square
document.getElementById('squareArea').addEventListener('click', function(){
document.getElementById('formulainput1').value= "Enter the side";
$('#formulainput1, #btn1').show();
$('#formulainput2, #formulainput3, #btn2, #btn3').hide();
$('.input1').css('width','100%');
$('#formulainput1, #squareArea').addClass('current');
$('#rectArea').removeClass('current');
//$('.button').not('.current').css('background','blue').css('color','white');
document.getElementById('formulaoutput').innerHTML = "";

});

document.getElementById('btn1').addEventListener('click', function(){

var input1 = document.getElementById('formulainput1').value;
document.getElementById('formulaoutput').innerHTML = "Area of square  = " + 4 * input1 + " sq.cm";

});



//Area of rectangle

document.getElementById('rectArea').addEventListener('click', function(){
document.getElementById('formulainput1').value= "Enter the length";
document.getElementById('formulainput2').value= "Enter the width";
$('#formulainput1, #btn1').show();
$('#formulainput2, #btn2').show();
$('#formulainput3, #btn1, #btn3').hide();
$('.input1, .input2').css('width','50%');
$('#formulainput1, #formulainput2,#rectArea').addClass('current');
$('#squareArea').removeClass('current');
document.getElementById('formulaoutput').innerHTML = "";

});


document.getElementById('btn2').addEventListener('click', function(){

var input1 = document.getElementById('formulainput1').value;	
var input2 = document.getElementById('formulainput2').value;
document.getElementById('formulaoutput').innerHTML =  "Area of rectangle  = " +  input1 * input2 + " sq. cm";



});


$('#formulainput1').click(function(){

	document.getElementById('formulainput1').value= "";

});
$('#formulainput2').click(function(){

	document.getElementById('formulainput2').value= "";

});
$('#formulainput3').click(function(){

	document.getElementById('formulainput3').value= "";

});

//clear all
$('#clear').click(function(){
	$('.button').removeClass('current');
	$('#formulainput1, #formulainput2, #formulainput3').removeClass('current');
	document.getElementById('formulaoutput').innerHTML = "";
	document.getElementById('formulainput1').value = "";
	document.getElementById('formulainput2').value = "";
	document.getElementById('formulainput3').value = "";	
	document.getElementById('dispBar').value = "";

});






// numbers
// var buttons=document.getElementsByClassName('button');
 var dispBar=document.getElementById('dispBar').innerHTML;
// console.log(dispBar);
// for (var i= 0; i< buttons.length; i++){
// 	console.log(buttons[i].innerHTML);
	
// 		//console.log(dispBar+buttons[i].innerHTML);
// 		//dispBar +=buttons[i].innerHTML;


	

// }


$('.button').on('click', function(event){
	var mytext = $(this).text();
	if (dispBar==0) {
	dispBar = mytext;
	} else {
		dispBar +=mytext;
	}
	console.log(dispBar);

	document.getElementById('dispBar').value = dispBar;
	if (operand1 == 0) {
	 operand1 = dispBar;

	} else {
		operand2 = dispBar;
		//operand1 = operand1.substring(0,operand1.length-2);
	}

});


var myoperator, operand1;

$('.operator').on('click', function(){

	myoperator = $(this).text();

	
	console.log(operand1, operand2);
	console.log(myoperator);
	//document.getElementById('dispBar').value = "";
	dispBar = 0;

});

$('#eq').click(function(){
	console.log(operand1);
	console.log(operand2);
	console.log(myoperator);
	console.log(dispBar);
	
	 if (myoperator == '+') {
	 	console.log(myoperator);
	 	var result = operand1 + operand2;
	 }
	 console.log(result);

});


