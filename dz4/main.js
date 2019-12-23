const indexTextarea = document.querySelector('.index-textarea');
const convertButton = document.querySelector('.convert-button');

convertButton.addEventListener('click', () => {
    const changableValue = indexTextarea.value;
    indexTextarea.value = changableValue.replace(/\B'|'\B/g,'"') // - решение второго (и первого) задания
});