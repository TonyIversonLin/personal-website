let body = document.body;
let height = window.innerHeight
							|| document.documentElement.clientHeight
							|| document.body.clientHeight;

let navigationStatus = true;
let activationStatus = {};
let navElement = document.querySelector('nav');

let menu = document.querySelector('#hamberger ul');
let hamberger = document.querySelector('#hamberger');

function animationSetup (arrayOfElementID) {
	let arrayElement = arrayOfElementID.map( elementID => {
		activationStatus[elementID] = true;
		return document.querySelector(elementID)
	});
	let ElementActivationLocation = arrayElement.map( element => element.offsetTop - (3/5) * height);

	return function activation() {
		let currentLocation = body.scrollTop;
		if(navigationStatus){
			navElement.className += ' on-scroll';
			navigationStatus = false;
		}
		let length = arrayOfElementID.length;
		for(let i=0; i<length; i++) {
			if(activationStatus[arrayOfElementID[i]] && currentLocation >= ElementActivationLocation[i]){
				arrayElement[i].className += ' active';
				activationStatus[arrayOfElementID[i]] = false;
			}
		}
	}
}

function jump(event) {
	let destinationID = event.target.dataset.target;
	let destinationElement = document.querySelector(destinationID);
	smoothScroll(destinationElement, 300);
}

function smoothScroll(to, duration) {
	if(duration <= 0) return;
	let difference = to.offsetTop- 150 - body.scrollTop;
	console.log('difference', difference);
	let step = difference / duration * 10;

	setTimeout(() => {
		body.scrollTop = body.scrollTop + step;
		if(body.scrollTop === to.offsetTop) return;
		smoothScroll(to, duration - 10);
	}, 10)
}

function toggleMenu() {
	if(menu.className === 'hide') {
		hamberger.className = 'active';
		menu.className = '';
	}else {
		menu.className = 'hide';
		hamberger.className = '';
	}
}

