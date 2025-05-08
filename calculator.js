const styleCalculatorForm = document.getElementById('styleCalculator');
const resultDiv = document.getElementById('result');
const styleRecommendation = document.getElementById('styleRecommendation');
const secretCodeInput = document.getElementById('secretCode');

secretCodeInput.addEventListener('input', function() {
    if (this.value < 0) {
        this.value = 0;
    }
});

styleCalculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    let secretCode = parseInt(secretCodeInput.value);
    let style = '';

    if (q1 === 'neutral' && q2 === 'classic' && q3 === 'formal') {
        style = 'Классический стиль';
    } else if (q1 === 'bright' && q2 === 'casual' && q3 === 'casual') {
        style = 'Яркий повседневный стиль';
    } else if (q1 === 'pastel' && q2 === 'sporty' && q3 === 'casual') {
        style = 'Спортивный стиль в пастельных тонах';
    } else {
        style = 'Индивидуальный стиль';
    }

    styleRecommendation.textContent = style;
    resultDiv.style.display = 'block';

    if (secretCode === 25286364) {
        window.location.href = 'secret.html';
    }
});
