function schoolTrip(amountOfKinder){
    const seatsPerBus = 30;
    let numBus = 1
    


    function planner(){
        let numKids = amountOfKinder
        let unit = 'bus'
    while(numKids > seatsPerBus){
        numKids -= seatsPerBus;
        numBus +=1

    }
    if(numBus > 1){
        unit +='es'
    }

        console.log(` ${unit}: ${numBus} for ${ amountOfKinder} kids: `)
    }
    planner()
}


schoolTrip(600)