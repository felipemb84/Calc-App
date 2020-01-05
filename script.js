// https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/amp/?__twitter_impression=true

// Listening to key-presses
// Five things can happen when a person gets hold of a calculator. They can hit:

// a number key (0–9)
// an operator key (+, -, ×, ÷)
// the decimal key
// the equals key
// the clear key
// The first steps to building this calculator are to be able to (1) listen for all keypresses and (2) determine the type of key that is pressed. In this case, we can use an event delegation pattern to listen, since keys are all children of .calculator__keys.
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // do something
    }
})

const key = e.target
const action = key.dataset.action

if (!action) {
    console.log('number key')
}

if(
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

if(action === 'decimal') {
    console.log('decimal key!')
}

if(action === 'clear') {
    console.log('clear key!')
}

if(action === 'calculate') {
    console.log('equal key!')
}