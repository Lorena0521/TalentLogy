const caracteresValidosName = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

const regexName = /^[a-zA-Z\s]{4,}$/;



document.addEventListener("DOMContentLoaded", function () {
  const inputNameError = document.getElementById('nameError');
  const btnSubmit = document.getElementById('submit');
  const InputName = document.getElementById('Inputname');


  InputName.addEventListener('keypress', (e) => {
    console.log(InputName.selectionStart);
    const currentKey = caracteresValidosName.indexOf(e.key) >= 0 ? e.key : ''
    const valueNameTmp = e.target.value + currentKey;
    let errorName = '';

    // validar minimo de caracteres 

    if (valueNameTmp.length < 4) errorName = 'El email debe tener 4 letras minimo';

    // validar veracidad del correo

    if (!regexName.test(valueNameTmp)) errorName = 'El email debe tener 4 letras minimo';
    btnSubmit.disabled = (!!errorName.length);
    inputNameError.innerText = errorName;
    console.log(e);
  })
  console.log(InputName);
})


const caracteresValidosEmail = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '_', '-', '@'
];

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputEmailError = document.getElementById('emailError');
const inputEmail = document.getElementById('InputEmail');
const Submit = document.getElementById('submit');


      inputEmail.addEventListener('keypress', (e) => {
        console.log(inputEmail.selectionStart);
        const currentKey = caracteresValidosEmail.indexOf(e.key) >= 0 ? e.key : ''
        const valueEmailTmp  = e.target.value + currentKey;
        let errorEmail = ''; 

        // validar minimo de caracteres 
        
        if (valueEmailTmp.length < 3) errorEmail = 'El email debe tener 3 letras minimo';

        // if (valueEmailTmp.length > 5) errorEmail = 'El email debe tener 5 letras máximo';
        // validar veracidad del correo
        
        if (!regexEmail.test(valueEmailTmp)) errorEmail = 'El email en inválido';
        Submit.disabled = (!!errorEmail.length);
        inputEmailError.innerText = errorEmail;
        console.log(e);
      })
      console.log(inputEmail);

      const caracteresValidos = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '_', '-', '@'
      ];
      
      const regexPassword = /^(?=.*[@*/\-+])(?=.*[A-Z])(?=.*[a-z])[\w@*/\-+]{8,}$/;
      
      document.addEventListener("DOMContentLoaded", function () {
        const inputPasswordError = document.getElementById('PasswordError');
        const btn = document.getElementById('submit');
        const password = document.getElementById('InputPassword');
      
        password.addEventListener('input', (e) => {
          const valuePasswordTmp = e.target.value;
          let passwordError = '';
      
          // Validar longitud de la contraseña
          if (valuePasswordTmp.length < 8) passwordError = 'La contraseña debe tener al menos 8 caracteres';
      
          // Validar veracidad de la contraseña
          if (!regexPassword.test(valuePasswordTmp)) {
            passwordError = 'La contraseña debe tener al menos uno de estos caracteres @/*.-_, además una letra en mayúscula, una letra en minúscula, y no debe tener espacios';
          }
      
          btn.disabled = (!!passwordError.length);
          inputPasswordError.innerText = passwordError;
        });
      });
      