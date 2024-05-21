
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
    showElementById('play-ground');
    continueGame();

}
