let body = document.body;
let height = window.innerHeight
							|| document.documentElement.clientHeight
							|| document.body.clientHeight;
let activationStatus = {
	nav: true,
	about: true,
	skill: true
}

let navElement = document.querySelector('nav');
let aboutElement = document.querySelector('#about');
let skillElement = document.querySelector('#skill')
let aboutActivationLocation = aboutElement.offsetTop - (3/5) * height;
let skillActivationLocation = skillElement.offsetTop - (3/5) * height;


function activateAnimation() {
	console.log('start scrolling');
	let currentLocation = body.scrollTop;
	if(activationStatus.nav){
		navElement.className += ' on-scroll';
		activationStatus.nav = false;
	}
	if(activationStatus.about && currentLocation >= aboutActivationLocation) {
		aboutElement.className += ' active';
		activationStatus.about = false;
	}
	if(activationStatus.skill && currentLocation >= skillActivationLocation) {
		skillElement.className += ' active';
		activationStatus.skill = false;
	}
}

