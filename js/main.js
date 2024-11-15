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

