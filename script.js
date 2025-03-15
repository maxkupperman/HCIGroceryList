function hideMainArea(document){
    document.style['width'] = '0%';
    document.style['overflow-x'] = 'hidden';
}

function showMainArea(document){
    document.style['width'] = '100%';
    document.style['overflow-x'] = 'visible';
}

function highlightButton(document){
    document.style['background-color'] = '#6aa84fff';
    document.style['color'] = '#ffffff';
}

function unHighlightButton(document){
    document.style['background-color'] = '#ffffff';
    document.style['color'] = '#6aa84fff';
}

function toRecipes(){
    const recipes = document.getElementById("recipes");
    showMainArea(recipes)

    const list = document.getElementById('list');
    hideMainArea(list)

    const recipeButton = document.getElementById("recipeButton");
    highlightButton(recipeButton);

    const listButton = document.getElementById("listButton");
    unHighlightButton(listButton)

    document.getElementById("listImage").src = 'img/cartGreen.png';
    document.getElementById("recipeImage").src = 'img/hatWhite.png';
};

function toList(){
    const recipes = document.getElementById("recipes");
    hideMainArea(recipes)

    const list = document.getElementById('list');
    showMainArea(list)

    const recipeButton = document.getElementById("recipeButton");
    unHighlightButton(recipeButton);

    const listButton = document.getElementById("listButton");
    highlightButton(listButton)

    document.getElementById("listImage").src = 'img/cartWhite.png';
    document.getElementById("recipeImage").src = 'img/hatGreen.png';
};