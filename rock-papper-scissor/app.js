const resultElement = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const rockButton = document.getElementById('rock-button');
const papperButton = document.getElementById('papper-button');
const scissorButton = document.getElementById('scissor-button');
const CHOICE = {
    ROCK: { text: 'Rock', number: 0},
    PAPPER: {text: 'Papper', number: 1},
    SCISSOR: {text: 'Scissor', number: 2}
}
const RESULT = {
    WON: 'Won',
    DRAW: 'Draw',
    LOSE: 'Lose'
}
const loaderElement = document.getElementById('computer-loader');

const load = (flag) => {
    if(flag) {
        loaderElement.removeAttribute('hidden');
    } else {
        loaderElement.setAttribute('hidden', 'true');
    }
};

const getChoice = (choiceNumber) => {
    if(choiceNumber===0) return CHOICE.ROCK;
    else if(choiceNumber===1) return CHOICE.PAPPER;
    else return CHOICE.SCISSOR;
}

const setResult = (result) => {
    resultElement.removeAttribute('hidden');
    resultElement.textContent = result;
}

const setPlayerChoice = (choice) => {
    for(const child of playerChoice.children) child.removeAttribute('active')
    playerChoice.children[choice.number].setAttribute('active','true');
}

const setComputerChoice = (choice) => {
    for(const child of computerChoice.children) child.removeAttribute('active')
    computerChoice.children[choice.number].setAttribute('active','true');
}

const getComputerChoice = () => {
    const randomChoice = parseInt( Math.random()*3 );
    return getChoice(randomChoice);
}

const onPlayerChoiceClick = (playerChoice) => {
    setPlayerChoice(playerChoice);
    load(true);
    setTimeout( () => {
        const computerChoice = getComputerChoice();
        setComputerChoice(computerChoice);
        if(computerChoice === playerChoice) {
            setResult(RESULT.DRAW);
        } else if(computerChoice===CHOICE.ROCK && playerChoice===CHOICE.PAPPER) {
            setResult(RESULT.WON);
        } else if(computerChoice===CHOICE.ROCK && playerChoice===CHOICE.SCISSOR) {
            setResult(RESULT.LOSE);
        } else if(computerChoice===CHOICE.PAPPER && playerChoice===CHOICE.ROCK) {
            setResult(RESULT.LOSE);
        } else if(computerChoice===CHOICE.PAPPER && playerChoice===CHOICE.SCISSOR) {
            setResult(RESULT.WON);
        } else if(computerChoice===CHOICE.SCISSOR && playerChoice===CHOICE.ROCK) {
            setResult(RESULT.WON);
        } else if(computerChoice===CHOICE.SCISSOR && playerChoice===CHOICE.PAPPER) {
            setResult(RESULT.LOSE);
        }
        load(false);
    }, 2000 );
}

rockButton.addEventListener('click', ()=>{
    onPlayerChoiceClick(CHOICE.ROCK);
});
papperButton.addEventListener('click', ()=>{
    onPlayerChoiceClick(CHOICE.PAPPER);
});
scissorButton.addEventListener('click', ()=>{
    onPlayerChoiceClick(CHOICE.SCISSOR);
});