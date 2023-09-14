// let isDragging = false;
// let ismousedown = false;
// let startX = 0;
// let endX = 0;
// let deltaX = 0;
// const container = document.getElementById('contain-prod');

const span = document.getElementsByClassName("swip-button");
let cards = document.getElementsByClassName("article-card")
let cards_page = Math.ceil(cards.length / 4);

let l = 0;
let movePer = 25.34;
let maxMove = 126.98;

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}
let right_mover = () => {
	l = l + movePer;
	if (cards == 1) { l = 0; }
	for (const i of cards) {
		if (l > maxMove) { l = l - movePer; }
		i.style.left = '-' + l + '%';
	}
}
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of cards) {
		if (cards_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }

const sspan = document.getElementsByClassName("sswip-button");
let scard = document.getElementsByClassName("layanan-card")
let scard_page = Math.ceil(scard.length / 4);

let x = 0;
let smovePer = 25.34;
let smaxMove = 25.34;

// mobile_view	
if (mob_view.matches) {
	smovePer = 50.36;
	smaxMove = 50.36;
}
let sright_mover = () => {
	x = x + movePer;
	if (scard == 1) { x = 0; }
	for (const i of scard) {
		if (x > smaxMove) { x = x - smovePer; }
		i.style.left = '-' + x + '%';
	}
}
let sleft_mover = () => {
	x = x - smovePer;
	if (x <= 0) { x = 0; }
	for (const i of scard) {
		if (scard_page > 1) {
			i.style.left = '-' + x + '%';
		}
	}
}
sspan[1].onclick = () => { sright_mover(); }
sspan[0].onclick = () => { sleft_mover(); }

// function down(e){
// 	ismousedown = true;
// 	startX = e.clientX;
// 	console.log("startX = "+startX)
// 	console.log("container-mouse-down")
// }

// function move(){
// 	if (ismousedown) {
// 		isDragging = true;
// 	}
// }

// function endding(e){
// 	endX = e.clientX;
// 	console.log("endX = "+endX)
// 	console.log("dragged " + (endX-startX))
// 	ismousedown = false;
// 	console.log("container-mouse-up")
// 	if (isDragging) {
// 		console.log("container-mouse-drag-end")
// 		isDragging = false;
// 		deltaX = endX - startX;
// 		console.log("deltaX = "+deltaX)
// 		if (deltaX > 0) {
// 			// Click-and-Drag ke kanan
// 			console.log(deltaX)
// 			console.log("container-drag-right")
// 			left_mover()
// 			// Tambahkan kode Anda di sini untuk tindakan click-and-drag ke kanan.
// 		} else if (deltaX < 0) {
// 			// Click-and-Drag ke kiri
// 			console.log(deltaX)
// 			right_mover()
// 			console.log("container-drag-left")
// 			// Tambahkan kode Anda di sini untuk tindakan click-and-drag ke kiri.
// 		}
// 	}
// 	startX = 0;
// 	endX = 0;
// }

// container.addEventListener('touchstart', down);        
// container.addEventListener('touchmove', move);
// container.addEventListener('touchend', endding);

// container.addEventListener('mousedown', down);
// container.addEventListener('mousemove', move);
// container.addEventListener('mouseup', endding);
