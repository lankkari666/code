class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words.hasOwnProperty(word)) {
            this.words[word] = {
                word: word,
                description: description
            };
        }
    }

    remove(word) {
        delete this.words[word]
    }

    get(word) {
        if (this.words.hasOwnProperty(word)) {
            console.log(this.words[word]);
        }
    }

    showAllWords() {
        for (let word in this.words) {
            console.log(`${word} - ${this.words[word].description}`)
        }
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();