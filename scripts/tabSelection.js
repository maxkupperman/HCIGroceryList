function hideMainArea(document){
    document.style['display'] = 'none';
}

function showMainArea(document){
    document.style['display'] = 'flex';
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

    const shop = document.getElementById('shop');
    hideMainArea(shop)

    const recipeButton = document.getElementById("recipeButton");
    highlightButton(recipeButton);

    const listButton = document.getElementById("listButton");
    unHighlightButton(listButton)

    const shopButton = document.getElementById("shopButton");
    unHighlightButton(shopButton)

    document.getElementById("listImage").src = 'img/pencilGreen.png';
    document.getElementById("recipeImage").src = 'img/hatWhite.png';
    document.getElementById("shopImage").src = 'img/cartGreen.png';
};

function toList(){
    const recipes = document.getElementById("recipes");
    hideMainArea(recipes)

    const list = document.getElementById('list');
    showMainArea(list)

    const shop = document.getElementById('shop');
    hideMainArea(shop)

    const recipeButton = document.getElementById("recipeButton");
    unHighlightButton(recipeButton);

    const listButton = document.getElementById("listButton");
    highlightButton(listButton)

    const shopButton = document.getElementById("shopButton");
    unHighlightButton(shopButton)

    document.getElementById("listImage").src = 'img/pencilWhite.png';
    document.getElementById("recipeImage").src = 'img/hatGreen.png';
    document.getElementById("shopImage").src = 'img/cartGreen.png';
};


function toShop(){
    const recipes = document.getElementById("recipes");
    hideMainArea(recipes)

    const list = document.getElementById('list');
    hideMainArea(list)

    const shop = document.getElementById('shop');
    showMainArea(shop)

    const recipeButton = document.getElementById("recipeButton");
    unHighlightButton(recipeButton);

    const listButton = document.getElementById("listButton");
    unHighlightButton(listButton)

    const shopButton = document.getElementById("shopButton");
    highlightButton(shopButton)

    document.getElementById("listImage").src = 'img/pencilGreen.png';
    document.getElementById("recipeImage").src = 'img/hatGreen.png';
    document.getElementById("shopImage").src = 'img/cartWhite.png';
};