let counter = 0;
let firstSelection = "0";
let secondSelection = "0";


const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");


        if(counter === 0){
            firstSelection = card.getAttribute("character");
            counter ++;
        } else{
            secondSelection = card.getAttribute("character");
            counter = 0;

            if(firstSelection === secondSelection){
                const correctCards = document.querySelectorAll(
                 ".card[character='" + firstSelection + "']"  
                );
                correctCards[0].classList.add("correct");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("correct");
                correctCards[1].classList.remove("clicked");
            } else{
                const incorrectCards = document.querySelectorAll(".card.clicked");

                incorrectCards[0].classList.add("wrong");
                incorrectCards[1].classList.add("wrong");

                setTimeout(() => {
                    incorrectCards[0].classList.remove("wrong");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("wrong");
                    incorrectCards[1].classList.remove("clicked");
                }, 750);
            }
        }

   
    });
  
});