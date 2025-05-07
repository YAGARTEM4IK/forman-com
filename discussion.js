const sendReplyButton = document.getElementById('sendReply');
const replyText = document.getElementById('replyText');
const repliesSection = document.querySelector('.replies');

sendReplyButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const replyContent = replyText.value.trim();
    if (replyContent === '') {
        alert('Пожалуйста, введите текст ответа.');
        return;
    }

    const newReply = document.createElement('div');
    newReply.classList.add('reply');

    const newReplyMeta = document.createElement('p');
    newReplyMeta.classList.add('reply-meta');
    newReplyMeta.textContent = 'Автор: Вы, Сейчас'; // You will need to get the actual author and date

    const newReplyText = document.createElement('p');
    newReplyText.textContent = replyContent;

    newReply.appendChild(newReplyMeta);
    newReply.appendChild(newReplyText);

    repliesSection.appendChild(newReply);

    replyText.value = ''; // Clear the textarea and my email artemden404@gmail.com
});