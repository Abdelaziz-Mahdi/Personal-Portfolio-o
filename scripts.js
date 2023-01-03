const menuBtn = document.getElementById('menu');
const closeMenu = document.getElementById('mMenu');
const menuCo = document.getElementById('mBody');
const mBtnHello = document.getElementById('mBtnHello');
const mBtnPortfolio = document.getElementById('mBtnPortfolio');
const mBtnAbout = document.getElementById('mBtnAbout');
const mBtnContact = document.getElementById('mBtnContact');
const bodyVis = document.getElementById('ani');

mBtnHello.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

mBtnPortfolio.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

mBtnAbout.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

mBtnContact.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

menuBtn.addEventListener('click', () => {
  menuCo.style.display = 'block';
  bodyVis.style.position = 'sticky';
  bodyVis.style.overflow = 'hidden';
});

const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenSize(i) {
  if (i.matches) {
    menuCo.style.display = 'none';
    bodyVis.style.position = 'static';
    bodyVis.style.overflow = 'auto';
  }
}
mediaQuery.addListener(screenSize);
