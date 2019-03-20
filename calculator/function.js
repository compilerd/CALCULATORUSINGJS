
function getNumber(num)
{
	var val1 = document.getElementById('input1');
	switch(num){
		case1:
			val1.value += "1"
			break;
		case2:
			val1.value += "2"
			break;
		case3:
			val1.value += "3"
			break;
		case4:
			val1.value += "4"
			break;
		case5:
			val1.value += "5"
			break;
		case6:
			val1.value += "6"
			break;
		case7:
			val1.value += "7"
			break;
		case8:
			val1.value += "8"
			break;
		case9:
			val1.value += "9"
			break;
		case0:
			val1.value += "0"
			break;
		
	}
	var val2 = document.getElementById('input2');
	switch(num){
		case1:
			val2.value += "1"
			break;
		case2:
			val2.value += "2"
			break;
		case3:
			val2.value += "3"
			break;
		case4:
			val2.value += "4"
			break;
		case5:
			val2.value += "5"
			break;
		case6:
			val2.value += "6"
			break;
		case7:
			val2.value += "7"
			break;
		case8:
			val2.value += "8"
			break;
		case9:
			val2.value += "9"
			break;
		case0:
			val2.value += "0"
			break;
		
	}
}
function(Add)
{
	var val1=document.getElementById("input1");
	var val2=document.getElementById("input2");
	document.getElementById("ans").value = " val1 + val2 ";
}

function(Substract)
{
	var val1=document.getElementById("input1");
	var val2=document.getElementById("input2");
	document.getElementById("ans").value =" val1 - val2 ";
}

function(Division)
{
	var val1=document.getElementById("input1");
	var val2=document.getElementById("input2");
	document.getElementById("ans").value = "input1/input2";
}

function(Multiply)
{
	var val1=document.getElemntById("input1");
	var val2=document.getElementById("input2");
	document.getElemntById("ans").value = "input1*input2";
} 