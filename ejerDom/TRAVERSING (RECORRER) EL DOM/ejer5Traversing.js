
        const validar = /^[a-zA-Z]{4,}$/;



        document.addEventListener("DOMContentLoaded", function () {
            const inputNameError = document.getElementById('nameError'); //validar error
            const btnSubmit = document.getElementById('submit');//boton
            const name = document.getElementById('Name').value; //nombre

            name.addEventListener('keypress', (e) => {
                console.log(name.selectionStart);
                const name = e.target.value;
                let nameError = '';


                if (validar.length < 4) nameError = 'El nombre debe tener 4 letras minimo';

                // validar veracidad del correo

                if (!validar.test(valueName)) nameError = 'no puede tener los caracteres @/*.-_';
                btnSubmit.disabled = (!!nameError.length);
                inputNameError.innerText = nameError;
                console.log(e);
            });
            console.log(name);

            const caracteresValidos = [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '_', '-', '@'
              ];
              
              const validar = /^(?=.*[@*/\-+])(?=.*[A-Z])(?=.*[a-z])[\w@*/\-+]{8,}$/;

            document.addEventListener("DOMContentLoaded", function () {
                const inputEmailError = document.getElementById('emailError');
                const btnSubmit = document.getElementById('submit');
                const email = document.getElementById('email').value; 
    
                email.addEventListener('keypress', (e) => {
                    console.log(email.selectionStart);
                    const email = e.target.value;
                    let emailError = '';
    
    
                    if (caracteresValidos.length < 8) emailError = 'El nombre debe tener 8 letras minimo';
    
                    // validar veracidad del correo
    
                    if (!validar.test(valueName)) emailError = 'debe tener al menos alguno de estos caracteres @/*.-_';
                    btnSubmit.disabled = (!!emailError.length);
                    inputEmailError.innerText = emailError;
                    console.log(e);
                });
                console.log(email);
            })
        })
