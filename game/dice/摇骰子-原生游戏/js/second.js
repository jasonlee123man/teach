import DrawImage from './drawImage.js'

export default class Second extends DrawImage{
	constructor(){
		super()
		this.x=this.screenWidth/2+this.distance;
		this.y=this.distance;
	}

}