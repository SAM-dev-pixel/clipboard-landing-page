// color mode
const html = document.querySelector('html');
const colorMode =(btnMode)=> {
  btnMode.addEventListener('click', () => {
    if(html.dataset.mode === 'light') {
      html.dataset.mode = 'dark';
      btnMode.className = 'bx bx-sun';
    } else {
      html.dataset.mode = 'light';
      btnMode.className = 'bx bx-moon';
    }
  });
}
colorMode(document.querySelector('.color-mode i'));

// name src image as alt
const images = document.querySelectorAll('img');
for(img of images) {
  const imgSrc = img.getAttribute('src').slice(4, -4).replace(/\W/g, ' ');
  img.alt = imgSrc;
}