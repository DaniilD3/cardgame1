import { createField } from "./createField.js";

export const createMenu=()=>{
	const menu = document .querySelector(".menu");
		menu.style.display = "block";
	
	const btn = menu .querySelectorAll(".btn")
		btn.forEach (el => {
			el.addEventListener('click', ()=>{
		console.log(el.textContent);
		switch(el.textContent){
			case"Easy":
			createField(8);
				break;
			case"Medium":
			createField(12);
				break;
			case"Hard":
			createField(16);
				break;
		}
		})

});


}