var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');

var radius=1;
context.lineWidth=2*radius;

var dragging=false;

var engage=function(e){

	    dragging=true;
	    putPoint(e);
}

var putPoint=function(e){

	      if(dragging){
	      	  context.lineTo(e.offsetX,e.offsetY);
	      	  context.stroke();
	      	  context.beginPath();
	      	  context.arc(e.offsetX,e.offsetY,radius,0,2*Math.PI);
	      	  context.fill();
	      	  context.beginPath();
	      	  context.moveTo(e.offsetX,e.offsetY);
	      }
}

var disEngage=function(e){
	dragging=false;
	context.beginPath();
}


canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mousemove',putPoint);
canvas.addEventListener('mouseup',disEngage)
