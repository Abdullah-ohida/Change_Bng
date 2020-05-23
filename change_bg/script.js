// Declearing variables
const colors = ["#f1f5f8",'green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const reload = document.querySelector('.active')
btn.addEventListener('click', function(){
    // get random number btw 0 - 3
    const randomNumber = getRandomColor();
    // changing the background color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

reload.addEventListener('click', function(){
    location.reload('index.html')
})
// Function to get random number from colors
let getRandomColor = function(){
    return (Math.floor(Math.random() * colors.length));
}