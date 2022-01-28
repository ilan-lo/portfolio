
//declaration des variables
let cartes = {
    num : Number,
    value : Number,
    src : String,
};
let random ={};
let indexplayer = 0;
let indexdealer = 0;
let indexcarte = 0;
let totvalueP = 0;
let totvalueD = 0;
let numberacesP = 0;
let numberacesD = 0;
let maxvalue = 21;
let bet =0;
let chips = 0;
let originalchips = chips;
//declaration des fonctions
//lie l'input aux jetons (chips)
function fonctionchips(){
    chips = document.getElementById("in2").value;
    if (chips <= 0){
        alert('nombre invalide');
        document.querySelector('#in2').style.display = 'inherit';
        document.querySelector('#in').style.display = 'none';
        document.querySelector("#result").replaceChildren('Nombre invalide, entrez a nouveau vos jetons');
    }
    if(chips > 0){
        document.querySelector("#chips").replaceChildren(chips);
        document.querySelector("#result").replaceChildren('Entrez votre mise');
        document.querySelector('#in2').style.display = 'none';
        document.querySelector('#in').style.display = 'inherit';
    }
}

//lie l'input a la mise
function fonctionmise(){
    bet = document.getElementById("in").value;
    if(bet < 0){
        document.querySelector("#result").replaceChildren('non conforme, entrez votre mise a nouveau');
    }
    if(bet - chips > 0) {
        document.querySelector("#result").replaceChildren('non conforme, entrez votre mise a nouveau');
    }
    if(bet > 0){
        if (chips - bet >= 0){
            document.querySelector('#in').style.display = 'none';
            originalchips = chips;
            chips -= bet;
            document.querySelector("#chips").replaceChildren(chips);
            document.querySelector("#result").replaceChildren('mise: '+bet);
            hited();
            onecardD();
            hited();
            document.querySelector('#Hit').style.display = 'inherit';
            document.querySelector('#Stay').style.display = 'inherit';
            document.querySelector('#Double').style.display = 'inherit';
        }
    }
}

//determine qui gagne;
function winner(){
    let who = 'lose';
    if(totvalueP <= maxvalue){
        if(totvalueP == totvalueD){
            who = 'draw';
        };
        if(totvalueD > maxvalue){
            who ='win';
        };
        if(totvalueP > totvalueD){
            who = 'win';
        };
    }
    if(who == 'win'){
        document.querySelector("#result").replaceChildren('Vous avez gagné ' + bet);
        chips += 2 * bet;
    }
    if (who == 'lose'){
        document.querySelector("#result").replaceChildren('Vous avez Perdu ' + bet);
    }
    if (who == 'draw'){
        document.querySelector("#result").replaceChildren('égalité vous recuperez votre mise ' + bet);
        chips = originalchips;
    }
    
    document.querySelector("#chips").replaceChildren(chips);
    document.querySelector('#Rejouer').style.display = 'inherit';
    document.querySelector('#Hit').style.display = 'none';
    document.querySelector('#Stay').style.display = 'none';
    document.querySelector('#Double').style.display = 'none';
}

//fonction bouton Hit (=distribuer une carte au player)
function onecardP(){
    document.querySelector('#photoP'+indexplayer++).src= './card/'+cartes[indexcarte]['src'];
    if (cartes[indexcarte]['num'] < 4){
        numberacesP++;
    };
    totvalueP += cartes[indexcarte++]['value'];
    if (totvalueP >21 && numberacesP > 0){
        totvalueP -=10;
        numberacesP--;
    }
    document.querySelector("#player_value").replaceChildren(totvalueP);
}
function hited(){
    
    onecardP();
    if(totvalueP > maxvalue){
        stayed();
    }
};

//distribuer une carte au dealer
function onecardD(){         
    document.querySelector('#photoD'+indexdealer++).src= './card/'+cartes[indexcarte]['src'];
        if (cartes[indexcarte]['num'] < 4){
            numberacesD++;
        };
        totvalueD += cartes[indexcarte++]['value'];
        if (totvalueD >21 && numberacesD > 0){
            totvalueD -=10;
            numberacesD--;
        }
        document.querySelector("#dealer_value").replaceChildren(totvalueD);
}

//fonction bouton Stay
function stayed(){
    while (totvalueD < 17){
        onecardD();
        document.querySelector("#dealer_value").replaceChildren(totvalueD);
    }
    winner();
}

//fonction bouton Double
function doubled(){
    if(chips >= 2 * bet){
        bet = bet * 2;
        chips -= bet;
        onecardP();
        stayed();
    }
    else {
        document.querySelector("#result").replaceChildren('vous n\'avez pas assez de jetons');
    }
}

//4 fonctions pour melanger le jeu de carte :
//trouver un nombre random
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//verifié l'unicité du melange
function checkrandom(x, i){
    for(let j = 0; j < i; j++){
        let y = random[j];
        if (x == y){
            x = getRandomInt(0,51);
            x = checkrandom(x,i);
        }
    }
    return x;
};

//melanger des entiers dans un tableau avec les 2 fonctions precedentes
function randomize(){
    for (let i =0; i < 52; i++){
        random[i] = getRandomInt(0,51);
        random[i] = checkrandom(random[i],i);
    }
};

//associe le tableau d'entier random[] a des objets "cartes"
function associate(){
    for(let i = 0; i < 52; i++){
        cartes[i] = shuffle[random[i]];
    }
}
//reinitialise le jeu pour pouvoir rejouer
function replayed(){
    document.querySelector('#in').style.display = 'none';
    document.querySelector('#Rejouer').style.display = 'none';
    document.querySelector('#Hit').style.display = 'none';
    document.querySelector('#Stay').style.display = 'none';
    document.querySelector('#Double').style.display = 'none';
    document.querySelector("#chips").replaceChildren(chips);
    document.querySelector("#result").replaceChildren('Entrez votre mise');
    document.querySelector('#in2').style.display = 'none';
    document.querySelector('#in').style.display = 'inherit';
    document.querySelector('#photoP0').src = 'card/cardback.svg';
    document.querySelector('#photoP1').src = '';
    document.querySelector('#photoP2').src = '';
    document.querySelector('#photoP3').src = '';
    document.querySelector('#photoP4').src = '';
    document.querySelector('#photoP5').src = '';
    document.querySelector('#photoD0').src = 'card/cardback.svg';
    document.querySelector('#photoD1').src = '';
    document.querySelector('#photoD2').src = '';
    document.querySelector('#photoD3').src = '';
    document.querySelector('#photoD4').src = '';
    document.querySelector('#photoD5').src = '';
    totvalueD = 0;
    totvalueP = 0;
    indexdealer = 0;
    indexplayer = 0;
    if (chips <= 0){
        document.querySelector('#in2').style.display = 'inherit';
        document.querySelector('#in').style.display = 'none';
        document.querySelector("#result").replaceChildren('Entrez le nombre de jetons rachetés');
    }
    //remelanger le paquet si neccessaire
    if(indexcarte > 45){
        randomize();
        associate();
    }

}
document.querySelector('#in').style.display = 'none';
document.querySelector('#Rejouer').style.display = 'none';
document.querySelector('#Hit').style.display = 'none';
document.querySelector('#Stay').style.display = 'none';
document.querySelector('#Double').style.display = 'none';
randomize();
associate();
console.log
document.querySelector('#Hit').addEventListener('click',hited );
document.querySelector('#Stay').addEventListener('click',stayed );
document.querySelector('#Double').addEventListener('click',doubled );
document.querySelector('#Rejouer').addEventListener('click',replayed );