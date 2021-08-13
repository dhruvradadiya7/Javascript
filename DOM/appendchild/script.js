function addToList() {

    newLi = document.createElement("li")
    
    newText = document.createTextNode("This is some text")
    

    newLi.appendChild(newText)
    
  
    
    ul = document.querySelector("#mine")

    ul.appendChild(newLi)
}