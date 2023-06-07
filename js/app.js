function toggleMode() {
  // toggle the .light class on the html element
  const html = document.documentElement;
  html.classList.toggle('light');

  // change avatar image based on light/dark mode
  const img = document.querySelector('.profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    img.setAttribute('src', './assets/avatar-dark.png');
  }
}
