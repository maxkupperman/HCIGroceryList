var suggestionPosition = 4
const suggestionList = ['Bananas','Apples','Cucumber','Onion','Garlic']

function listFormatting() {
    console.log('its running')
};

function addSuggestion(selector) {
    var suggestion = document.getElementById(selector);
    var content = suggestion.innerHTML;
    var listText = document.getElementById('listText');
    var listSuggestions = document.getElementById('listSuggestions');
    var position = (suggestionPosition - 3);

    if(listText.innerHTML.trim() == '<div class="listItem"></div>'){
        listText.innerHTML = '';
    }

    listText.innerHTML += "\n<div class='listItem'>" + content + "</div>";

    if(position < suggestionList.length){
        var number = 'suggestion' + suggestionPosition;
        listSuggestions.innerHTML += 
                '\n<a href="#' + number + '" id="' + number 
                + '" onclick="addSuggestion(\'' + number +'\')">'
                + suggestionList[position] + '</a>';
    }
    
    suggestionPosition += 1;
}