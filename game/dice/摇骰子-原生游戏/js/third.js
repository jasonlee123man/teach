import DrawImage from './drawImage.js'

export default class Third extends DrawImage{
	constructor(){
		super()
		this.x=(this.screenWidth-this.imageWidth)/2;
		this.y=this.distance*4;
	}
}