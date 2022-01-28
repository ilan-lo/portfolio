//compteur pour savoir si 1ere carte retournée ou 2eme
let firstorsecond = 0;
//inter sauvegarde la carte precedente pour la comparer
let inter;
//nombre de paires trouvés
let founded = 0;
//nombre d'essaies
let tries = 0;
//nombre de cartes trouvés
let index =0;
//liste des cartes trouvés
let saved =[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16];
//tableau final, avec elt random
let cartes = {
    num : Number,
    groupe : Number,
    src : String,
};
//tableau intermediaire d'int random
random={};

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function checkrandom(x, i){
    for(let j = 0; j < i; j++){
        let y = random[j];
        if (x == y){
            x = getRandomInt(0,15);
            x = checkrandom(x,i);
        }
    }
    return x;
};

function randomize(){
    for (let i =0; i <= 15; i++){
        random[i] = getRandomInt(0,15);
        random[i] = checkrandom(random[i],i);
    }
};

function associate(){
    for(let i = 0; i <= 15; i++){
        cartes[i] = shuffle[random[i]];
    }
};

let inter2=0;

function check(a){
    if(founded>=8){
        document.querySelector('#replay').replaceChildren('Bravo vous avez fini la grille, cliqué sur une carte pour remelanger et recommencer');
        randomize();
        associate();
        saved =[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16];
        for(let i=0;i<16;i++){
            document.querySelector('#photo'+i).src = "https://icons555.com/images/icons-black/image_icon_square_outline_pic_512x512.png";
        }
        index=0;
        tries=0;
        founded=0;
        firstorsecond=0;
    }
    //firsttime "lock" les paires deja trouvées pour ne pas que le user puisse la selectionner a nouveau
    let firsttime=0;
    for(let i=0;i<16;i++){
        if(saved[i]===a){
            firsttime++;
        }
    }
    if(firsttime===0){
        if(firstorsecond % 2 == 0){
            document.querySelector('#photo'+a).src = cartes[a].src;
            inter=a;
        }else {
            inter2=a;
            tries++;
            document.querySelector('#numbertries').replaceChildren(tries);
            if(cartes[a].groupe === cartes[inter].groupe){
                founded++;
                document.querySelector('#number').replaceChildren(founded);
                document.querySelector('#photo'+a).src = cartes[a].src;
                saved[index++] = a;
                saved[index++] = inter;
                console.log(saved);
            }else{
                document.querySelector('#photo'+a).src = cartes[a].src;
                setTimeout("clear()",700);
                
            }
        }
        firstorsecond++;
    }
}

function clear(){
    document.querySelector('#photo'+inter).src = 'https://icons555.com/images/icons-black/image_icon_square_outline_pic_512x512.png';
    document.querySelector('#photo'+inter2).src = 'https://icons555.com/images/icons-black/image_icon_square_outline_pic_512x512.png';
}

randomize();
associate();
console.log(shuffle);
console.log(random);
console.log(cartes); 