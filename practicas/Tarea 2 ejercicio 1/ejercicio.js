function calcularDeducciones() {
    let salarioBruto = parseFloat(document.getElementById("salario").value);
    
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        alert("Ingrese un salario válido");
        return;
    }
    
    let cargasSociales = salarioBruto * 0.105; // 10.5% de cargas sociales
    let impuestoRenta = salarioBruto > 941000 ? (salarioBruto - 941000) * 0.15 : 0; // Ejemplo de cálculo de renta
    let salarioNeto = salarioBruto - cargasSociales - impuestoRenta;
    
    document.getElementById("cargas").textContent = cargasSociales.toFixed(2);
    document.getElementById("renta").textContent = impuestoRenta.toFixed(2);
    document.getElementById("neto").textContent = salarioNeto.toFixed(2);
}