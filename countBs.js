let print = require('./print')
function countBs(str){
    let strArray = str.split('')
    let numBs = 0
    for(let i = 0; i < strArray.length; i +=1){
        if(strArray[i] ==="B"){
            numBs +=1
        }
    }
    return numBs
}


print(countBs("BBdssdfBbb"))


function countChars(str, target){
    let strArray = str.split('')
    let numBs = 0;
    for (let i =0; i < strArray.length; i +=1){
        if(strArray[i] === target){
            numBs +=1
        }
    }
    return numBs
}


print(countChars('sadfkasdf3idflksdflkjijsldk;f;', 'k'))