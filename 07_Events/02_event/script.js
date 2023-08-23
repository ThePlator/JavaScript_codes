// const a = document.querySelector('h1');

// a.addEventListener('click', () => alert('Hii'));

const bulb = document.querySelector('.bulb');
const btn = document.querySelector('button');
let flag = 0;
btn.addEventListener('click', function () {
  if (flag === 0) {
    bulb.style.backgroundColor = 'yellow';
    btn.innerHTML = 'OFF';
    flag = 1;
  } else {
    bulb.style.backgroundColor = 'white';
    btn.innerHTML = 'ON';
    flag = 0;
  }
});

const page = document.querySelector('.main');

bulb.addEventListener('mouseover', () => {
  page.style.backgroundColor = bulb.style.backgroundColor;
});

bulb.addEventListener('mouseout', () => {
  if (flag === 1) {
    page.style.backgroundColor = 'white';
  }
});
