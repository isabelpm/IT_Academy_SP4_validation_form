// Llamamos al ID del formulario al javascript
const searching = document.getElementById("mySearch");

function search() {
    // variables que acumula errores. Si los encuentra no se valida y no se envía
    var acumErrores = 0; 
    // Este método quita la clase is-invalid
    searching.classList.remove('is-invalid'); 
    var input_search = document.getElementById('input_search');

        if (input_search.value == "") {
            input_search.classList.add("is-invalid");
            document.getElementById("input_logIn");
            document.getElementById("errorSearch").textContent = "Aquest camp es obligatori!";
            acumErrores++;
        } else if (input_search.value.length < 4) {
            input_search.classList.add("is-invalid");
            document.getElementById("input_logIn").style.paddingTop = "20px";
            document.getElementById("errorSearch").textContent = "Ha de ser major de 3 caràcters!";
            acumErrores++;
        }


    if (acumErrores > 0) {
        return false;
    } else if (acumErrores === 0) {
        return alert((`Hem trobat la búsqueda ${input_search.value}!`), input_search.value = "");
    }
}