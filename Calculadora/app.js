//funcion para agregar los numeros y operadores en el display
function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

//funcion para borrar el contenido del display
function clearDisplay() {
    document.getElementById('display').value = '';
}

//funcion para borrar el ultimo elemnto agregado al display
function removeLast() {
    var currentText = document.getElementById('display').value;
    document.getElementById('display').value = currentText.slice(0, -1);
}

//funcion para calcular el resultado
function calculateResult() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

/* sigueme en TikTok "https://www.tiktok.com/@v1peros" @v1peros y en youtube "https://www.youtube.com/@v1peros/shorts" */