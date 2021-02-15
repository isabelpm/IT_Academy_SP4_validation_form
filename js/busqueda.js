const searching = document.getElementById("mySearch");

function search() {
    var acumErrores = 0;

    searching.classList.remove('is-invalid');

    var input_search = document.getElementById('input_search');

    if (input_search.value == "") {
        input_search.classList.add("is-invalid");
        document.getElementById("input_logIn").style.paddingTop = "20px";
        document.getElementById("errorSearch").textContent = "Aquest camp és obligatori!";
        acumErrores++;

    } else if (input_search.value.length < 3) {
        input_search.classList.add("is-invalid");
        document.getElementById("input_logIn").style.paddingTop = "20px";
        document.getElementById("errorSearch").textContent = "Ha de contenir més de 3 caràcters!";
        acumErrores++;
    }


    if (acumErrores > 0) {
        return false;
    } else if (acumErrores === 0) {
        return alert((`Hem trobar la paraula ${input_search.value}!`), input_search.value = "");
    }
}
