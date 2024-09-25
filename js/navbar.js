//  navbar blar 

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('header-blar');
  if (window.scrollY > 50) {
    navbar.classList.add('backdrop-blur-md', 'bg-opacity-50');
  } else {
    navbar.classList.remove('backdrop-blur-md', 'bg-opacity-50');
  }
});
