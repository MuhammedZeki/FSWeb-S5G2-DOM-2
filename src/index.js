import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  img.addEventListener('mouseenter', (e) => {
    img.classList.add('grayscale');
    e.preventDefault();
  });
  img.addEventListener('mouseleave', (e) => {
    img.classList.remove('grayscale');
    e.preventDefault();
  });
});

const body = document.body;
window.addEventListener('keydown', (e) => {
  if (e.key === '1') {
    body.classList.add('theme1');
    body.classList.remove('theme2', 'theme3');
  } else if (e.key === '2') {
    body.classList.add('theme2');
    body.classList.remove('theme1', 'theme3');
  } else if (e.key === '3') {
    body.classList.add('theme3');
    body.classList.remove('theme1', 'theme2');
  } else if (e.key === 'Escape') {
    body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

