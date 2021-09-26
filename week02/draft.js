const btn = document.getElementById('button');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
const number = ['1','2','3','4','5','6','7'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
    document.body.style.text = number[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);
