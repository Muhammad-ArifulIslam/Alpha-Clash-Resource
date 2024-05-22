
// function play (){

//     // step 1: hide the home screen
//     // step 2: show the playground

//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // show the playground 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }


document.addEventListener('keyup', function handleKeyboardButtonPress(event){

    const playerPressed = event.key;
    
    if(playerPressed === 'Escape'){

        gameOver();
    }

    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){

        console.log('you get a point');

                        // <!--update score!-->

        const currentScoreElement = document.getElementById("current-score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        
                        // <!--- increase the score --->
        
        const newScore = currentScore + 1;                

                        // <!--- show the update score --->

        currentScoreElement.innerText = newScore;  
                        // <!--- start a new round --->

        removeBackgroundColorById(expectedAlphabet);
        continueGame ();

    }

    else{

        console.log('please press the right key');

                        // <!--- get the current life ---> 

        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

                        // <!--- reduce the life count --->

        const newLife = currentLife - 1;

                        // <!--- display the update life count--->

        currentLifeElement.innerText = newLife;

    if(newLife === 0){

        gameOver();
    }    

}

});


function continueGame (){

    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet ();
    
    // get randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
    
}


function play(){

    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);
    continueGame();

}


function gameOver(){

    hideElementById('play-ground');
    showElementById('final-score');

                    //<!--- get the final score --->
    
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    
                    //<!--- clear the last selected alphabet highlight--->

    const currentAlphabet = getElementTextById ('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}



