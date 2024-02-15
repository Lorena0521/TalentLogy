
        document.addEventListener('DOMContentLoaded', function () {
            var validar = /^[a-zA-Z]{4,}$/;

            var nombreInput = document.getElementById("nombreInput");
            var nombreError = document.getElementById("nombreError");

            nombreInput.addEventListener('input', function () {
                if (!validar.test(nombreInput.value)) {
                    nombreError.textContent = 'El nombre debe tener al menos 4 letras';
                    nombreInput.classList.add('errorInput');
                    nombreError.classList.add('errorMessage');
                }
                else {
                    nombreError.textContent = '';
                    nombreInput.classList.remove('errorInput');
                    nombreError.classList.remove('errorMessage');
                }
            });
console.log(nombreInput.value);
            var password = /^(?=.*[\/*@$#,])(?=.*\d)[\w\/*@$#,]{8,}$/;

            var passwordInput = document.getElementById("passwordInput");
            var passwordError = document.getElementById("passwordError");

            passwordInput.addEventListener('input', function () {
                if (!password.test(passwordInput.value)) {
                    passwordError.textContent = 'Debe tener al menos 8 letras y incluir al menos uno de estos caracteres: /*@.#$';
                    nombreInput.classList.add('errorInput');
                    nombreError.classList.add('errorMessage');
                }
                else {
                    passwordError.textContent = '';
                    nombreInput.classList.remove('errorInput');
                    nombreError.classList.remove('errorMessage');
                }
            });

        });