let body = document.body;
let height = window.innerHeight
							|| document.documentElement.clientHeight
							|| document.body.clientHeight;

let navigationStatus = true;
let activationStatus = {};
let navElement = document.querySelector('nav');

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



