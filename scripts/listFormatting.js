const suggestionPosition = 1
const suggestionList = ['Bananas','Apples']

function listFormatting() {
    console.log('its running')
};

function addSuggestion(selector) {
    var suggestion = document.getElementById(selector);
    var content = suggestion.innerHTML;
    console.log(content)
}