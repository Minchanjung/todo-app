//module to work with doms
const dom = (() => {
    const addElement = (element, parentElement) => {
        parentElement.appendChild(element);
    };
    const removeElement = (element) => {
        element.remove()
    }
    const getElement = (element) => {
        return element;
    }
})();

//creating new projects factory function
const projectFactory = (name) => {
    const getName = () => name;
    return {getName};
}

//factory to create the actual tabs
const taskFactory = (name, description, time) => {
    const getName = () => name;
    const getDescription = () => description;
    const getTime = () => time;

    return {getName, getDescription, getTime};
}

//module to open and close the project form
const projectPopup = (() => {
    const addProjectPopup = document.querySelector("#addProjectPopup");
    const newProjectBtn = document.querySelector("#newProject");
    const cancelBtn = document.querySelector("#projectCancel");
    const submitBtn = document.querySelector("#projectSubmit");
    const input = document.querySelector("#projectInput");

    newProjectBtn.onclick = function() {
        newProjectBtn.style.display = "none";
        addProjectPopup.style.display = "block";
    }

    cancelBtn.onclick = function() {
        newProjectBtn.style.display = "block";
        addProjectPopup.style.display = "none";
        input.value = "";
    }

    submitBtn.onclick = function() {

    }
})();

//module to open and close task form
const taskPopup = (() => {
    const newTaskBtn = document.querySelector("#newTask");
    const addTaskPopup = document.querySelector("#addTaskPopup");
    const cancelBtn = document.querySelector("#taskCancel");
    const submitBtn = document.querySelector("#taskSubmit");
    const input = document.querySelector("#taskInput");

    newTaskBtn.onclick = function() {
        newTaskBtn.style.display = "none";
        addTaskPopup.style.display = "block";
    }

    cancelBtn.onclick = function() {
        newTaskBtn.style.display = "block";
        addTaskPopup.style.display = "none";
        input.value = "";
    }

    submitBtn.onclick = function() {

    }
})();