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

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }
    add(word, description, isDifficult) {
        if (!this.words.hasOwnProperty(word)) {
            this.words[word] = {
                word: word,
                description: description,
                isDifficult: true,
            };
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();