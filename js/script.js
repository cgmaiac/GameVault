const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
    }
});


function calcularFrete(valor) {
    let frete;

    if (valor >= 200) {
        frete = 0;
    } else {
        frete = 25;
    }

    return frete;
}


const valorCompra = document.getElementById("valor-compra");
const botaoFrete = document.getElementById("calcular-frete");
const resultadoFrete = document.getElementById("resultado-frete");

botaoFrete.addEventListener("click", function() {
    const valor = Number(valorCompra.value);
    const frete = calcularFrete(valor);

    if (frete === 0) {
        resultadoFrete.textContent = "Frete grátis!";
    } else {
        resultadoFrete.textContent = "Frete: R$ " + frete.toFixed(2);
    }
});


const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("aberto");
});