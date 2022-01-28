let TheBomb = 0;
let lastcase = -1;
let tries = 0;
let founded=0;
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};
TheBomb=getRandomInt(0,15);
console.log(TheBomb);
function check(a){
    tries++;
    document.querySelector('#numbertries').replaceChildren(tries);
    if(lastcase>=0){
        document.querySelector('#photo'+lastcase).src = 'https://icons555.com/images/icons-black/image_icon_square_outline_pic_512x512.png';      
    }
    console.log(a);
    if(TheBomb ==a){
        document.querySelector('#photo'+a).src = 'https://cdn.pixabay.com/photo/2017/01/31/16/59/bomb-2025548__340.png';
        TheBomb=getRandomInt(0,15);
        document.querySelector('#replay').replaceChildren('Vous avez trouver, une bombe a été replacer, vous pouvez rejouer');
        tries=0;
        console.log(TheBomb);
        founded++;
        document.querySelector('#number').replaceChildren(founded);
    }else {
        document.querySelector('#photo'+a).src = 'https://www.pngall.com/wp-content/uploads/2016/06/Fail-Stamp.png';
        document.querySelector('#replay').replaceChildren('Le but est de trouver la bombe');   
    }
    lastcase = a;
}

//si l'id etait 'tile -0-0'
//let bomb = bombrow + '-' + bombcolumn
//let bomb = `tile-${bombrow}-${bombcolumn}`
