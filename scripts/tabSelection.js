
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

function getImage(item){
    const defaultGroceries = ['Bread','Milk','Eggs','Bananas','Apples','Cucumber','Onion','Garlic','Salmon','Lemons','Dill','Brussels Sprouts','Olive Oil']
    const defaultImages = ['bread','milk','eggs','bananas','apples','cucumber','onion','garlic','salmon','lemons','dill','brusselssprouts','oliveoil']

    for (let i = 0; i < defaultGroceries.length; i++){
        if (item == defaultGroceries[i]){
            returnText = '<img class="itemImage" src="img/foodPhotos/' + defaultImages[i] + '.jpg" />'
            return returnText
        }
    }

    return '<div class="noImage" onclick="imageAlert()">+ Add Image</div>'
}

function getCheck(item, i){
    if (item.classList.contains('checked')){
        returnText = '<img class="itemCheckbox selected" src="img/boxChecked.png" id="itemCheckbox'
        + i + '" onclick="selectOrUnselectItem(\'shopItem' + i + '\',\'itemCheckbox'
        + i + '\',' + i + ')" />'

        return returnText
    } else {
        returnText = '<img class="itemCheckbox unselected" src="img/boxUnchecked.png" id="itemCheckbox'
        + i + '" onclick="selectOrUnselectItem(\'shopItem' + i + '\',\'itemCheckbox'
        + i + '\',' + i + ')" />'

        return returnText
    }
}


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

    const shopList = document.getElementById('shopList')
    const listItems = document.getElementById('listText').children

    shopList.innerHTML = "";

    for (let i = 0; i < listItems.length; i++) {
        item = listItems[i].innerHTML;

        shopList.innerHTML +=
            '<div class="shopItem" id="shopItem' + i
            + '">\n' + getCheck(listItems[i], i)
            + '\n<div class="itemName">' + item + '</div>'
            + getImage(item) + '</div>';
      }

      var listLength = document.getElementById('shopList').children.length
      var numSelected = document.getElementsByClassName('itemCheckbox selected').length
      var dialText = document.getElementById('dialText')
      var greenCircle = document.getElementById('greenCircle')
      var newOffset = 409 - Math.ceil(409 * (numSelected/listLength))
  
      dialText.innerHTML = numSelected + "/" + listLength
      greenCircle.style['stroke-dashoffset'] = newOffset
  
};