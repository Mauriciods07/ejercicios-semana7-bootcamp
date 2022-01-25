const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

const mostrarResultado = (operacion, n1, n2, resultado) => {
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${n1} y ${n2} es ${resultado}`;
    document.body.appendChild(respuesta);
}

export { 
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
}