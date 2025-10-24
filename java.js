// let navBar = document.querySelector('#nav')
// let burger = document.querySelector('#burger')

// navBar.addEventListener('click', ()=> {
//         burger.classList.toggle('active');
// })


function Menu(e) {
  const list = document.querySelector('#burger');

  if (e.name === 'menu') {
    e.name = 'close';
    list.classList.add('top-[110px]');
    list.classList.add('opacity-100');
  } else {
    e.name = 'menu';
    list.classList.remove('top-[110px]');
    list.classList.remove('opacity-100');
  }
}
