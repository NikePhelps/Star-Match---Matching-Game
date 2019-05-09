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
      name: "cancer",
      image: "cancer.png"
    },
    
    {
      name: "gemini",
      image: "gemini.png"
    },
    {
      name: "leo",
      image: "leo.png"
    },
    {
        name: "libra",
        image: "libra.png"
    },
    {
        name: "sagittarius",
        image: "sagittarius.png"
    },
    {
        name: "scorpio",
        image: "scorpio.png"
    },
    {
        name: "cancer",
        image: "cancer.png"
      },
      
      {
        name: "gemini",
        image: "gemini.png"
      },
      {
        name: "leo",
        image: "leo.png"
      },
      {
          name: "libra",
          image: "libra.png"
      },
      {
          name: "sagittarius",
          image: "sagittarius.png"
      },
      {
          name: "scorpio",
          image: "scorpio.png"
      }
   ];

   
   function shuffle(cardArray) {
    var currentIndex = cardArray.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = cardArray[currentIndex];
      cardArray[currentIndex] = cardArray[randomIndex];
      cardArray[randomIndex] = temporaryValue;
    }
    return cardArray;
  }
  shuffle(cardList);
   
   let grid = document.querySelector(".card_section");
   
   for (let i = 0; i <= cardList.length -1; i++) {
   
   let newdiv = document.createElement("div");
   newdiv.className = `card ${cardList[i].name}`;
   
   newdiv.innerHTML =`
   <div class="scene">
   <div class="card_up"><img class= "card_image" src = "/images/background.jpg"></div>
   <div class="card_down"><img src= "/images/${cardList[i].image}"></div>
   </div>
   `;
   
   
   grid.append(newdiv);
   
   
   }
   cardFlip();
    };
  
    // const cards = document.querySelectorAll(".card_down");
    // function cardFlip() {
    //     this.classList.toggle("is-flipped");
    // } 
    // cards.forEach(card => card.addEventListener("click", cardFlip));
    function cardFlip() {
        let card = document.querySelector(".card");
        document.querySelector(".card_section").addEventListener("click", function(event) {
        if (event.target.classList.contains("card_image")) {
            card.classList.toggle("is-flipped");
            console.log(event);
            };
        });
    }
}
