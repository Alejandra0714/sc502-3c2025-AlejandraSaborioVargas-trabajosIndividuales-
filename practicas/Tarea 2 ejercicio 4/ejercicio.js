document.getElementById("verificarEdad").addEventListener("click", function() {
    let edad = document.getElementById("edadInput").value;
    let mensaje = "";

    if (edad >= 18) {
        mensaje = "✅ Eres mayor de edad";
        document.getElementById("resultado").classList.add("text-success");
        document.getElementById("resultado").classList.remove("text-danger");
    } else {
        mensaje = "❌ Eres menor de edad";
        document.getElementById("resultado").classList.add("text-danger");
        document.getElementById("resultado").classList.remove("text-success");
    }

    document.getElementById("resultado").innerHTML = mensaje;
});