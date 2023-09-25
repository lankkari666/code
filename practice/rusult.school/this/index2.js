const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic = true) {
    this.isDomestic = isDomestic;
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    console.log(this)
    return this;
}


const newDomestic = makeDomestic.bind(dog);

newDomestic();
makeDomestic.apply(bird, [false]);
makeDomestic.call(bird, false);