let body = document.body;
let height = window.innerHeight
							|| document.documentElement.clientHeight
							|| document.body.clientHeight;
let activationStatus = {
	nav: true
}
let navElement = document.querySelector('nav');


function activateAnimation() {
	console.log('start scrolling')
	if(activationStatus.nav){
		navElement.className += ' on-scroll';
		activationStatus.nav = false;
	}
}