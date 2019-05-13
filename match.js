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
    document.querySelector(".modal").className = "hide modal";
    document.querySelector(".start_button").addEventListener("click", startGame);
    document.querySelector(".reset_button").addEventListener("click", startGame);
    document.querySelector(".playAgain_button").addEventListener("click", startGame);
    let cardSound = new Audio("/sounds/laser-sound.mp3");
    let startSound = new Audio("/sounds/start-sound.wav");
    let winSound = new Audio("/sounds/win-sound.wav");

    let second = 0;
    let minute = 0;
    let timer = document.querySelector(".timer_section");
    let interval;
    function startTimer() {
        interval = setInterval(function () {
            timer.innerHTML = minute + " mins  " + second + " secs ";
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

    function resetFlip() {
        if (event.target.matches(".start_button") || event.target.matches(".playAgain_button")) {
            return;
        }
        let resetInfo = document.querySelectorAll(".card");
        function flipUp() {
            resetInfo.forEach(function (card) {
                setTimeout(card.classList.add("selected"), 3000);
            });
        }
        setTimeout(flipUp, 500);

        function flipDown() {
            resetInfo.forEach(function (card) {
                card.classList.remove("selected");
            });
        }
        setTimeout(flipDown, 1000);
    }


    function startGame(event) {
        event.preventDefault();
        document.querySelector("#card_section").innerHTML = "";
        document.querySelector(".start_popup").className = "hide start_popup";
        document.querySelector(".win_popup").className = "hide win_popup";
        document.querySelector(".win_popup").className = "hide win_popup";

        let buttonClick = event.target;
        if (buttonClick) {
            startSound.play();
        }

        second = 0;
        minute = 0;
        let timer = document.querySelector(".timer_section");
        timer.innerHTML = "0 mins 0 secs";
        clearInterval(interval);

        startTimer();

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

        resetFlip();

        const checkMatch = function checkMatch() {
            let selected = document.querySelectorAll(".selected");
            selected.forEach(function (card) {
                card.classList.add("match");
            });

            let ourMatches = document.querySelectorAll(".match").length
            if (ourMatches === 12) {
                clearInterval(interval);
                let finalTime = timer.innerHTML;
                document.getElementById("totalTime").innerHTML = finalTime;
                document.querySelector(".win_popup").className = "win_popup scale-up-ver-top";
                document.querySelector(".modal").className = "modal";
                console.log("you win");

                    winSound.play();
                
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

            if (clicked) {
                cardSound.play();
            }

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

