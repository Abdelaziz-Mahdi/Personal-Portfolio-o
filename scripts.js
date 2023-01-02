const menuBtn = document.getElementById('menu');
const closeMenu = document.getElementById('mMenu');
const menuCo = document.getElementById('mBody');
const mBtnHello = document.getElementById('mBtnHello');
const mBtnPortfolio = document.getElementById('mBtnPortfolio');
const mBtnAbout = document.getElementById('mBtnAbout');
const mBtnContact = document.getElementById('mBtnContact');

mBtnHello.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

mBtnPortfolio.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

mBtnAbout.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

mBtnContact.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
  menuCo.style.display = 'block';
});

const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenSize(i) {
  if (i.matches) {
    menuCo.style.display = 'none';
  }
}
mediaQuery.addListener(screenSize);
