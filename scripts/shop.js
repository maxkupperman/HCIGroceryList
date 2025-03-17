function selectOrUnselectItem(itemSelector,checkboxSelector,position){
    var checkbox = document.getElementById(checkboxSelector)
    var shopItem = document.getElementById(itemSelector)
    var originalListItem = document.getElementById('listText').children[position]

    if(checkbox.classList.contains('unselected')){
        checkbox.classList.remove('unselected')
        checkbox.classList.add('selected')
        checkbox.src = 'img/boxChecked.png'

        originalListItem.classList.add('checked')

    } 
    else if (checkbox.classList.contains('selected')){
        checkbox.classList.remove('selected')
        checkbox.classList.add('unselected')
        checkbox.src = 'img/boxUnchecked.png'

        originalListItem.classList.remove('checked')
    }


    var listLength = document.getElementById('shopList').children.length
    var numSelected = document.getElementsByClassName('itemCheckbox selected').length
    var dialText = document.getElementById('dialText')
    var greenCircle = document.getElementById('greenCircle')
    var newOffset = 409 - Math.ceil(409 * (numSelected/listLength))

    dialText.innerHTML = numSelected + "/" + listLength
    greenCircle.style['stroke-dashoffset'] = newOffset

}

function finishShopping() {
    confirm("You have finished your list!\n\nIn a more complete app, this would archive your list and the app would allow you to view past lists. As is, it just clears your list.\nPress OK to reset.")
    location.reload()
}