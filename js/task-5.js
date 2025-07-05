function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  body: document.querySelector('body'),
  changeBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

const newColor = event => {
  const colorChange = {
    box: ref.body.style,
    span: ref.spanColor,
  };
  const newColor = getRandomHexColor();

  colorChange.box.backgroundColor = newColor;
  colorChange.span.textContent = newColor;
};

ref.changeBtn.addEventListener('click', newColor);
