const inputName = document.querySelector('#name-input');
console.log(inputName.textContent);
const outputName = document.querySelector('#name-output');
console.log(outputName);

inputName.addEventListener('input', event => {
  const inputText = event.currentTarget.value;
  console.log(inputText);
  if (inputText.trim() === '') {
    outputName.textContent = 'Anonymous';
  } else {
    const outputText = event.currentTarget.value.trim();
    outputName.textContent =
      outputText.charAt(0).toUpperCase() + outputText.slice(1);
  }
});
