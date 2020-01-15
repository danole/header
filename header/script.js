let vzr=document.getElementById('vzr');

let guest1=document.getElementById('guest1');

let fon=document.getElementById('fon');



vzr.onclick = function(event) {
  
  guest1.style.display="block";
 	fon.style.display="block";
 
}

fon.onclick = function(event) {
  
  guest1.style.display="none";
 	fon.style.display="none";
 
}


