let messageEl = document.getElementById('msg-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let refreshEl = document.getElementById("refresh");
let hasBlackJack = false; 
let isAlive = false;
let sum=0;
let msgstr ="";
let cards = [];
let firstCard,secondCard;
let startFlag = true;

let player = {
    name : "Viku",
    chips : 200 ,
    sayhello: function(){
        console.log("Hello");
    }
}
let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name +" : $"+ player.chips;

function renderGame()
{   startFlag = false;
    cardEl.textContent = "Cards : ";
    for (let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] +" ";
    }
    if (sum < 21)
    {
        msgstr = "Do you want to draw a new card ?" ;
    }
    else if(sum === 21)
    {
        hasBlackJack = true;
        msgstr = "You have a BlackJack !";
    }
    else 
    {
        isAlive = false;
        msgstr = "You are out of the game";
    }
    sumEl.textContent = "Sum : "+sum;
    messageEl.textContent = msgstr; 
    
}
function startGame(){
    if(startFlag){
    firstCard=getRandomCard();
    cards.push(firstCard);
    secondCard=getRandomCard();
    cards.push(secondCard);
    sum=firstCard+secondCard;
    isAlive = true;
    renderGame();
    }
}
function newCard(){
    if (isAlive && hasBlackJack != true)
    {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();    
    }
}

function getRandomCard(){
    let rndm = Math.random()*13;
    rndm = 1 + Math.floor(rndm);
    if (rndm === 1)
    {
        return 11;
    }
    else if(rndm > 10)
    {
        return 10;
    }
    else
    {
        return rndm;
    }
}
    refreshEl.addEventListener('click',function(){
    refreshEl.href="blackjackgame.html";
    });
