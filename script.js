let count=0;
function changetheme(){
    count++;
    if(count%2==1){ 
        document.querySelector('#theme-container').style.justifyContent="flex-end";
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('body').style.color="#f5f0e1";
        document.querySelector('#theme-container').style.border='solid #f5f0e1';
        document.querySelector('#theme-actif').style.backgroundColor='#f5f0e1';
        document.querySelector('#theme-actif').style.color='black';
        document.querySelector('#contact').style.border='solid #f5f0e1 10px';
        document.querySelector('#about').style.border='solid #f5f0e1 10px';
        document.querySelector('#head').style.backgroundColor='black';
        document.querySelector('#onghome').style.color='#f5f0e1';
        document.querySelector('#ongcv').style.color='#f5f0e1';
        document.querySelector('#ongpro').style.color='#f5f0e1';
        document.querySelector('#ongcon').style.color='#f5f0e1';

    }else{
        document.querySelector('#theme-container').style.justifyContent="flex-start";
        document.querySelector('body').style.backgroundColor='#f5f0e1';
        document.querySelector('body').style.color="black";
        document.querySelector('#theme-container').style.border='solid black';
        document.querySelector('#theme-actif').style.backgroundColor='black';
        document.querySelector('#theme-actif').style.color='#f5f0e1';
        document.querySelector('#contact').style.border='solid black 10px';
        document.querySelector('#about').style.border='solid black 10px';
        document.querySelector('header').style.backgroundColor='#f5f0e1';
        document.querySelector('#onghome').style.color='black';
        document.querySelector('#ongcv').style.color='black';
        document.querySelector('#ongpro').style.color='black';
        document.querySelector('#ongcon').style.color='black';
    }
}