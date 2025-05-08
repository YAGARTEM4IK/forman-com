const newDiscussionLink = document.getElementById('newDiscussionLink');
const newDiscussionForm = document.getElementById('newDiscussionForm');
const submitNewTopicButton = document.getElementById('submitNewTopic');
const cancelNewTopicButton = document.getElementById('cancelNewTopic');
const discussionList = document.querySelector('.discussion-list');
const newTopicTitleInput = document.getElementById('newTopicTitle');
const newTopicContentInput = document.getElementById('newTopicContent');

newDiscussionLink.addEventListener('click', (event) => {
    event.preventDefault();
    newDiscussionForm.style.display = 'block';
});

cancelNewTopicButton.addEventListener('click', (event) => {
    event.preventDefault();
    newDiscussionForm.style.display = 'none';
});

submitNewTopicButton.addEventListener('click', (event) => {
    event.preventDefault();

    const newTopicTitle = newTopicTitleInput.value.trim();
    const newTopicContent = newTopicContentInput.value.trim();

    if (newTopicTitle === '' || newTopicContent === '') {
        alert('Пожалуйста, заполните заголовок и содержание темы.');
        return;
    }

    const newDiscussionItem = document.createElement('div');
    newDiscussionItem.classList.add('discussion-item');

    const newDiscussionTitle = document.createElement('h3');
    const newDiscussionLink = document.createElement('a');
    newDiscussionLink.href = '#';
    newDiscussionLink.textContent = newTopicTitle;
    newDiscussionTitle.appendChild(newDiscussionLink);

    const newDiscussionMeta = document.createElement('p');
    newDiscussionMeta.classList.add('discussion-meta');
    newDiscussionMeta.textContent = 'Автор: Вы, Сейчас'; 

    newDiscussionItem.appendChild(newDiscussionTitle);
    newDiscussionItem.appendChild(newDiscussionMeta);

    discussionList.appendChild(newDiscussionItem);

    newTopicTitleInput.value = '';
    newTopicContentInput.value = '';
    newDiscussionForm.style.display = 'none';

    newDiscussionLink.addEventListener('click', (e) => {
     e.preventDefault();
     alert("К сожалению, пока эта страница не работает")
    })
});