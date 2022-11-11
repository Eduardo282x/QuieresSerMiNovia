function moverBtn(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 
    'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 
    'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let modoSexo = document.getElementsByClassName('modo_sex')[0];

btnNo.addEventListener('mouseenter',function(e){
    moverBtn(e.target)
});

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirias que si');
    modoSexo.style.display = 'block';
    const cancion = new Audio('img\\ABBA Eminem mix(MP3_128K).mp3')
    cancion.play();
})