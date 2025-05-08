const sendReplyButton = document.getElementById('sendReply');
const replyText = document.getElementById('replyText');
const repliesSection = document.querySelector('.replies');

sendReplyButton.addEventListener('click', (e) => {
    e.preventDefault();

    const replyContent = replyText.value.trim();
    if (replyContent === '') {
        alert('Пожалуйста, введите текст ответа.');
        return;
    }

    const newReply = document.createElement('div');
    newReply.classList.add('reply');

    const newReplyMeta = document.createElement('p');
    newReplyMeta.classList.add('reply-meta');
    newReplyMeta.textContent = 'Автор: Вы, Сейчас';

    const newReplyText = document.createElement('p');
    newReplyText.textContent = replyContent;

    newReply.appendChild(newReplyMeta);
    newReply.appendChild(newReplyText);

    repliesSection.appendChild(newReply);

    replyText.value = ''; // My email artemden404@gmail.com
});