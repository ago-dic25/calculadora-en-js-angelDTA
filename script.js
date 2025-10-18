document.addEventListener("DOMContentLoaded", () => {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const resultado = document.getElementById("resultado");
  const historial = document.getElementById("historial");

  const operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b === 0 ? "Error: División entre 0" : a / b)
  };

  const validar = () => {
    if (num1.value.trim() === "" || num2.value.trim() === "") {
      alert("Por favor, llena ambos campos.");
      return false;
    }
    return true;
  };

  const simbolo = (op) => {
    switch (op) {
      case "sumar": return "+";
      case "restar": return "−";
      case "multiplicar": return "×";
      case "dividir": return "÷";
    }
  };

  const agregarHistorial = (texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    historial.prepend(li);
  };

  const calcular = (operacion) => {
    if (!validar()) return;

    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const res = operaciones[operacion](a, b);

    if (typeof res === "string") {
      resultado.textContent = res;
      agregarHistorial(`${a} ${simbolo(operacion)} ${b} = ${res}`);
      return;
    }

    const mostrado = res % 1 === 0 ? res : res.toFixed(2);
    resultado.textContent = mostrado;
    agregarHistorial(`${a} ${simbolo(operacion)} ${b} = ${mostrado}`);
  };

  document.getElementById("sumar").addEventListener("click", () => calcular("sumar"));
  document.getElementById("restar").addEventListener("click", () => calcular("restar"));
  document.getElementById("multiplicar").addEventListener("click", () => calcular("multiplicar"));
  document.getElementById("dividir").addEventListener("click", () => calcular("dividir"));
  document.getElementById("limpiarHistorial").addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    resultado.textContent = "0";
    historial.innerHTML = "";
    });
});
