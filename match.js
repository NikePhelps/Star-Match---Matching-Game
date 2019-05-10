"use strict";

window.onload = function () {



    const cardList = [
        {
            name: "cancer",
            image: "images/cancer.png"
        },

        {
            name: "gemini",
            image: "images/gemini.png"
        },
        {
            name: "leo",
            image: "images/leo.png"
        },
        {
            name: "libra",
            image: "images/libra.png"
        },
        {
            name: "sagittarius",
            image: "images/sagittarius.png"
        },
        {
            name: "scorpio",
            image: "images/scorpio.png"
        },
        {
            name: "cancer",
            image: "images/cancer.png"
        },

        {
            name: "gemini",
            image: "images/gemini.png"
        },
        {
            name: "leo",
            image: "images/leo.png"
        },
        {
            name: "libra",
            image: "images/libra.png"
        },
        {
            name: "sagittarius",
            image: "images/sagittarius.png"
        },
        {
            name: "scorpio",
            image: "images/scorpio.png"
        }
    ];


    document.querySelector(".win_popup").className = "hide win_popup";
    document.querySelector(".start_button").addEventListener("click", startGame);
    document.querySelector(".reset_button").addEventListener("click", startGame);
    document.querySelector(".playAgain_button").addEventListener("click", startGame);
        
        let second = 0;
        let minute = 0; 
        let timer = document.querySelector(".timer_section");
        let interval;
        function startTimer() {
            interval = setInterval(function () {
                timer.innerHTML = minute + "mins " + second + "secs";
                second++;
                if (second == 60) {
                    minute++;
                    second = 0;
                }
                if (minute == 60) {
                    hour++;
                    minute = 0;
                }
            }, 1000);
        };

    function startGame(event) {
        event.preventDefault();
        document.querySelector("#card_section").innerHTML = "";
        document.querySelector(".start_popup").className = "hide start_popup";
        document.querySelector(".win_popup").className = "hide win_popup";
        //reset timer
        second = 0;
        minute = 0; 
        let timer = document.querySelector(".timer_section");
        timer.innerHTML = "0 mins 0 secs";
        clearInterval(interval);
    

        startTimer();

        //timer start
        cardList.sort(function () {
            return 0.5 - Math.random();
        });
        
        let firstClick = "";
        let secondClick = "";
        let clickCount = 0;
        let previousTarget = null;
        let delay = 1200;

        let cardSection = document.getElementById("card_section");
        let grid = document.createElement("section");
        grid.setAttribute("class", "grid");
        cardSection.appendChild(grid);

        cardList.forEach(function (item) {
            let name = item.name,
                image = item.image;

            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.name = name;

            let cardFront = document.createElement("div");
            cardFront.classList.add("cardFront");

            let cardBack = document.createElement("div");
            cardBack.classList.add("cardBack");
            cardBack.style.backgroundImage = "url(" + image + ")";

            grid.appendChild(card);
            card.appendChild(cardFront);
            card.appendChild(cardBack);

        });

        

        const checkMatch = function checkMatch() {
            let selected = document.querySelectorAll(".selected");
            selected.forEach(function (card) {
                card.classList.add("match");
            });

            let ourMatches = document.querySelectorAll(".match").length
            if (ourMatches === 12) {
                //timer stop
                //unhide win.popup
                clearInterval(interval);
                let finalTime = timer.innerHTML;
                document.getElementById("totalTime").innerHTML = finalTime;
                document.querySelector(".win_popup").classList.remove("hide");
                console.log("you win");
            }
        }

        const noMatch = function noMatch() {
            firstClick = "";
            secondClick = "";
            clickCount = 0;
            previousTarget = null;

            let selected = document.querySelectorAll(".selected");
            selected.forEach(function (card) {
                card.classList.remove("selected");
            });
        }

        cardSection.addEventListener("click", function (event) {
            let clicked = event.target;

            if (clicked.nodeName === "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
                return;
            }
            if (clickCount < 2) {
                clickCount++;
                if (clickCount === 1) {
                    firstClick = clicked.parentNode.dataset.name;
                    console.log(firstClick);
                    clicked.parentNode.classList.add("selected");
                } else {
                    secondClick = clicked.parentNode.dataset.name;
                    console.log(secondClick);
                    clicked.parentNode.classList.add("selected");
                }
                if (firstClick && secondClick) {
                    if (firstClick === secondClick) {
                        setTimeout(checkMatch, delay);
                    }
                    setTimeout(noMatch, delay);
                }
                previousTarget = clicked;
            }
        });

    }

}


// window.onload = function() {
//     document.querySelector(".win_popup").className = "hide";
//     document.querySelector(".start_button").addEventListener("click", startGame);
//     function startGame(event) {
//         event.preventDefault();
//         document.querySelector(".start_popup").className = "hide";
// // display cards function called. have shuffle function inside of dispolay cards function
// let cardList = [
//     {
//       name: "cancer",
//       image: "cancer.png"
//     },
    
//     {
//       name: "gemini",
//       image: "gemini.png"
//     },
//     {
//       name: "leo",
//       image: "leo.png"
//     },
//     {
//         name: "libra",
//         image: "libra.png"
//     },
//     {
//         name: "sagittarius",
//         image: "sagittarius.png"
//     },
//     {
//         name: "scorpio",
//         image: "scorpio.png"
//     },
//     {
//         name: "cancer",
//         image: "cancer.png"
//       },
      
//       {
//         name: "gemini",
//         image: "gemini.png"
//       },
//       {
//         name: "leo",
//         image: "leo.png"
//       },
//       {
//           name: "libra",
//           image: "libra.png"
//       },
//       {
//           name: "sagittarius",
//           image: "sagittarius.png"
//       },
//       {
//           name: "scorpio",
//           image: "scorpio.png"
//       }
//    ];

//    let firstClick = "";
//    let secondClick = "";
//    let clickCount = 0;
//    let previousTarget = null;
//    let delay = 1200
   
//    function shuffle(cardArray) {
//     let currentIndex = cardArray.length, temporaryValue, randomIndex;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       // And swap it with the current element.
//       temporaryValue = cardArray[currentIndex];
//       cardArray[currentIndex] = cardArray[randomIndex];
//       cardArray[randomIndex] = temporaryValue;
//     }
//     return cardArray;
//   }
//   shuffle(cardList);
   
//    let grid = document.querySelector(".card_section");
   
//    for (let i = 0; i <= cardList.length -1; i++) {
   
//    let newdiv = document.createElement("div");
//    newdiv.className = `card ${cardList[i].name}`;


//    let cardFront = document.createElement("div");
//    cardFront.classList.add("cardFront");

//    let cardBack = document.createElement("div");
//    cardBack.classList.add("cardBack");
//    cardBack.style.backgroundImage = "url(" + image + ")";
   
//    newdiv.innerHTML =`
//    <div class="scene">
//    <div class="card_up"><img class= "card_image" src = "/images/background.jpg"></div>
//    <div class="card_down"><img src= "/images/${cardList[i].image}"></div>
//    </div>
//    `;
   
   
//    grid.append(newdiv);
   
   
//    }
//     };
  
    // const cards = document.querySelectorAll(".card_down");
    // function cardFlip() {
    //     this.classList.toggle("is-flipped");
    // } 
    // cards.forEach(card => card.addEventListener("click", cardFlip));
    // function cardFlip() {
    //     for (i = 0; i <= cardList.length; i++)
    //     {let card = document.querySelector(".card");
    //     document.querySelector(".card_section").addEventListener("click", function(event) {
    //     if (event.target.classList.attributes[0]("card_image")) {
    //         card.classList.toggle("is-flipped");
    //         console.log(event);
    //         };
    //     });}
    // }
// }
