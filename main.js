let addInputField = document.getElementById("inputField");
let addToDoButton = document.getElementById("toDoButton");
let addToDoContainer = document.getElementById("toDoContainer");

// Event function
addToDoButton.addEventListener("click", function()
{
    // Create a toDo element (a p element)
    let toDo = document.createElement("p");
    // Class for CSS
    toDo.classList.add("toDo-styling");
    // Connect toDo with InputField
    toDo.innerText = addInputField.value;
    // Add toDo to container
    addToDoContainer.appendChild(toDo);
    // Input field empty after creating a child (a new toDo)
    addInputField.value = "";

    // Line through if you click it
    toDo.addEventListener("click", function()
    {
        toDo.style.textDecoration = "line-through";
    })

    // Delete if you double click it
    toDo.addEventListener("dblclick", function()
    {
        addToDoContainer.removeChild(toDo);
    })
});
