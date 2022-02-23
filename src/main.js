const nav = document.querySelector('.nav');
const toggler = document.querySelector('.nav__toggler');

toggler.addEventListener('click', function() {
  console.log(nav);
  console.dir(nav);
  nav.classList.toggle('nav--open');
});
