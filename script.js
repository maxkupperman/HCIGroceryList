function toRecipes(){
    const recipes = document.getElementById("recipes");
    recipes.style['width'] = '100%';
    recipes.style['overflow-x'] = 'visible';

    const list = document.getElementById('list');
    list.style['width'] = '0%';
    list.style['overflow-x'] = 'hidden';
};

function toList(){
    const recipes = document.getElementById("recipes");
    recipes.style['width'] = '0%';
    recipes.style['overflow-x'] = 'hidden';

    const list = document.getElementById('list');
    list.style['width'] = '0%';
    list.style['overflow-x'] = 'hidden';
};