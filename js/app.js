let generalListOfTweets = document.querySelector("#listOfTweets");

let tweetForm = document.querySelector("#submitTweetForm");
let tweetTextualData = document.querySelector("#tweetInputValue");

let tweetListHTML =``;

let storedTweets;
if(JSON.parse(localStorage.getItem("tweets")) != null || JSON.parse(localStorage.getItem("tweets")) != undefined || JSON.parse(localStorage.getItem("tweets")) === ''){
    storedTweets = JSON.parse(localStorage.getItem("tweets"));
} else {
    storedTweets = [];
}

