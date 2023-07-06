import { createMenu } from "./createMenu.js";

export const createField =(lvl)=>{
	const main = document.querySelector("main");
	main.classList.add ("null");


	console.log(lvl);
	let lvlText;
	
	switch(lvl){
		case 8:
			lvlText ="Easy"
			break;
		case 12 :
			lvlText ="Medium"
			break;
		case 16:
			lvlText ="Hard"
			break;
	}

	const game = document.querySelector(".game");
	game.style.display = "block"
			const level = game.querySelector(".lvl")
		level.textContent = lvlText;

		const menu = 	game.querySelector(".btn");
		menu.addEventListener('click',()=>{
			createMenu();
		})




}