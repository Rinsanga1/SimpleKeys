window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`div.key[data-key="${e.key}"]`);
    key.classList.add('keyPress');

    const keys = document.querySelectorAll('div.key');
    keys.forEach( key => {
        key.addEventListener('transitionend', (e)=>{
            key.classList.remove('keyPress');
        });
    });
});
