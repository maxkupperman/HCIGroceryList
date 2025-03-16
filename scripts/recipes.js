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
    var checkbox = document.getElementById(selfSelector)
    var ingredientList = document.getElementById(ingredientsSelector)
    var mainList = document.getElementById('listText')

    if(checkbox.classList.contains('unselected')){
        checkbox.classList.remove('unselected')
        checkbox.classList.add('selected')
        checkbox.src = 'img/boxChecked.png'

        mainList.innerHTML += ingredientList.innerHTML
    } 
    else if (checkbox.classList.contains('selected')){
        var recipeItems = mainList.getElementsByClassName(ingredientsSelector)
        console.log(recipeItems)

        while (recipeItems.length > 0){
            recipeItems[0].parentNode.removeChild(recipeItems[0])
            console.log('removed')
        }

        checkbox.classList.remove('selected')
        checkbox.classList.add('unselected')
        checkbox.src = 'img/boxUnchecked.png'


    }
}