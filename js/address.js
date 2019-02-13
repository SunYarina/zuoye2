var adse=document.querySelector("#address em");
var adsa=document.querySelectorAll(".add_s ul li a");
for(var ia=0;ia<adsa.length;ia++){
	adsa[ia].onclick=function(ev){
		ev.preventDefault();
		adse.innerText=this.innerText;
	}
}
