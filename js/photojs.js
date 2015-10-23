var imageCount = 1;
var imageTotal = 21;

function slide(x) {
	var image = document.getElementsById('img');
	imageCount = imageCount + x;
	if (imageCount > imageTotal) {imageCount = 1;}
	if (imageCount < 1) {imageCount = imageTotal;}
	image.src = "photos/img"+ imageCount +".jpg";
}

window.setInterval (function slide(A) {
	var image = document.getElementsById('img');
	imageCount = imageCount + 1;
	if (imageCount > imageTotal) {imageCount = 1;}
	if (imageCount < 1) {imageCount = imageTotal;}
	image.src = "photos/img"+ imageCount +".jpg";
}, 5000);