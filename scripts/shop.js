function selectOrUnselectItem(itemSelector,checkboxSelector,originalListPosition){
    var checkbox = document.getElementById(checkboxSelector)
    var shopItem = document.getElementById(itemSelector)
    var originalListItem = document.getElementById('listText').childNodes[originalListPosition]

    if(checkbox.classList.contains('unselected')){
        checkbox.classList.remove('unselected')
        checkbox.classList.add('selected')
        checkbox.src = 'img/boxChecked.png'
    } 
    else if (checkbox.classList.contains('selected')){
        checkbox.classList.remove('selected')
        checkbox.classList.add('unselected')
        checkbox.src = 'img/boxUnchecked.png'
    }

    console.log(originalListItem)


}