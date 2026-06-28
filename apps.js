const slider = document.querySelector(".slider");

function next(){
    slider.scrollBy({
        left:300,
        behavior:"smooth"
    });
}

function prev(){
    slider.scrollBy({
        left:-300,
        behavior:"smooth"
    });
}