const container = document.getElementById("container");
const box = document.getElementById("box");

container.onmousemove = function (e) {

    let x = e.x;
    let y = e.y;

    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);

    box.style.left = x + 'px';
    box.style.top = y + 'px';

    var newBox = document.createElement("div");
    newBox.className = 'box'
    container.appendChild(newBox)
    newBox.style.left = x + 'px';
    newBox.style.top = y + 'px';

    newBox.style.background = `rgb(${r},${g},${b})`

}