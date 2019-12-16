function hommus(factor){
    function ingredient(amount, unit, name){
        const ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += 's'
        }
        console.log(`${ingredientAmount} ${unit} ${name} `)
        }
        ingredient(1, 'can', 'chickpeas')
        ingredient(.25, 'cup', 'tahini')
        ingredient(.25, 'cup', 'lemon juice')
        ingredient(2, 'tablespoon', 'olive oil')
        ingredient(1, 'clove', 'cumin')
        
}

hommus(2)



function filterKafee(factor){
    console.log(`Water temperature: 100Degrees`)
    function ingredient(amount, unit, name){
        const ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit +='s'
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }

    ingredient(15, 'gram', 'coffee beans' )
    ingredient(240, 'milliliter', 'Wasser' )


}

filterKafee(24)