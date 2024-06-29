const textBox = document.querySelector("#textbox");
const checkbox = `<input type="checkbox" id="done"></input>`;
document.querySelector("#add").addEventListener('click',() => {
    var text = textBox.value;
    addItemElement(text);
    textBox.value = "";
})
function getCheckboxElement(){
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("id","done");
    return checkbox;
}
function getRemoveButtonElement(){
    var button = document.createElement("button");
    button.innerHTML = "x";
    button.setAttribute("id","remove");
    button.addEventListener('click',removeItemElement);
    return button;
}
function addItemElement(text){
    var element = document.createElement("div");
    element.setAttribute("id","listItem")

    element.appendChild(getCheckboxElement());
    element.innerHTML += `${text}`;
    element.appendChild(getRemoveButtonElement());

    document.querySelector(".list").appendChild(element);
}
function removeItemElement(e){
e.target.parentNode.remove();
}
