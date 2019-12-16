let print = require('./print')
function formatInventory(num){
    let stringNum = String(num);

    while(stringNum.length < 3){

        stringNum = '0' + stringNum
}
print(stringNum + ' cows')
}


formatInventory(7)