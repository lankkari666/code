function showSuccessMessage(message) {
    console.log(message)
}

function showErrorMessage(message) {
    console.error(message)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    if (!text.includes(errorSymbol)) {
        successCallback('В данном тексте нет запрещенных символов')
    }
    for (let i = 0; i < text.length; i++) {
        if (errorSymbol === text[i] ) {
            errorCallback(`Найден запрещенный символ ${text[i]} под индексом ${i}`)
        }
    }
}


const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);