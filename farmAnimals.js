const print = require('./print')
function zeroPad(num, width){
    let string = String(num)
    while(string.length < width){
        string  = '0' + string
    }
    return string
}



function printFarmAnimals(cows, pigs, sheep){
        print(`${zeroPad(cows, 3)} cows`)
        print(`${zeroPad(pigs, 3)} pigs`)
        print(`${zeroPad(sheep, 3)} sheep`)
}


printFarmAnimals(4, 80, 75)