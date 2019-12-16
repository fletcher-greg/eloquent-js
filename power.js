function power(base, exponent){
    let result = 1;

    for(count = 0; count < exponent; count +=1){
        result *= base;
    }

    return result
}


console.log(power(2, 9))


