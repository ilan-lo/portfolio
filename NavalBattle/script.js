let photo=['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'];
let count=0;
let thebomb = 'https://cdn.pixabay.com/photo/2017/01/31/16/59/bomb-2025548__340.png';
let facedown ="https://icons555.com/images/icons-black/image_icon_square_outline_pic_512x512.png";
let clicked=[];
let index=0;
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};
function changinit(init,sens,size){
    let check=true;
    if(photo[init] ===thebomb){
        check=false;
    }else if(sens===0){
        if (init % 5 >= size-1){
            for(let i=1;i<size;i++){
                if(photo[init-i] ===thebomb){
                    check=false;
                }
            }
        }else {
            check=false;
        }
    }else if(sens === 1){
        if(init%5 <= 5 - size){
            for(let i=1;i<size;i++){
                if(photo[init+i] ===thebomb){
                    check=false;
                }
            }
        }else check=false;
    }else if(sens === 2){
        if(init <= (5-size) * 5){
            for(let i=1;i<size;i++){
                if(photo[init+5*i] ===thebomb){
                    check=false;
                }
            }
        }else check=false
    }else if(sens === 3){
        if(init >= (size-1) * 5){
            for(let i=1;i<size;i++){
                if(photo[init-5*i] ===thebomb){
                    check=false;
                }
            }
        }else check=false;
    }
    return check;
}

function place(size){
    let init = getRandomInt(0,24);
    let sens = getRandomInt(0,3);
    while(changinit(init,sens,size)===false){
        init=getRandomInt(0,24);
        sens=getRandomInt(0,3);
    };
    
    console.log('init'+init);
    console.log('sens'+sens);
    console.log('FAIT');
    photo[init] = thebomb;
    if (sens===0){
        for(let i=1;i<size;i++){
            photo[init-i] =thebomb;
        }
    }else if (sens===1){
        for(let i=1;i<size;i++){
            photo[init+i] =thebomb;
        }
    }else if (sens===2){
        for(let i=1;i<size;i++){
            photo[init+5*i] =thebomb;
        }
    }else if (sens===3){
        for(let i=1;i<size;i++){
            photo[init-5*i] =thebomb;
        }
    }
};
function reset(){
    console.log('reszt est appelé');
    index=0;
    count = 0;
    photo=['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'];
    clicked=[-1];
    initialise();
    for(let i=0;i<=24;i++){
        document.getElementById('photo'+i).src = facedown;
    }
    console.log('cest reset');
    
}
function doclic(id){
    console.log(photo);
    index++;
    document.getElementById('numbertries').replaceChildren(index);
    if (photo[id]=== thebomb){
        let verif=0;
        for(let i=0;i<count;i++){
            if(clicked[i]===id){
                verif=1;
            }
        }
        if(verif===0){
            document.getElementById('photo'+(id)).src = photo[id];
            document.getElementById('number').replaceChildren('Touché');
            clicked[count++]=id;
            console.log(count);
            console.log(clicked);
            if (count===13){
                document.getElementById('number').innerHTML= 'Bravo vous avez trouvé toutes les bombes, cliqué <mark>ici</mark> pour recommencer';
    
            }
        }else;

    }else {
        document.getElementById('photo'+(id)).src = 'https://img.lovepik.com/free-png/20210923/lovepik-seawater-png-image_401259758_wh1200.png';
        document.getElementById('number').replaceChildren('miss');
    }
}
function initialise(){
    place(2);
    place(2);
    place(2);
    place(3);
    place(4);
};

initialise();
