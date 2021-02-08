// SPRINT 4 - EXERCICE FORM VALIDATION
// LEVEL 1 


// =================================== FORM VALIDATION LOGIN ===================================

const form = document.getElementById('myFormId');

function registerValidate() {
    let acumErrores = 0;

    // // // The onsubmit button always refresh the page when we click on it, the "event.preventDefault();" stops this refresh and show up all the validations"
    event.preventDefault();
    form.classList.remove('is-invalid');

    // ======= Login variables =======
    let inputEmail1 = document.getElementById('inputEmail1');
    let inputPassword1 = document.forms["myForm"]["inputPassword1"];


    // ======= Login validation =======

    // Email validation
    if (inputEmail1.value == "") {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("errorEmail1").textContent = "Si us plau introdueix un mail";
        acumErrores++;
    } else if (!validarEmail(inputEmail1.value)) {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("errorEmail1").textContent = "Email incorrecte";
        acumErrores++;
    }

    // Password validation
    if (inputPassword1.value == "") {
        inputPassword1.classList.add("is-invalid");
        document.getElementById("errorPassword1").textContent = "Si us plau introdueix la contrasenya";
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

// ================== LEVEL 2 ==================

// Use regular expression to make the email / password more secure

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}


function validarPassword (inputPassword1){
    //Debe tener 1 mayúscula, 1 minúscula, 1 número y 8 carácteres cómo mínimo.
    let invalid = true;
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if (passwordRegex.test(inputPassword1)) {
        invalid = false;
        console.log('password vàlid')
    } else {
        console.log('password incorrecte')
    }
    return invalid; //Devolvemos true o false si cumple o no la validación. 
}


// =================================== FORM VALIDATION REGISTRER ===================================

const form2 = document.getElementById('myFormId2');

function registerValidate2() {
    let acumErrores2 = 0;
    
    // // The onsubmit button always refresh the page when we click on it, the "event.preventDefault();" stops this refresh and show up all the validations"
    event.preventDefault();
    form2.classList.remove('is-invalid');

    // =================== Resgister variables =========================
    let inputfirstName         = document.getElementById('inputfirstName');
    let inputlastName          = document.getElementById('inputlastName');
    let inputEmail2            = document.getElementById('inputEmail2');
    let inputPassword2         = document.forms["myForm2"]["inputPassword2"];
    let inputconfirmPassword   = document.forms["myForm2"]["inputconfirmPassword"];
    let inputPhone             = document.forms["myForm2"]["inputPhone"];
    let inputAddress           = document.forms["myForm2"]["inputAddress"];
    let inputProvince          = document.forms["myForm2"]["inputProvince"];
    let inputCity              = document.forms["myForm2"]["inputCity"];
    let inputZip               = document.forms["myForm2"]["inputZip"];
    let inputregister          = document.forms["myForm2"]["gridCheck2"];


    // ======= Registrer validation =======

    // Name 
    if (inputfirstName.value == "") {
        inputfirstName.classList.add("is-invalid");
        document.getElementById("errorfirstName").textContent = "Si us plau introdueix un nom";
        acumErrores2++;
    }

    // Last name 
    if (inputlastName.value == "") {
        inputlastName.classList.add("is-invalid");
        document.getElementById("errorlastName").textContent = "Si us plau introdueix un cognom";
        acumErrores2++;
    }

    // Email 
    if (inputEmail2.value == "") {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("errorEmail2").textContent = "Si us plau introdueix un mail";
        acumErrores2++;
    } else if (!validarEmail(inputEmail2.value)) {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("errorEmail2").textContent = "Email es incorrecte";
        acumErrores2++;
    }

    // Password
    if (inputPassword2.value == "") {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "Si us plau introdueix la contrasenya";
        acumErrores2++;
    }

    // Password confirmation
    if (inputPassword2.value == "") {
        inputconfirmPassword.classList.add("is-invalid");
        document.getElementById("errorconfirmPassword").textContent = "Si us plau introdueix la contrasenya";
        acumErrores2++;
    }
    // If the password confirmation is not the same as the password
    if (inputconfirmPassword != inputPassword2.value) {
        inputconfirmPassword.classList.add("is-invalid");
        document.getElementById("errorconfirmPassword").textContent = "La contrasenya es incorrecte";
        acumErrores2++;
    }

    // Phone
    if (inputPhone.value == "") {
        inputPhone.classList.add("is-invalid");
        document.getElementById("errorPhone").textContent = "Si us plau introdueix un telèfon";
        acumErrores2++;
    }

    // Address 
    if (inputAddress.value == "") {
        inputAddress.classList.add("is-invalid");
        document.getElementById("errorAddress").textContent = "Si us plau introdueix una adreça";
        acumErrores2++;
    }

    // Province 
    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Si us plau introdueix una provincia";
        acumErrores2++;
    }

    // City 
    if (inputCity.value == "") {
        inputCity.classList.add("is-invalid");
        document.getElementById("errorCity").textContent = "Si us plau introdueix una ciutat";
        acumErrores2++;
    }

    // Zip 
    if (inputZip.value == "" || inputZip.length != 5) {
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "Si us plau introdueix un Codi postal";
        acumErrores2++;
    }

    // Privacy Policy 
    if (!gridCheck2.checked) {
        gridCheck2.classList.add("is-invalid");
        document.getElementById("errorCheck2").textContent = "Acepta les bases";
        acumErrores2++;
    }

    if (acumErrores2 > 0) {
        return false;
    } else {
        return true;
    }
}

form2.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);


// // Utilizamos expresiones regulares para comprobar que el email introducido es válido
// function validarEmail(email) {
//     var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return regex.test(email) ? true : false;
// }
