const messageBank = [
    'dog',
    'cat',
    'hamster',
    'fish',
    'turtle',
];

const randomMessage = () => {
    const ranNumb = Math.floor(Math.random() * messageBank.length)
    const pet = messageBank[ranNumb]
    return `You should get a pet ${pet}.`
}

console.log(randomMessage())