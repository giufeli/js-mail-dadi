

const accountLogin = ['mariorossi@gmail.com', 'lucabianchi@gmail.com', 'mariaverdi@gmail.com', 'lauraneri@gmail.com'];
const bottoneLogin = document.querySelector(".login")
const accessoDiv = document.querySelector('.accesso');

bottoneLogin.addEventListener('click', function () {
    resultEmail = document.getElementById("email").value;
    

    if (accountLogin.includes(resultEmail)){
        console.log('Accesso consentito!');
        accessoDiv.innerHTML += `<div class="consentito" >Accesso consentito :)</div>`;
    } else{
        console.log('Accesso negato');
        accessoDiv.innerHTML += `<div class="negato">Accesso negato! :(</div>`;
    }
});


const bottoneGenera = document.querySelector(".genera")

bottoneGenera.addEventListener('click', function () {
    const playerPoint = document.querySelector(".playerPoint").innerHTML = Math.floor(Math.random() *6) +1;
    const computerPoint = document.querySelector(".computerPoint").innerHTML = Math.floor(Math.random() *6) +1;
    const resultPoint = document.querySelector('.result')

    if (playerPoint === computerPoint){
        console.log('C\'è stato un pareggio')
        resultPoint.innerHTML += `<div class="pareggio" >Pareggio</div>`;
    }else if (playerPoint > computerPoint){
        console.log('Ha vinto il giocatore!')
        resultPoint.innerHTML += `<div class="vinto" >Hai Vinto!</div>`;
    } else if (computerPoint > playerPoint){
        console.log('Ha vinto il computer!')
        resultPoint.innerHTML += `<div class="perso" >Hai perso :(</div>`;
    }
    

});
