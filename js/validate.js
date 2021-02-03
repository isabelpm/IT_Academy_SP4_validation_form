const form = document.getElementById('myFormId');
const form2 = document.getElementById('myFormId2');


// --------------------------------- APARTADO LOGIN --------------------------------- //
function registerValidate() {
    let acumErrores = 0;
    // El botón onsubmit siempre actualiza la página cuando hacemos clic en él, el "event.preventDefault ();" detiene esta actualización y muestra todas las validaciones"
    event.preventDefault();

    form.classList.remove('is-invalid');

    // Variables del login
    let inputEmail1 = document.getElementById('inputEmail1');
    let inputPassword1 = document.forms["myForm"]["inputPassword1"];


    // Validación Login
    // Email 
    if (inputEmail1.value == "") {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("errorEmail1").textContent = "Si us plau posa el teu mail";
        acumErrores++;
    } else if (!validar_email(inputEmail1.value)) {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("errorEmail1").textContent = "Email no és correcte";
        acumErrores++;
    }

    // Contraseña 
    if (inputPassword1.value == "") {
        inputPassword1.classList.add("is-invalid");
        document.getElementById("errorPassword1").textContent = "Si us plau posa la teva contrasenya";
        acumErrores++;
    }
}


// --------------------------------- APARTADO REGISTRO --------------------------------- //

function registerValidate2() {
    let acumErrores2 = 0;
    // El botón onsubmit siempre actualiza la página cuando hacemos clic en él, el "event.preventDefault ();" detiene esta actualización y muestra todas las validaciones"
    event.preventDefault();

    // El botón onsubmit siempre actualiza la página cuando hacemos clic en él, el "event.preventDefault ();"detiene esta actualización y muestra todas las validaciones"    event.preventDefault();
    form2.classList.remove('is-invalid');

    // Variables del apartado registro
    let inputfirstName = document.getElementById('inputfirstName');
    let inputlastName = document.forms["myForm2"]["inputlastName"];
    let inputEmail2 = document.getElementById('inputEmail2');
    let inputPassword2 = document.forms["myForm2"]["inputPassword2"];
    let inputconfirmPassword = document.forms["myForm2"]["inputconfirmPassword"];
    let inputPhone = document.forms["myForm2"]["inputPhone"];
    let inputEntitat = document.forms["myForm2"]["inputEntitat"];
    let inputAddress = document.forms["myForm2"]["inputAddress"];
    let inputProvince = document.forms["myForm2"]["inputProvince"];
    let inputCity = document.forms["myForm2"]["inputCity"];
    let inputZip = document.forms["myForm2"]["inputZip"];
    let inputregister = document.forms["myForm2"]["gridCheck2"];

    // Validación del registro

    // Nombre 
    if (inputfirstName.value == "") {
        inputfirstName.classList.add("is-invalid");
        document.getElementById("errorfirstName").textContent = "Si us plau introdueix el teu nom";
        acumErrores2++;
    }

    // Apellido
    if (inputlastName.value == "") {
        inputlastName.classList.add("is-invalid");
        document.getElementById("errorlastName").textContent = "Si us plau introdueix el teu cognom";
        acumErrores2++;
    }

    // Email 
    if (inputEmail2.value == "") {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("errorEmail2").textContent = "Si us plau introdueix el teu mail";
        acumErrores2++;
    } else if (!validar_email(inputEmail2.value)) {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("errorEmail2").textContent = "Email és incorrecte";
        acumErrores2++;
    }

    // Contraseña
    if (inputPassword2.value == "") {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "Si us plau introdueix la contrasenya";
        acumErrores2++;
    }

    // Confirmació de contrasenya
    if (inputPassword2.value == "") {
        inputconfirmPassword.classList.add("is-invalid");
        document.getElementById("errorconfirmPassword").textContent = "Si us plau introdueix la contrasenya";
        acumErrores2++;
    }
    // Si la confirmación de la contraseña no es la misma que la contraseña
    if (inputconfirmPassword != inputPassword2.value) {
        inputconfirmPassword.classList.add("is-invalid");
        document.getElementById("errorconfirmPassword").textContent = "La contrasenya no es la mateixa";
        acumErrores2++;
    }

    // Telèfon
    if (inputPhone.value == "") {
        inputPhone.classList.add("is-invalid");
        document.getElementById("errorPhone").textContent = "Si us plau introdueix el teu telèfon";
        acumErrores2++;
    }

    // Entitat
    if (inputEntitat.value == "") {
        inputEntitat.classList.add("is-invalid");
        document.getElementById("errorEntitat").textContent = "Si us plau introdueix la teva entitat";
        acumErrores2++;
    }

    // Dirección 
    if (inputAddress.value == "") {
        inputAddress.classList.add("is-invalid");
        document.getElementById("errorAddress").textContent = "Si us plau introdueix la teva adreça";
        acumErrores2++;
    }

    // Provincias 
    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Si us plau introdueix la provincia";
        acumErrores2++;
    }

    // City 
    if (inputCity.value == "") {
        inputCity.classList.add("is-invalid");
        document.getElementById("errorCity").textContent = "Si us plau introdueix ciutat";
        acumErrores2++;
    }

    // CP 
    if (inputZip.value == "" || inputZip.length != 5) {
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "Si us plau introdueix el Codi postal";
        acumErrores2++;
    }

    // Política privacitat
    if (!gridCheck2.checked) {
        gridCheck2.classList.add("is-invalid");
        document.getElementById("errorCheck2").textContent = "Acceptes les bases";
        acumErrores2++;
    }

    if (acumErrores2 > 0) {
        return false;
    } else {
        return true;
    }
}

// ARROW FUNCTION
form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

form2.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

// EXPRESIONES REGULARES
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}