
import {ctx,screenWidth,screenHeight} from './public.js';

export default class Background{
	render(){
		ctx.fillStyle="#ccc";
		ctx.fillRect(0,0,screenWidth,screenHeight)
	}
}

