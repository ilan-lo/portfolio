
let img=0;
let position=0;
let score=0;
let size=6;
let move=-1;
let vieperdues=0;
let fired=0;
let destroyed=0;
let moved=-1;
//let timer=0;
function check(id){
    document.getElementById('photo'+img).src = "./img/transparent.png";
    img=id;
    document.getElementById('photo'+img).src = "./img/solid_snake_rogned.png";
    fire(img);
    if(img===size*position && destroyed===0){
        destroyed=1;
        fired=0;
        score++;
        document.querySelector('#number').replaceChildren(score);
        console.log('tirer')
        console.log(position)
        document.querySelector('#enemy'+position).src= "./img/transparent.png";
        for(let i=1;i<6;i++){
            let delet=img+i;
            document.querySelector('#photo'+delet).src= "./img/transparent.png";
        }
        fire(img);
        setTimeout("spawn()",700);
    }
}
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function mooving(){
    if(moved!=-1){
        document.querySelector('#photo'+moved).src= "./img/transparent.png";
        moved--;
        document.querySelector('#photo'+moved).src= "./img/enemy2.gif";
    }else{
        document.querySelector('#enemy'+position).src= "./img/transparent.png";
        moved=6*position+5;
        document.querySelector('#photo'+moved).src= "./img/enemy2.gif";
    }
}
function timing(timer){
    console.log('timer'+timer)
    console.log('fired'+fired)
    timer++;
    if (timer>5){
        vieperdues++;
        document.querySelector('#numbertries').replaceChildren(vieperdues);
        document.querySelector('#replay').replaceChildren('Vous perdez une vie');
    }else if(img!=size*position || fired != 1){
        setTimeout(timing,1000,timer);
        mooving();
    }
}
function spawn(){
    let pos=getRandomInt(0,3);
    destroyed=0;
    fired=0;
    moved=-1;
    document.querySelector('#replay').replaceChildren('Tirez sur les enemies');
    position=pos;
    document.querySelector('#enemy'+pos).src= "./img/enemy2.gif";
    console.log(pos);
    let timer=0;
    setTimeout(timing,1000,timer);
}
setTimeout("spawn()",700);
function logKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode)
    let a=event.key
    console.log(event.key);
    
    if(a==='ArrowUp' && img>0){
        document.getElementById('photo'+img).src = "./img/transparent.png";
        img=img-size;
        document.getElementById('photo'+img).src = "./img/solid_snake_rogned.png";
    }
    if(a==='ArrowDown' && img <18){
        document.getElementById('photo'+img).src = "./img/transparent.png";
        img=img+size;
        document.getElementById('photo'+img).src = "./img/solid_snake_rogned.png";
    }
    if(a==='ArrowRight'){
        console.log(position)
        console.log(img)
        fire(img);
        if(img===size*position && destroyed===0){
            destroyed=1;
            fired=0;
            score++;
            document.querySelector('#number').replaceChildren(score);
            console.log('tirer')
            console.log(position)
            document.querySelector('#enemy'+position).src= "./img/transparent.png";
            for(let i=1;i<6;i++){
                let delet=img+i;
                document.querySelector('#photo'+delet).src= "./img/transparent.png";
            }
            fire(img);
            setTimeout("spawn()",700);
        }
    }
}
function unfire(rocket){
    let rock=rocket
    console.log(rock)
    document.getElementById('photo'+rock).src = "./img/transparent.png";
}
function fire(img){
    fired=1;
    let rocket=img+1;
    document.getElementById('photo'+rocket).src = "./img/solid_snake_bulet.png";
   setTimeout(unfire,700,rocket);
}
document.addEventListener('keydown', logKey);
