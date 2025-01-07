document.addEventListener('DOMContentLoaded', () => {
  const menutop = document.querySelector('.top-menu');
  const nav = document.querySelector('.nav');
  const stars = document.querySelectorAll('.stars');
  const avistxtWrap = document.querySelectorAll('.avistxt-wrapper');
  const avistxt = document.querySelector('.avistxt');
  const btnAvisLeft = document.querySelector('.btnleft');
  const btnAvisRight = document.querySelector('.btnright');
  const spons = document.querySelector('.spons');

  menutop.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      nav.style.transition = '200ms ease';
      menutop.classList.remove('change');
      menutop.style.transition = '200ms ease';
    } else {
      nav.classList.add('active');
      menutop.classList.add('change');
    }
  })

  stars.forEach((starElem) => {
    starElem.addEventListener('click', () => {
      starElem.style.color = 'yellow';
    })
  })

  console.log(window.innerWidth); // largeur de l'écran
  var widthContain = avistxt.clientWidth; //largeur de l'ecran actuel
  console.log(widthContain);

  btnAvisLeft.addEventListener('click', () => {
    console.log('button left clicked...');
    avistxt.scrollTo({left: 0})
  })
  btnAvisRight.addEventListener('click', () => {
    console.log('button right clicked...');
    avistxt.scrollTo({left: widthContain});
  })

  function scrolauto() {
    setInterval(() => {
      spons.scrollTo({left: spons.clientWidth});
      console.log('interval');
    }, 1000);
    
  }
})