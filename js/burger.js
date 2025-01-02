let burger = false;

document.getElementById('nav-icon6').onclick = function(){
	if(burger === true){
		document.getElementById('nav-icon6').classList.toggle('open')
		document.getElementById('burger').classList.toggle('open')
		document.querySelector('body').style.overflow = 'visible'
		if(250 < window.pageYOffset){
			header.style.backgroundColor = '#222222';
		}else{
			header.style.backgroundColor = '';
		};
		burger = false;
	}else{
		document.getElementById('nav-icon6').classList.toggle('open')
		document.getElementById('burger').classList.toggle('open')
		document.querySelector('body').style.overflow = 'hidden'
		header.style.backgroundColor = '#222222';
		burger = true;
	};
};