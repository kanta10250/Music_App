window.addEventListener('load', ()  => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    console.log('て', sounds);

    //Lets get going with trh Sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].play();
        });
    });
});
