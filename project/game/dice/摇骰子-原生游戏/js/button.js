import DrawImage from './drawImage.js'

export default class Button extends DrawImage{
	constructor(){
		super()
		this.imageWidth=200;
		this.imageHeight=36;
		this.x=(this.screenWidth-this.imageWidth)/2
		this.y=this.distance*7;
	}

	render(){
		var img=new Image();
		img.src="../images/start.png";
		img.onload=()=>{
			this.ctx.drawImage(img,this.x,this.y,this.imageWidth,this.imageHeight)
		}
	}
}