function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  widget: document.querySelector('.widget'),
  changeBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

const newColor = event => {
  const colorChange = {
    box: ref.widget.style,
    span: ref.spanColor.style, //,
  };

  const newColor = getRandomHexColor();

  colorChange.box.backgroundColor = newColor;
  colorChange.span.color = newColor;
  // console.log(colorChange.box.backgroundColor);
  // console.log(ref.widget.style.backgroundColor);
};

ref.changeBtn.addEventListener('click', newColor);
