var n1 = document.getElementById("b1");
var n2 = document.getElementById("b2");
var n3 = document.getElementById("b3");
var n4 = document.getElementById("b4");
var n5 = document.getElementById("b5");
var n6 = document.getElementById("b6");
var n7 = document.getElementById("b7");
var n8 = document.getElementById("b8");
var n9 = document.getElementById("b9");
var n0 = document.getElementById("b0");
var ba = document.getElementById("ba");
var bb = document.getElementById("bb");
var bc = document.getElementById("bc");
var bd = document.getElementById("bd");
var be = document.getElementById("be");
var bf = document.getElementById("bf");
var res= document.getElementById("resultado");


n1.addEventListener("click",function(){res.value+=this.innerHTML;});
n2.addEventListener("click",function(){res.value+=this.innerHTML;});
n3.addEventListener("click",function(){res.value+=this.innerHTML;});
n4.addEventListener("click",function(){res.value+=this.innerHTML;});
n5.addEventListener("click",function(){res.value+=this.innerHTML;});
n6.addEventListener("click",function(){res.value+=this.innerHTML;});
n7.addEventListener("click",function(){res.value+=this.innerHTML;});
n8.addEventListener("click",function(){res.value+=this.innerHTML;});
n9.addEventListener("click",function(){res.value+=this.innerHTML;});
n0.addEventListener("click",function(){res.value+=this.innerHTML;});
bigual.addEventListener("click",function(){Operacion();});
ba.addEventListener("click",function(){Preoperacion(1);});
bb.addEventListener("click",function(){Preoperacion(2);});
bc.addEventListener("click",function(){Preoperacion(3);});
bd.addEventListener("click",function(){Preoperacion(4);});
be.addEventListener("click",function(){Preoperacion(5);});
bf.addEventListener("click",function(){Preoperacion(6);});

var a;



function reset(){
	res.value=null;
}
	

	function Preoperacion(calc){
		a=res.value;
		res.value=null;
		op=calc;
		return a;
	}


	function Operacion(){
		switch(op){
	case 1:
		var b=parseInt(a)+parseInt(Preoperacion());
		res.value=b;
	break;
	case 2:
		var b=parseInt(a)-parseInt(Preoperacion());
		res.value=b;
	break;
	case 3:
		var b=parseInt(a)*parseInt(Preoperacion());
		res.value=b;
	break;
	case 4:
		var b=parseInt(a)/parseInt(Preoperacion());
		res.value=b;
	break;
	case 5:
		var b=parseInt(a)**parseInt(Preoperacion());
		res.value=b;
	break;
	case 6:
		var b=parseInt(a)%parseInt(Preoperacion());
		res.value=b;
	break;
}
	}


