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
            /**
             * Creating new li element, adding css classes
             */
            newTweetElement = document.createElement("li");
            newTweetElement.classList.add("list-group-item","data");
            /**
             * Adding property that will help in identyfying array position of the element
             */
            newTweetElement.setAttribute("index-position",i);
            newTweetElement.appendChild(document.createTextNode(`${element}`));
            /**
             * Adding font awesome trash icon
             */
            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("far","fa-trash-alt","float-right", "tweet-delete-icon");
            /**
             * Adding the trash can icon to the li element and adding li elelemnt to the ul
             */
            newTweetElement.appendChild(deleteIcon);
            generalListOfTweets.appendChild(newTweetElement);
        }
        
    } else {
        /**
         * Code that runs if there are no tweets in the array
         */
        newTweetElement = document.createElement("li");
        newTweetElement.classList.add("list-group-item","text-light", "bg-dark");
        
        newTweetElement.appendChild(document.createTextNode(`No tweets`));
        generalListOfTweets.appendChild(newTweetElement);
    }
}

addTweetsToTheListIfTheyExist(storedTweets);

/**
 * Function that adds element to the array
 */
function addElementToTheTweetsArray(tweet,targetArray) {
    if(tweet != null || tweet != undefined) {
        targetArray.push(tweet);
    }
};

/**
 * Function that takes index and target array and removes the elelement from that array
 */
function removeTweetFromTheArray(tweetIndexPosition,targetArray) {
    targetArray.splice(tweetIndexPosition,1);
}


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



/**
 * Functionality that removes the elements from the array and reinserts elements to the local storage
 */
generalListOfTweets.addEventListener("click",function(e){
    let clickTarget = e.target;
    /**
     * Checking if the click target is the trash can by checking the class of the target item
     */
    if (clickTarget.classList.contains("tweet-delete-icon")) {
        // clickTarget.parentElement.remove();
        // console.log(clickTarget.parentElement.getAttribute("index-position"));
        // console.log(storedTweets);
        /**
         * Removing the element from the array based on their index
         */
        removeTweetFromTheArray(clickTarget.parentElement.getAttribute("index-position"),storedTweets);
        // console.log(storedTweets);
        

        /**
         * Strogin the tweets in the array and writing array to the local storage
         */
        addTweetsToTheListIfTheyExist(storedTweets);
        localStorage.setItem("tweets", JSON.stringify(storedTweets));
    } else {
        /**
         * This is the code that runs if the target element is not a trash can that removes the elements from the list
         */
        // console.log("no");
    
    }
    
});