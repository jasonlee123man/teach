var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var screenWidth=window.screen.width;
var screenHeight=window.screen.height;

canvas.width=screenWidth;
canvas.height=screenHeight;

let distance=50;

export {canvas,ctx,screenWidth,screenHeight,distance}
