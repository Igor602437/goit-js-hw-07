const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  const inputText = event.currentTarget.value;

  if (inputText.trim() === '') {
    outputName.textContent = 'Anonymous';
  } else {
    const outputText = event.currentTarget.value.trim();
    outputName.textContent =
      outputText.charAt(0).toUpperCase() + outputText.slice(1);
  }
});
