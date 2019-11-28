import Background from './background.js';
import First from './first.js';
import Second from './second.js'
import Third from './third.js'
import Button from './button.js'
import DrawImage from './drawImage.js'

new Background().render();

new First().render()
new Second().render()
new Third().render()
new Button().render()

//点击-->setInterval->render()->random()

canvas.onclick=function(){
	let tag=1;
	let timer=setInterval(function(){
		if(tag>=100){
			clearInterval(timer);
			new Button().render()
			return;
		}
		DrawImage.total=0;
		new Background().render();
		new First().render()
		new Second().render()
		new Third().render()
		tag++;
		console.log(DrawImage.total)

		
	},20)
}