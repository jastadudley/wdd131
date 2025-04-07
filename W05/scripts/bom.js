const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    if (input.value.trim() === "") {
        input.focus();
        return;
    }

    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
});

function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');

    deleteBtn.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}