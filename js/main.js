//required abilities of a calculator
//accept user inputs of number, operator and another number
//store inputs
//recognize inputs and perform calculations

//optional features:
//should accept longer arithmetic operations
// display all input as it is being entered
// store previous total as start of next operation
// clear button should clear all entries
// should prevent invalid inputs

const keys = document.querySelector('.calculator-buttons')
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if(target.match('button')){
            //if click is on one of the buttons
            //pass value to parse method
            console.log(`thing is ${event}`)
        } else{
            return;
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){

    }
}