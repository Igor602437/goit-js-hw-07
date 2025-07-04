const registerForm = document.querySelector('.login-form');

const checkForm = event => {
  event.preventDefault();

  const formData = {
    email: registerForm.elements.email.value.trim(),
    password: registerForm.elements.password.value.trim(),
  };

  // console.log(formData.email);
  if (formData.email.trim() === '' || formData.password.trim() === '') {
    return alert('All form fields must be filled in');
  }

  console.log(formData);

  registerForm.reset();
};

registerForm.addEventListener('submit', checkForm);
