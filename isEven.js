let print = require('./print')



function isEven(num){
    if(num < 0){
        num *= -1
    }
    let result = num % 2
    if(result){
        print(false)
        return
    }
    print(true)
}

isEven(-8)