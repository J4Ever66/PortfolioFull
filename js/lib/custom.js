$(document).ready(start);

var _popSemaphore = false;



function start(){
	AllocateClickHandlers();


}






function AllocateClickHandlers(){
	$(".popper").on("click", popPopper);


}


 

function popPopper(){
	if(_popSemaphore){
		$("nav.primary ul").slideUp("slow");
		$(".popper").text("+");
	}else{
		$("nav.primary ul").slideDown("slow");
		$(".popper").text("-");
	}
	_popSemaphore = !_popSemaphore;
	$("main").toggleClass("popped");
	console.log("poop"); 
}