const header = document.querySelector('.header');

document.addEventListener('mousemove', (event) => {
  if (header) {
    if (event.clientY < 100) { // adjust this value to change the threshold
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
    }
  } else {
    console.error('Header element not found');
  }
});

// Add event listener to toggle the side menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.side-menu').classList.toggle('open');
  document.querySelector('.menu-items').classList.toggle('show');
  this.classList.toggle('rotate');
});

