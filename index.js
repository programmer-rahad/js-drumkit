const playTheMusic = (e) => { 
    const key = document.querySelector('div[data-code="' + e.keyCode + '"]'); 
    if(!key) return; 
    const audio = document.createElement('audio'); 
    audio.src = "sounds/"+ e.keyCode +".wav";    
    audio.play();
    key.classList.add('animate');
    setTimeout(() => key.classList.remove('animate'),100);
}
document.addEventListener('keydown',playTheMusic);
const keys = document.querySelectorAll('.keys .key');
keys.forEach( function(key) {
    key.addEventListener('click',function() { 
        const audio = document.createElement('audio');
        audio.src = "sounds/"+ this.getAttribute('data-code') +".wav";    
        audio.play();
        key.classList.add('animate');
        setTimeout(() => key.classList.remove('animate'),100);
    });
});