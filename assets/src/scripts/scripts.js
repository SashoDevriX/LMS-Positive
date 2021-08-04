document.addEventListener('DOMContentLoaded',() => {
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
});