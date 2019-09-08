const apps = [
    {
        appName: "trackTrek",
        src: "./assets/images/trackTrek.png",
        alt: "a screenshot of a music playlist app",
        title: "TrackTrek",
        description: "An app to create a playlist based on drive time",
        gitHub: "https://github.com/jacksonopp/TeamCharmander",
        appLink: "https://jacksonopp.github.io/TeamCharmander/"
    },
    {
        appName: "gifTastic",
        src: "./assets/images/gifTastic.png",
        alt: "a screenshot of a gif search engine",
        title: "Gif Tastic!",
        description: "Look up gifs of your favorite comedians (or anything else) using the giphy API.",
        gitHub: "https://github.com/jacksonopp/GifTastic",
        appLink: "https://jacksonopp.github.io/GifTastic/"
    },
    {
        appName: "triviaGame",
        src: "./assets/images/triviaGame.png",
        alt: "a screenshot of a coen brothers trivia game",
        title: "Coen Brothers Trivia Game",
        description: "A timed trivia quiz about the Cohen Brothers. How much do you know about the filmmaking duo?",
        gitHub: "https://github.com/jacksonopp/triviaGame",
        appLink: "https://jacksonopp.github.io/triviaGame/"
    },
    {
        appName: "nyt search",
        src: "./assets/images/nytSearch.png",
        alt: "a screenshot of an app for searching the New York Times",
        title: "New York Times Search",
        description: "Search for articles using the New York Times API.",
        gitHub: "https://github.com/jacksonopp/nytSearch",
        appLink: "https://jacksonopp.github.io/nytSearch/"
    },
    {
        appName: "trainTime",
        src: "./assets/images/trainTime.png",
        alt: "a screenshot of a train time calculator",
        title: "Train Time",
        description: "Input train frequency and arrival times, and the app will calculate when the next scheduled arrival is. Using localForage, the app remembers your trains from previous sessions.",
        gitHub: "https://github.com/jacksonopp/trainTime",
        appLink: "https://jacksonopp.github.io/trainTime/"
    },
    {
        appName: "word guess",
        src: "./assets/images/hangman.png",
        alt: "a screenshot of a hangman game",
        title: "Die wundersame Herausforderung der Bierstile!",
        description: "A simple hangman-style game where you try to guess different beer styles.",
        gitHub: "https://github.com/jacksonopp/word-guess-game",
        appLink: "https://jacksonopp.github.io/word-guess-game/"
    },
    {
        appName: "crystal guess",
        src: "./assets/images/crystalGame.png",
        alt: "a screenshot of a game with 4 crystals",
        title: "The Crystal Game",
        description: "Each crystal has a different value. Can you get the correct score?",
        gitHub: "https://github.com/jacksonopp/unit-4-game",
        appLink: "https://jacksonopp.github.io/unit-4-game/"
    }
]

function makeCards() {
    for (let i = 0; i < apps.length; i++) {
        //make <div class="card">
        const card = document.createElement("div");
        card.classList.add("card");
        //img
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", apps[i].src);
        cardImg.setAttribute("alt", apps[i].alt)
        cardImg.classList.add("card-img-top");
        card.append(cardImg);
        //card body
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.append(cardBody);
        //card title
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = apps[i].title;
        cardBody.append(cardTitle);
        //card text
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = apps[i].description;
        cardBody.append(cardText);
        //githubLink
        const githubLink = document.createElement("a");
        githubLink.classList.add("btn", "btn-outline-success", "mr-1");
        githubLink.setAttribute("href", apps[i].gitHub);
        githubLink.setAttribute("target", "_blank");
        githubLink.innerText = "Github";
        cardBody.append(githubLink);
        //app link
        const appLink = document.createElement("a");
        appLink.classList.add("btn", "btn-outline-primary");
        appLink.setAttribute("href", apps[i].appLink);
        appLink.setAttribute("target", "_blank");
        appLink.innerText = "View App";
        cardBody.append(appLink);

        document.getElementById("card-columns").append(card);

    }
}
makeCards();