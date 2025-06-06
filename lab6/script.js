function left_column(){
	const cat = document.querySelector('.left');
	const dog = document.querySelector('.right');
	const cat_img = document.querySelector('.cat_img');
	const dog_img = document.querySelector('.dog_img');

	cat.style.zIndex = '2';

	cat_img.style.height = '355px';
	dog_img.style.height = '440px';

	cat_img.style.marginLeft = '100px';
	dog.style.left = '100px';
	
	cat.style.width = '900px';
	dog_img.style.width = '660px';

	cat_img.style.width = '632px';
	dog.style.width = '900px';
}


function right_column(){
	const cat = document.querySelector('.left');
	const dog = document.querySelector('.right');
	const cat_img = document.querySelector('.cat_img');
	const dog_img = document.querySelector('.dog_img');

	cat.style.zIndex = '0';
	
	cat_img.style.height = '355px';
	dog_img.style.height = '440px';
	
	cat_img.style.marginLeft = '100px';
	dog.style.left = '100px';
	
	dog.style.width = '900px';
	dog_img.style.width = '660px';
}


function center(){
	const cat = document.querySelector('.left');
	const dog = document.querySelector('.right');
	const cat_img = document.querySelector('.cat_img');
	const dog_img = document.querySelector('.dog_img');

	cat.style.width = '500px';
	dog.style.width = '500px';
	dog.style.left = '500px';

	cat_img.style.width = '400px';
	dog_img.style.width = '400px';
	cat_img.style.height = '400px';
	dog_img.style.height = '400px';

	cat_img.style.marginLeft = '50px';
	dog_img.style.marginLeft = '50px';
}