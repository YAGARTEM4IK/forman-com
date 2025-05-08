const textArea = document.getElementById("writeText");
const button = document.getElementById("send");
const output = document.getElementById("output");
const fileInput = document.getElementById('file-upload');
const fileInfoDiv = document.getElementById('file-info');
const messageError = document.getElementById('messageError');
const fileNameDisplay = document.getElementById('file-name');
const imagePreview = document.getElementById('image-preview');
const fileSizeDisplay = document.getElementById('file-size');
const fileTypeDisplay = document.getElementById('file-type');

button.addEventListener('click', () => {
    const text = textArea.value.trim();
    const file = fileInput.files[0];

    if (text === '' && !file) {
        messageError.textContent = "Введите текст или выберите файл!";
        return;
    } else {
        messageError.textContent = "";
    }

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    if (text) {
        const textParagraph = document.createElement('p');
        textParagraph.textContent = text;
        messageDiv.appendChild(textParagraph);
    }

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '200px';

            messageDiv.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
   output.appendChild(messageDiv);
    textArea.value = '';
    clearFileInfo();
    fileInput.value = null;
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];

    if (file) {
        displayFileInfo(file);
        displayImagePreview(file);
    } else {
        clearFileInfo();
    }
});

function displayFileInfo(file) {
    const fileSizeInKB = (file.size / 1024).toFixed(2);
    fileNameDisplay.textContent = `Имя: ${file.name}`;
    fileSizeDisplay.textContent = `Размер: ${fileSizeInKB} KB`;
    fileTypeDisplay.textContent = `Тип: ${file.type}`;
}

function clearFileInfo() {
    fileNameDisplay.textContent = '';
    imagePreview.src = '#';
    imagePreview.style.display = 'none';
    fileSizeDisplay.textContent = '';
    fileTypeDisplay.textContent = '';
}

function displayImagePreview(file) {
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        clearFileInfo();
        messageError.textContent = 'Выбранный файл не является изображением.';
    }
}