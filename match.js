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
    // document.querySelector(".reset_button").className = "hide reset_button";
    document.querySelector(".start_button").addEventListener("click", startGame);
    document.querySelector(".reset_button").addEventListener("click", startGame);
    document.querySelector(".playAgain_button").addEventListener("click", startGame);

    
    function startGame(event) {
        event.preventDefault();
        document.querySelector("#card_section").innerHTML = "";
        document.querySelector(".start_popup").className = "hide start_popup";
        document.querySelector(".win_popup").className = "hide win_popup";
        // document.querySelector(".reset_button").remove = "hide";

        //need a timer start

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

            let ourMatches = document.querySelectorAll(".match").length;
            if (ourMatches === 12) {
                //timer stop
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





// document.querySelector(".win_popup").className = "hide";
// document.querySelector(".start_button").addEventListener("click", startGame);

// function startGame(event) {
//     event.preventDefault();
//     document.querySelector(".start_popup").className = "hide";

//     shuffle(cardList);

//     let grid = document.querySelector(".card_section");

//     for (let i = 0; i <= cardList.length - 1; i++) {
//         let newdiv = document.createElement("div");
//         newdiv.className = `scene ${cardList[i].name}`;
//         newdiv.innerHTML = `
//    <div class="card">
//    <div class="card_face card_down"><img src="/images/${cardList[i].image}"></div>
//    <div class="card_face card_up"><img class="card_image" src="/images/galaxy.jpg"></div>
//    </div>`;
//         grid.append(newdiv);
//     }

//     // cardFlip();

// };

// function shuffle(cardArray) {
//     var currentIndex = cardArray.length, temporaryValue, randomIndex;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         // And swap it with the current element.
//         temporaryValue = cardArray[currentIndex];
//         cardArray[currentIndex] = cardArray[randomIndex];
//         cardArray[randomIndex] = temporaryValue;
//     }
//     return cardArray;
// };


// const cardFlip = cardName => {
//     const index = cardList.findIndex(index => card.name === cardName);
//     card.index.toggle("is-flipped");

// }

// const cardSection = document.querySelector("section");


// cardSection.addEventListener("click", function (event) {
//     if (event.target.cardList.contains("card_image")) {
//         cardFlip();
//         console.log(event);

//     }
    // else if (event.target.classList.contains("remove_btn")) {       
    //     removeItem(event.target.attributes[0].value);                    
    //     event.target.parentNode.remove();                               
    //     updateTotal();                                                 
    // }
// });

    // for (var i = 0; i < cards.length; i++){
    //     card = cards[i];
    //     card.addEventListener("click", displayCard);



    // var cardFlip = function (){
    //     this.classList.toggle("is-flipped");
    // };

    // for (var i = 0; i < cards.length; i++){
    //     flipCard = cards[i];
    //     flipCard.addEventListener("click", cardFlip);
    // };



    // function cardFlip() {
    //     let card = document.querySelector(".card");
    //     document.querySelector(".card_section").addEventListener("click", function (event) {
    //         if (event.target.classList.contains("card_image")) {
    //             for (let index in cardList) {

    //                 let ourTarget = event.target.index;
    //                 console.log(ourTarget);

    //                 card.classList.toggle("is-flipped");
    //             }


    //         }
    //     });
    // }
