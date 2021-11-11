
const header = document.querySelector('.header');

window.addEventListener('scroll', function(e) {
  const scrollHeaderFromTop = document.querySelector('html').scrollTop;
  header.classList.add('header__fixed');
  header.style.background = scrollHeaderFromTop > 600 ? "#F4EC98" : "#FFFFFF";
  if (scrollHeaderFromTop < 600) {
    header.classList.remove('header__fixed');
  }
});

document.getElementsByClassName('burger').onclick = function(){
  open()
};

function open{
  document.getElementsBycClassName("menu__list").classList.toggle("show");

  const menuElement = document.getElementsBycClassName("menu__list");
  menuElement.classList.toggle("show");
}
