const div = document.getElementById('mobileHero');
const navh = document.getElementById('navbar');

div.style.paddingTop = ((navh.clientHeight + 30) + 'px');

console.log(navh.clientHeight);
console.log(div.style.paddingTop);