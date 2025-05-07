const textArea = document.getElementById("writeText");
const button = document.getElementById("send");
const output = document.getElementById("output");
const fileInput = document.getElementById('file-upload');
const fileInfoDiv = document.getElementById('file-info');
const messageError = document.getElementById('messageError');

button.addEventListener('click', () => {
    const text = textArea.value.trim();
    const file = fileInput.files[0];

    if (text === '' && !file) {
        messageError.textContent = "Введите текст или выберите файл!"; // Выводим сообщение об ошибке
        return; // Прерываем выполнение функции
    } else {
        messageError.textContent = ""; // Очищаем сообщение об ошибке, если все в порядке
    }

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = text;
    output.appendChild(messageDiv);
    textArea.value = '';

    // Clear file info
    fileInfoDiv.textContent = '';
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];

    if (file) {
        const fileSizeInKB = (file.size / 1024).toFixed(2);
        const fileInfo = `Выбран файл: ${file.name} (${fileSizeInKB} KB)`;
        fileInfoDiv.textContent = fileInfo;
    } else {
        fileInfoDiv.textContent = 'Файл не выбран';
    }
});