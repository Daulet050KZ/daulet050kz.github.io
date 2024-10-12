var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if(300 < window.pageYOffset){
		header.style.backgroundColor = '#222222';
	}else{
		header.style.backgroundColor = '';
	};
};