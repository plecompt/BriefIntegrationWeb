let mobile = false; //if we are in mobile view

document.querySelectorAll('[fontSize]').forEach(function(el) {
    el.style.setProperty('--fontSize', el.getAttribute('fontSize') + 'px');
});

document.querySelectorAll('[fontWeight]').forEach(function(el) {
    el.style.setProperty('--fontWeight', el.getAttribute('fontWeight'));
});

function changeImages(desktop) {
    let images = document.querySelectorAll('div.image-container > img');
    
    if(desktop){
        images[0].src = "/assets/img-gallerie-pink.png";
        images[1].src = "/assets/img-gallerie-street.png";
        images[2].src = "/assets/img-gallerie-group.png";
        images[3].src = "/assets/img-gallerie-kid-1.png";
        images[4].src = "/assets/img-gallerie-man.png";
        images[5].src = "/assets/img-gallerie-jorja.png";
    }else{
        images[0].src = "/assets/img-gallerie-pink-1.png";
        images[1].src = "/assets/img-gallerie-street-1.png";
        images[2].src = "/assets/img-gallerie-group-1.png";
        images[3].src = "/assets/img-gallerie-kid-1.png";
        images[4].src = "/assets/img-gallerie-man-1.png";
        images[5].src = "/assets/img-gallerie-jorja-1.png";
    }
}    

//on load, if width < 850px => mobile pictures, else normal ones.
window.addEventListener('load', () => {
    var width = window.innerWidth;
    
    if (width < 850){
        mobile=true;
        changeImages(0);
    } //else is default.
});


//on resize, checking if we need to change images.
window.addEventListener("resize", function() {

    if (window.innerWidth < 850) {
        if (!mobile){
            changeImages(0);
            mobile = true;
        }
    } else {
        if (mobile){
            changeImages(1);
            mobile = false;
        }
    }
});