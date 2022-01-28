let combinaison=[];
let combinaisoncolor=[]

function associatecolor(){
    for (let i=0;i<4;i++){
        if(combinaison[i]===0){
            combinaisoncolor[i]='black'
        }else if(combinaison[i]===1){
            combinaisoncolor[i]='yellow'
        }else if(combinaison[i]===2){
            combinaisoncolor[i]='green'
        }else if(combinaison[i]===3){
            combinaisoncolor[i]='blue'
        }else if(combinaison[i]===4){
            combinaisoncolor[i]='red'
        }else if(combinaison[i]===5){
            combinaisoncolor[i]='white'
        }
    }
}

let color=[];
for(let i=0;i<20;i++){
    color[i]=0;
}
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

function initialise(){
    for(let i=0;i<4;i++){
        combinaison[i]=getRandomInt(0,5);
    }
    console.log(combinaison);
    associatecolor();
    console.log(combinaisoncolor);
};

function check(id){
    console.log(color)
    let index=[0,0,0,0];
    for(let i=0;i<4;i++){
        let couple=id+i;
        console.log('le couple pour '+i+'est'+color[couple])
        if(color[couple] %6 ===combinaison[i]){
            index[i]=1;
        }else index[i]=3;
        
    }
    
    let verif=[0,0,0,0]
    for(let i=0;i<4;i++){
        if(index[i]===3){
            console.log('on rentre dans rouge'+i);
            let couple=id+i;
            for(let j=0;j<4;j++){
                if(color[couple]===combinaison[j] && verif[j]===0 && index[j]!=1){
                    console.log('on rentre aussi'+j);
                    verif[j]=1;
                    index[i]=2;
                }else;
            }
        }
    }
    console.log(index)
    console.log(verif)
    for(let i=0;i<4;i++){
        let couple =id+i;
        if (index[i]===1){
            document.getElementById('here'+couple).style.backgroundColor = 'white';
        }else if(index[i]===2){
            document.getElementById('here'+couple).style.backgroundColor = 'red';
        }else if(index[i]===3){
            document.getElementById('here'+couple).style.backgroundColor = 'black';
        }
    }
    let good=0;
    for(let i=0;i<4;i++){
        if (index[i]===1){
            good++;
        }
    }
    console.log(good)
    if(good===4){
        document.getElementById('answer').replaceChildren('Vous avez gagné, Bravo');
    }
}

function doclick(id){
    console.log(color[id]%6)
    if (color[id]%6===0){
        document.getElementById('photo'+id).style.backgroundColor = 'yellow';
    }else if (color[id]%6===1){
        document.getElementById('photo'+id).style.backgroundColor = 'green';
    }else if (color[id]%6===2){
        document.getElementById('photo'+id).style.backgroundColor = 'blue';
    }else if (color[id]%6===3){
        document.getElementById('photo'+id).style.backgroundColor = 'red';
    }else if (color[id]%6===4){
        document.getElementById('photo'+id).style.backgroundColor = 'white';
    }else if (color[id]%6===5 ||color[id]%6===-1){
        document.getElementById('photo'+id).style.backgroundColor = 'black';
    }
    color[id]++;
    console.log(color);
}

initialise();