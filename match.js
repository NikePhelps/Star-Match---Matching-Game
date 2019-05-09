"use strict";

window.onload = function() {
    document.querySelector(".win_popup").className = "hide";
    document.querySelector(".start_button").addEventListener("click", startGame);
    function startGame(event) {
        event.preventDefault();
        document.querySelector(".start_popup").className = "hide";
// display cards function called. have shuffle function inside of dispolay cards function
const cardList = [
    {
      name: "aquarius",
      image: "someurlet"
    },
    
    {
      name: "taurus",
      image: "someurletc"
    },
    {
      name: "stars",
      image: "someurletc"
    }
   ];
   
   
   
   let grid = document.querySelector(".cards");
   
   for (let i = 0; i <= cardList.length -1; i++) {
   
   let newdiv = document.createElement("div");
   newdiv.className = `card ${cardList[i].name}`;
   
   newdiv.innerHTML =`
   <p>Name: ${cardList[i].name}</p>
   <p>Image: ${cardList[i].image}</p>`;
   
   
   grid.append(newdiv);
   
   
   }
    };
// display cards function declaration


}
