/*
Selecting ul that will contains li elements */
let generalListOfTweets = document.querySelector("#listOfTweets");

/**S
 * electing the form in order to have submit event */
let tweetForm = document.querySelector("#submitTweetForm");
/**
 * Selecting input with the tweet text */
let tweetTextualData = document.querySelector("#tweetInputValue");

let tweetListHTML =``;

let storedTweets;
if(JSON.parse(localStorage.getItem("tweets")) != null || JSON.parse(localStorage.getItem("tweets")) != undefined || JSON.parse(localStorage.getItem("tweets")) === ''){
    storedTweets = JSON.parse(localStorage.getItem("tweets"));
} else {
    storedTweets = [];
}


/**
 * Function that checks to see if there is any data stored already in the local storage
 * If ther is a data, it get applied to the ul in the form of li's
 */
function addTweetsToTheListIfTheyExist(storedTweetArray){
    let newTweetElement;
    /**
     * Checking if the array has any tweets
     */
    if(storedTweetArray.length != 0) {
        generalListOfTweets.innerHTML = ``;
        for (let i = 0; i < storedTweetArray.length; i++) {
            const element = storedTweetArray[i];
            newTweetElement = document.createElement("li");
            newTweetElement.classList.add("list-group-item","data");
            newTweetElement.appendChild(document.createTextNode(`${element}`));
            generalListOfTweets.appendChild(newTweetElement);
        }
        
    } else {
        newTweetElement = document.createElement("li");
        newTweetElement.classList.add("list-group-item","text-light", "bg-dark");
        newTweetElement.appendChild(document.createTextNode(`No tweets`));
        generalListOfTweets.appendChild(newTweetElement);
    }
}

addTweetsToTheListIfTheyExist(storedTweets);


/**
 * Event listener for the submit form and storing the tweet in local storage
 */
tweetForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    if(tweetTextualData.value != '') {
        /**
         * Pushing data to the array and storing data on local storage
         */
        storedTweets.push(tweetTextualData.value);
        localStorage.setItem("tweets", JSON.stringify(storedTweets));
        addTweetsToTheListIfTheyExist(storedTweets);
    }
});











// console.log(storedTweets);

