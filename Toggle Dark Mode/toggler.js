var dark = false;
var toggler = document.getElementById('switch');
var slider = document.getElementById('slider');
function toggle(){
    if(dark == false){
        slider.style.transform = "translateX(1.75cm)";
        slider.style.backgroundColor = "white";
        toggler.style.backgroundColor = "black";
        toggler.style.border = "2px solid white";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        dark = true;
    }
    else{
        slider.style.transform = "translateX(0cm)";
        slider.style.backgroundColor = "black";
        toggler.style.backgroundColor = "white";
        toggler.style.border = "2px solid black";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark = false;
    }
}
toggler.addEventListener('click',toggle);