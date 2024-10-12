const header = document.getElementById('header');
const body = document.getElementById('body');
const fullScreen = document.querySelector('.fullScreen');
const fullScreenImage = document.getElementById('fullScreen__image');
const fullScreenBtnZoom = document.getElementById('fullScreenBtn__zoom');
const fullScreenBtnToLeft = document.getElementById('fullScreenBtn__ToLeft');
const fullScreenBtnToRight = document.getElementById('fullScreenBtn__ToRight');
const fullScreenBtnClose = document.getElementById('fullScreenBtn__close');
const fullScreen__bottom = document.querySelector('.fullScreen__bottom');

const fullScreenWindow = document.querySelector('.fullScreen__window');
const list__controleArrow = document.getElementById('list__controleArrow');
let zoom_block = document.getElementById('zoom_block');
const listToLeft = document.getElementById('List__ToLeft');
const listToRight = document.getElementById('List__ToRight');

let currentImageIndex;

document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index + 1;
        header.style.display = 'none';
        body.style.overflow = 'hidden';
        fullScreen.style.display = '';
        fullScreenImage.src = item.querySelector('img').src;
        document.documentElement.requestFullscreen();
        checkList()
        activeListItem()

        fullScreenImage.style.width = 'auto';
        fullScreenImage.style.height = 'auto';
        fullScreenImage.style.maxWidth = '100%';
        fullScreenImage.style.maxHeight = '100%';
    });
});

fullScreenBtnClose.addEventListener('click', () => {
    header.style.display = '';
    body.style.overflow = 'visible';
    fullScreen.style.display = 'none';
    document.exitFullscreen();
});

let listVisible = true;
let zoomBlockVisible = false;

list__controleArrow.addEventListener('click', function() {
	if(listVisible){
		list__controleArrow.querySelector('i').classList.add('fa-caret-up');
		list__controleArrow.querySelector('i').classList.remove('fa-caret-down');
		fullScreen__bottom.style.transform = 'translateY(80px)';
		fullScreen__bottom.style.opacity = '30%';
		listVisible = false;
	}else{
		list__controleArrow.querySelector('i').classList.add('fa-caret-down');
		list__controleArrow.querySelector('i').classList.remove('fa-caret-up');
		fullScreen__bottom.style.transform = 'translateY(0px)';
		fullScreen__bottom.style.opacity = '100%';
		listVisible = true;
	}
});

function zoomBlock() {
    if (zoomBlockVisible === false) {
        document.getElementById('zoom_block').style.display = '';
        zoomBlockVisible = true;

        fullScreenImage.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);

        fullScreenImage.style.cursor = 'grab';
        fullScreenImage.style.width = '100%';
        fullScreenImage.style.height = '';
        fullScreenImage.style.maxWidth = '';
        fullScreenImage.style.maxHeight = '';

        fullScreenBtnToLeft.style.display = 'none'
        fullScreenBtnToRight.style.display = 'none'
    } else {
        zoomBlockVisible = false;

        fullScreenImage.removeEventListener('mousedown', startDragging);
        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);

        fullScreenImage.style.top = '';
        fullScreenImage.style.left = '';
        document.getElementById("size").value = '0'

        fullScreenImage.style.cursor = 'default';
        document.getElementById('zoom_block').style.display = 'none';

        fullScreenImage.style.width = 'auto';
        fullScreenImage.style.height = 'auto';
        fullScreenImage.style.maxWidth = '100%';
        fullScreenImage.style.maxHeight = '100%';

        fullScreenBtnToLeft.style.display = ''
        fullScreenBtnToRight.style.display = ''
    }
}

let isDragging = false;
let offsetX, offsetY;

function startDragging(e) {
    isDragging = true;
    offsetX = e.clientX - fullScreenImage.getBoundingClientRect().left;
    offsetY = e.clientY - fullScreenImage.getBoundingClientRect().top;
    fullScreenImage.style.cursor = 'grabbing';
    e.preventDefault();
}

function dragElement(e) {
    if (isDragging) {
        fullScreenImage.style.left = `${e.clientX - offsetX}px`;
        fullScreenImage.style.top = `${e.clientY - offsetY}px`;
        e.preventDefault()
    }
}

function stopDragging() {
    isDragging = false;
    fullScreenImage.style.cursor = 'grab';
}


function sizePic() {
	size = document.getElementById("size").value;
	fullScreenImage.style.width = 100 + 10*size + '%';
}

function ArrowToLeft(){
	if(currentImageIndex === 1){
		currentImageIndex = currentImageIndex;
		fullScreenImage.src = '../templates/Art/item_' + currentImageIndex + '.jpg';
		checkList()
		activeListItem()
	}else{
		currentImageIndex = currentImageIndex - 1;
		fullScreenImage.src = '../templates/Art/item_' + currentImageIndex + '.jpg';
		checkList()
		activeListItem()
	}
}
function ArrowToRight(){
	if(currentImageIndex === 54){
		currentImageIndex = currentImageIndex;
		fullScreenImage.src = '../templates/Art/item_' + currentImageIndex + '.jpg';
		checkList()
		activeListItem()
	}else{
		currentImageIndex = currentImageIndex + 1;
		fullScreenImage.src = '../templates/Art/item_' + currentImageIndex + '.jpg';
		checkList()
		activeListItem()
	}
}

function ListToLeft(){
	if(9 >= currentImageIndex){
		currentImageIndex = currentImageIndex
	}else{
		currentImageIndex -= 9
	}
	checkList()
}
function ListToRight(){
	if(currentImageIndex >= 46){
		currentImageIndex = currentImageIndex
	}else{
		currentImageIndex += 9
	}
	checkList()
}

for(let i = 1; i <= 54; i++){
    let newListImg = document.createElement('img');

    newListImg.src = '../templates/Art/item_' + i + '.jpg';
    newListImg.id = 'list__item-' + i;

    document.querySelector('.image__list').appendChild(newListImg);
}

function checkList(){
    for(let i = 1; i <= 54; i++){
        document.getElementById('list__item-' + i).style.display = 'none';
    }
    let startIndex = Math.floor((currentImageIndex - 1) / 9) * 9 + 1;
    let endIndex = startIndex + 8;

    for(let i = startIndex; i <= endIndex; i++){
    	document.getElementById('list__item-' + i).style.display = '';

    	document.getElementById('list__item-' + i).onclick = function(){
    		fullScreenImage.src = '../templates/Art/item_' + i + '.jpg';
    		currentImageIndex = i;
    		activeListItem()
    	}
    }
}

function activeListItem(){
	for(let i = 1; i <= 54; i++){
        document.getElementById('list__item-' + i).classList.remove('active-item');
        document.getElementById('list__item-' + currentImageIndex).classList.add('active-item');
    }
}