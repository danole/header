var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var x1=document.getElementById("x1");
var plus1=document.getElementById("plus1");
var minus1=document.getElementById("minus1");
var x3=document.getElementById("x3");
var plus2=document.getElementById("plus2");
var minus2=document.getElementById("minus2");
var x4=document.getElementById("x4");

console.log(x1.innerHTML);

plus.onclick=function(){
	x1.innerHTML++;
	if(x1.innerHTML==20){
		x1.innerHTML=0;
	}

}
minus.onclick=function(){
	x1.innerHTML--;
	if(x1.innerHTML==-1){
		x1.innerHTML=19;
	}
}
plus1.onclick=function(){
	x3.innerHTML++;
	if(x3.innerHTML==20){
		x3.innerHTML=0;
	}

}
minus1.onclick=function(){
	x3.innerHTML--;
	if(x3.innerHTML==-1){
		x3.innerHTML=19;
	}
}
plus2.onclick=function(){
	x4.innerHTML++;
	if(x4.innerHTML==20){
		x4.innerHTML=0;
	}

}
minus2.onclick=function(){
	x4.innerHTML--;
	if(x4.innerHTML==-1){
		x4.innerHTML=19;
	}
}