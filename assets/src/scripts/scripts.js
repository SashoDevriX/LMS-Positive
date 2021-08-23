document.addEventListener('DOMContentLoaded',() => {
	manageScroll();
	manageNav();
});


let manageNav = () => {

	let navButton = document.querySelector('#nav-button');
	let siteContent = document.querySelector('.site-content');

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

	document.body.addEventListener('mousemove',(e) => {
		if (isScrolling){
			siteContent.scrollTop = initialOffset + (initialMouseOffset - e.clientY);
		}
	});
}