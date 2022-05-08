var color = ['#29a329','#ff4d4d','#00ccff','#ff9933'];
       
var shapes = ['<i class="fa-solid fa-square"></i>', '<i class="fa-solid fa-play"></i>', '<i class="fa-solid fa-circle"></i>'];

var colInd = 0; var sapInd = 0;

document.getElementById('colorChanger').onclick = function(){
    if(colInd < color.length-1) colInd++;
    else colInd = 0;
    var outer = document.getElementsByClassName('outer');
    outer[0].style.backgroundColor = color[colInd];
};
document.getElementById('shapeChanger').onclick = function(){
    if(sapInd < shapes.length-1) sapInd++;
    else sapInd = 0;
    var outer = document.getElementsByClassName('outer');
    outer[0].innerHTML = shapes[sapInd];
};
