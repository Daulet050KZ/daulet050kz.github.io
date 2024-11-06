window.onscroll = function() {
	if(250 < window.pageYOffset){
		header.style.backgroundColor = '#222222';
	}else{
		header.style.backgroundColor = '';
	};
};
