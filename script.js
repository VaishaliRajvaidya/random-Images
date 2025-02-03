
const btn = document.querySelector("button")
btn.addEventListener("click",function(){
var images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWODQuV9xmuhwJkwvviq2sxisGk4YrlOpuuA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZS-1Ks6PYW2wXFtOH7lpOlETdr6dMJh5qg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZGHK7MVl9bflZWyk9AeWHiE48jhADoYUmQ&s'

];
const randomImage = document.createElement("img")
   
randomImage.src=images[Math.floor( (Math.random()*images.length))];
var RandomX = Math.floor(Math.random()*90);
var RandomY = Math.floor(Math.random()*90);
var Rotate = Math.floor(Math.random()*360);

randomImage.style.position ="absolute";
randomImage.style.top = RandomX + "%";
randomImage.style.left = RandomY + "%";
randomImage.style.transform = `rotate( ${Rotate}deg)`;
randomImage.style.height
    

document.body.appendChild(randomImage)


})