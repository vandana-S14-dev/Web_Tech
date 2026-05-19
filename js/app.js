<<<<<<< HEAD
alert("Welcome to StreamVerse OTT!");
=======
console.log("StreamVerse OTT Running Successfully");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });

});

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener("click", () => {

        if(window.location.pathname.includes("pages")){
            window.location.href = "watch.html";
        }
        else{
            window.location.href = "pages/watch.html";
        }

    });

});
>>>>>>> de73a583b2c7f337b8e2e1c626e336c0e50ec7d8
