var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector(".txt-input");
var outputDiv = document.querySelector("#output");
console.log(txtInput.value);

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationUrl(text)
{
  return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
  console.log("Error occured" , error);
  alert("Something wrong with the server: try again after sometime");
}

function clickHandler()
{
  //outputDiv.innerText = "jsjsjsjsjs   " + txtInput.value;
  var inputText = txtInput.value;
  fetch(getTranslationUrl(inputText))
  .then(response => response.json())
  //.then(json => console.log(json))
  //.then(json => console.log(json.contents.translated))
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    }) 
  .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)






