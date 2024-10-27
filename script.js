// script.js
document.getElementById('rouletteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const userNumber = parseInt(document.getElementById('userNumber').value, 10);
    
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 36) {
        alert("Por favor, ingresa un número válido entre 0 y 36.");
        return;
    }

    // Generar un número aleatorio de la ruleta (entre 0 y 36)
    const rouletteResult = Math.floor(Math.random() * 37);

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    if (userNumber === rouletteResult) {
        resultDiv.innerHTML = `¡Felicidades! La ruleta cayó en el número ${rouletteResult}, ¡acertaste!`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `La ruleta cayó en el número ${rouletteResult}. Mejor suerte la próxima vez.`;
        resultDiv.style.color = "red";
    }
});
