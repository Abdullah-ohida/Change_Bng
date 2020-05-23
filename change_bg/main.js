// Declearing variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const reload = document.querySelector('.active')
btn.addEventListener('click', function(){
    // get random num and alpha in my arr
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomColor()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


reload.addEventListener('click', function(){
    location.reload('hex.html')
})

function getRandomColor(){
    return Math.floor(Math.random() * hex.length);
}
