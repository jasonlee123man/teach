import {ctx,screenWidth,screenHeight} from './public.js';

export default class DrawImage {
	static total=0;
	constructor(){
		this.ctx=ctx;
		this.screenHeight=screenHeight;
		this.screenWidth=screenWidth;
		this.imageWidth=100;
		this.imageHeight=100;
		this.x=0;
		this.y=0;
		this.distance=50;
		this.num=Math.ceil(Math.random()*6);

		DrawImage.compute(this)
	}

	static compute(_this){
		DrawImage.total+=_this.num;
	}

	render(){
		var img=new Image();
		img.src="../images/"+this.num+"-point.png";
		img.onload=()=>{
			this.ctx.drawImage(img,this.x,this.y,this.imageWidth,this.imageHeight);
		}
	}
}
