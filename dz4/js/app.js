const indexTextarea = document.createElement('textarea');
const convertButton = document.createElement('button');
const textareaBlock = document.querySelector('.index-textarea-block')

renderTextarea = () => {
    indexTextarea.classList.add('index-textarea')
    indexTextarea.placeholder = 'Введите текст';
    convertButton.classList.add('convert-button');
    convertButton.innerText = 'конвертировать';
    textareaBlock.appendChild(indexTextarea);
    textareaBlock.appendChild(convertButton);
}

convertText = (string) => {
    console.log(string);
    console.log('1');
}

renderTextarea()