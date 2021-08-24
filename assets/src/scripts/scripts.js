document.addEventListener('DOMContentLoaded',() => {
	manageScroll();
	manageNav();
});


let manageNav = () => {

	let navButton = document.querySelector('#nav-button');
	let siteContent = document.querySelector('.site-content-wrapper');

	navButton.addEventListener('click',function(e) {
		if (siteContent.classList.contains('nav-active')){
			siteContent.classList.remove('nav-active');
		}
		else{
			siteContent.classList.add('nav-active');
		}
	});

}


let manageScroll = () => {
	let initialOffset = 0;
	let initialMouseOffset;
	let isScrolling = false;
	let siteContent = document.querySelector('.site-content-wrapper');

	siteContent.addEventListener('mousedown',(e) => {
		initialOffset = siteContent.scrollTop;
		initialMouseOffset = e.clientY;
		isScrolling = true;
	});
	document.body.addEventListener('mouseup',(e) => {
		isScrolling = false;
	});

	//If user has scrolled more than 10px, disable click
	document.body.addEventListener('click', (e) => {
		if (Math.abs(initialMouseOffset - e.clientY) > 10){
			e.preventDefault();
		}
	});

	document.body.addEventListener('mousemove',(e) => {
		if (isScrolling){
			siteContent.scrollTop = initialOffset + (initialMouseOffset - e.clientY);
		}
	});
}