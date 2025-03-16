function hideOrShowIngredients(selector) {
    console.log(selector)
    var ingredientList = document.getElementById(selector)
    console.log(ingredientList.innerHTMl)

    if (ingredientList.classList.contains('hideIngredients')){
        ingredientList.classList.remove('hideIngredients')
        ingredientList.classList.add('showIngredients')
        console.log('displayed')
    }
    else if (ingredientList.classList.contains('showIngredients')){
        ingredientList.classList.add('hideIngredients')
        ingredientList.classList.remove('showIngredients')        
        console.log('hidden')
    }
}

function selectOrUnselectRecipe(selfSelector, ingredientsSelector) {
    
}