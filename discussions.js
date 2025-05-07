const newDiscussionLink = document.getElementById('newDiscussionLink');
const newDiscussionForm = document.getElementById('newDiscussionForm');
const submitNewTopicButton = document.getElementById('submitNewTopic');
const cancelNewTopicButton = document.getElementById('cancelNewTopic');
const discussionList = document.querySelector('.discussion-list');
const newTopicTitleInput = document.getElementById('newTopicTitle');
const newTopicContentInput = document.getElementById('newTopicContent');

newDiscussionLink.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    newDiscussionForm.style.display = 'block'; // Показываем форму
});

cancelNewTopicButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы
    newDiscussionForm.style.display = 'none'; // Скрываем форму
});

submitNewTopicButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    const newTopicTitle = newTopicTitleInput.value.trim();
    const newTopicContent = newTopicContentInput.value.trim();

    if (newTopicTitle === '' || newTopicContent === '') {
        alert('Пожалуйста, заполните заголовок и содержание темы.');
        return;
    }

    // Создаем новый элемент темы
    const newDiscussionItem = document.createElement('div');
    newDiscussionItem.classList.add('discussion-item');

    const newDiscussionTitle = document.createElement('h3');
    const newDiscussionLink = document.createElement('a');
    newDiscussionLink.href = '#';  // Replace with actual URL
    newDiscussionLink.textContent = newTopicTitle;
    newDiscussionTitle.appendChild(newDiscussionLink);

    const newDiscussionMeta = document.createElement('p');
    newDiscussionMeta.classList.add('discussion-meta');
    newDiscussionMeta.textContent = 'Автор: Вы, Сейчас'; // You'll need to get the actual author and date

    newDiscussionItem.appendChild(newDiscussionTitle);
    newDiscussionItem.appendChild(newDiscussionMeta);

    // Добавляем новый элемент в список тем
    discussionList.appendChild(newDiscussionItem);

    // Очищаем форму и скрываем ее
    newTopicTitleInput.value = '';
    newTopicContentInput.value = '';
    newDiscussionForm.style.display = 'none';

   //  Добавляем переадресацию
    newDiscussionLink.addEventListener('click', (e) => {
     e.preventDefault();
     alert("К сожалению, пока эта страница не работает")
    })
});