import DrawImage from './drawImage.js'

export default class First extends DrawImage{
	constructor(){
		super()
		this.x=this.screenWidth/2-this.imageWidth-this.distance;
		this.y=this.distance;
	}
}