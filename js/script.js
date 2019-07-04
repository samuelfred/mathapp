
//Area of square
document.getElementById('squareArea').addEventListener('click', function(){
document.getElementById('formulainput1').value= "Enter the side";
$('#formulainput1, #btn1').show();
$('#formulainput2, #formulainput3').hide();
$('.input1').css('width','100%');
$('.btn1').css('width','20%');
$('#formulainput1, #squareArea').addClass('current');
$('#rectArea').removeClass('current');
//$('.button').not('.current').css('background','blue').css('color','white');
document.getElementById('formulaoutput').innerHTML = "";

document.getElementById('btn1').addEventListener('click', function(){
	

var input1 = document.getElementById('formulainput1').value;
console.log(input1);
document.getElementById('formulaoutput').innerHTML = "Area of square  = " + (4 * input1).toFixed(2)+ " sq.cm";

});

});





//Area of rectangle

document.getElementById('rectArea').addEventListener('click', function(){
document.getElementById('formulainput1').value= "Enter the length";
document.getElementById('formulainput2').value= "Enter the width";
$('#formulainput1, #btn1').show();
$('#formulainput2').show();
$('#formulainput3').hide();
$('.input1, .input2').css('width','50%');
$('#formulainput1, #formulainput2,#rectArea').addClass('current');
$('#squareArea').removeClass('current');
document.getElementById('formulaoutput').innerHTML = "";

document.getElementById('btn1').addEventListener('click', function(){

var input1 = document.getElementById('formulainput1').value;	
var input2 = document.getElementById('formulainput2').value;
document.getElementById('formulaoutput').innerHTML =  "Area of rectangle  = " +  (input1 * input2).toFixed(2)+ " sq. cm";



});

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
	myoperator="";
	operand1="";
	operand2="";
	operatorCount = 0;

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
var myoperator="", operand1="", operand2="";
var mynumber, operands;

$('.num').on('click', function(event){
	 mynumber = $(this).text();
	
	document.getElementById('dispBar').value +=  mynumber.trim();
	
});


var operatorCount=0;


$('.operator').on('click', function(){
	operatorCount +=1;
	if (operatorCount == 1) {
	myoperator = $(this).text();
	myoperator =myoperator.trim();
	if (operand1 == ""){
		operand1 = document.getElementById('dispBar').value ;
		operand1 = operand1.trim();
		console.log(operand1);
		operand1 = operand1.substring(0,operand1.length-1);
		console.log(operand1);

	} 	
} 

});


$('#eq').click(function(){
	
	operand2 = document.getElementById('dispBar').value ;
	operand2 = operand2.trim();
	console.log(operand2, typeof(operand2));
	console.log(myoperator)
	operands = operand2.split(myoperator,2);
	console.log(operands);
	operand2=operands[1];
	operand2 = operand2.substring(0,operand2.length-1);
	console.log(operand2);

	console.log(operand1);
	console.log(operand2);
	console.log(myoperator);

		
	  if ((myoperator) == "+") {	 	
	  	console.log(myoperator);
	 	var result = parseFloat(operand1) + parseFloat(operand2);
	 	
	 } else if (myoperator == '-'){
	 	var result = parseFloat(operand1) - parseFloat(operand2);

	 } else if (myoperator == '*'){
	 	var result = parseFloat(operand1) * parseFloat(operand2);

	 } else if (myoperator == '/'){
	 	var result = parseFloat(operand1) / parseFloat(operand2);

	 	

	 }

	 console.log(result);

	 if (result != parseInt(result)) {

	 document.getElementById('dispBar').value += result.toFixed(2);
	} else {
		document.getElementById('dispBar').value += result ;
	}
});

//menu
$('.menu_img').click(function(){
	console.log('icon clicked');
	$('.menu_list').toggle();
});

//help
$('.help').click(function(){
	$('#help').show();
	$('#form').hide();
});

$('.contact').click(function(){
	$('#contact').show();
	//$('#form').hide();
});

$('.close').click(function(){
	$('#help').hide();
	$('#form').show();
})
$('.close2').click(function(){
	$('#contact').hide();
	$('#help').hide();
	$('#form').show();
})