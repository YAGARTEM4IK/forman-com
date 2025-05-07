const styleCalculatorForm = document.getElementById('styleCalculator');
const resultDiv = document.getElementById('result');
const styleRecommendation = document.getElementById('styleRecommendation');
const secretCodeInput = document.getElementById('secretCode'); // Get the secret code input

styleCalculatorForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const secretCode = secretCodeInput.value;  // Get the secret code

    let style = '';

    // Simple logic to determine style based on answers
    if (q1 === 'neutral' && q2 === 'classic' && q3 === 'formal') {
        style = 'Классический стиль';
    } else if (q1 === 'bright' && q2 === 'casual' && q3 === 'casual') {
        style = 'Яркий повседневный стиль';
    } else if (q1 === 'pastel' && q2 === 'sporty' && q3 === 'casual') {
        style = 'Спортивный стиль в пастельных тонах';
    } else {
        style = 'Индивидуальный стиль'; // Default style
    }

    styleRecommendation.textContent = style;
    resultDiv.style.display = 'block'; // Show the result

    // Check the secret code and redirect
    if (secretCode === '25286364') { // Replace '3' with your secret code
        window.location.href = 'secret.html';
    }
});