const decor = document.getElementById('decorBehindTitlePhoto');
const el = document.getElementById('titlePhoto');

decor.style.top = ((el.getBoundingClientRect().top + document.documentElement.scrollTop - 30) + 'px');
decor.style.left = ((el.getBoundingClientRect().left + (el.clientWidth * 0.7))) + 'px';

const decor2 = document.getElementById('decorHeroServices');
const el2 = document.getElementById('services');

decor2.style.top = ((el2.getBoundingClientRect().top + document.documentElement.scrollTop - decor2.clientHeight + 50)) + 'px';
decor2.style.left = (-50) + 'px';

const decor3 = document.getElementById('decorServices');
const el3 = document.getElementById('serviceCard');

decor3.style.top = ((el3.getBoundingClientRect().top + document.documentElement.scrollTop - 30)) + 'px';
decor3.style.left = ((el3.getBoundingClientRect().right - (decor3.clientWidth * 0.85))) + 'px';


const decor4 = document.getElementById('decorHeroServices2');
const el4 = document.getElementById('services');

decor4.style.top = ((el4.getBoundingClientRect().top + document.documentElement.scrollTop - 50)) + 'px';
decor4.style.right = (-50) + 'px';