import { createField } from "./createField.js";

export const createMenu=()=>{
	const main = document.querySelector("main");
	main.classList.remove ("null");
	const game = document .querySelector(".game");
	const menu = document .querySelector(".menu");
		menu.style.display = "block";
			game.style.display = "none"
	
	const btn = menu .querySelectorAll(".btn")
		btn.forEach (el => {
			el.addEventListener('click', ()=>{
		console.log(el.textContent);
		switch(el.textContent){
			case"Easy":
			menu.style.display="none";
			createField(8);
				break;
			case"Medium":
			menu.style.display="none";
			createField(12);
				break;
			case"Hard":
			menu.style.display="none";
			createField(16);
				break;
		}
		})

});


}