let slide1 = document.querySelector('#slide-1');
let left = document.querySelector('.fa-solid.fa-arrow-left');
let right = document.querySelector('.fa-solid.fa-arrow-right');

slideCount = 1;

function leftBtn(){
	if(slideCount === 1){
		slideCount = 1;
	}else{
		slideCount -= 1
	}
	sliding()
}

function rightBtn(){
	if(slideCount === 3){
		slideCount = 3;
	}else{
		slideCount += 1
	}
	sliding()
}

function sliding(){
	if(slideCount === 1){
		slide1.style.marginLeft = '0px';
	}else if(slideCount === 2){
		slide1.style.marginLeft = '-100%';
	}else if(slideCount === 3){
		slide1.style.marginLeft = '-200%';
	}
};