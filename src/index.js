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

    return { addElement, removeElement, getElement };
})();

//creating new projects factory function
const projectFactory = (name) => {
    const getName = () => name;
    return {getName};
}

//factory to create the actual tabs
const taskFactory = (name, description, time, date) => {
    const getName = () => name;
    const getDescription = () => description;
    const getTime = () => time;
    const getDate = () => date;

    return {getName, getDescription, getTime, getDate};
}

//module to open and close the project form
const projectPopup = (() => {
    const addProjectPopup = document.querySelector("#addProjectPopup");
    const newProjectBtn = document.querySelector("#newProject");
    const cancelBtn = document.querySelector("#projectCancel");
    const submitBtn = document.querySelector("#projectSubmit");
    const input = document.querySelector("#projectInput");
    const projectContainer = document.querySelector("#projectsContainer");

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
        const newProject = document.createElement("div");
        newProject.setAttribute("id", input.value);
        newProject.setAttribute("class", "projectTabs")
        newProject.setAttribute("onclick", "loadProjectContent.projectTab(event, input.value)")
        newProject.textContent = input.value;
        projectContainer.appendChild(newProject);
        console.log(newProject);
        
        storage.saveFolder(input.value);
        newProjectBtn.style.display = "block";
        addProjectPopup.style.display = "none";
        input.value = "";
    }
})();

//module to open and close task form
const taskPopup = (() => {
    const newTaskBtn = document.querySelector("#newTask");
    const addTaskPopup = document.querySelector("#addTaskPopup");
    const cancelBtn = document.querySelector("#taskCancel");
    const submitBtn = document.querySelector("#taskSubmit");
    const input = document.querySelector("#taskInput");
    const secondInput = document.querySelector("#taskDescription");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");

    newTaskBtn.onclick = function() {
        addTaskPopup.style.display = "block";
    }

    cancelBtn.onclick = function() {
        addTaskPopup.style.display = "none";
        input.value = "";
        date.value = "";
        secondInput.value = "";
        time.value = "";
    }

    submitBtn.onclick = function() {
        //console.log(input.value, secondInput.value, date.value, time.value);
        const allTasks = document.querySelector("#allTasks");

        const newTaskContainer = document.createElement('div');
        newTaskContainer.setAttribute("id", "jsDiv");
        allTasks.appendChild(newTaskContainer);

        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", "checkBox");
        newTaskContainer.appendChild(checkBox)

        const title = document.createElement("div");
        title.textContent = input.value;
        title.setAttribute("id", "popUpTitle");
        newTaskContainer.appendChild(title);

        const dateDiv = document.createElement("div");
        dateDiv.textContent = date.value;
        dateDiv.setAttribute("id", "popUpDate");
        newTaskContainer.appendChild(dateDiv);

        const xBtn = document.createElement("div");
        xBtn.textContent = "X";
        xBtn.setAttribute("id", "xBtn");
        newTaskContainer.appendChild(xBtn);
        xBtn.onclick = function() {
            
        }

        addTaskPopup.style.display = "none";
        input.value = "";
        date.value = "";
        secondInput.value = "";
        time.value = "";
        taskFunctions();
    }
})();

//each task functions
const taskFunctions = () => {
    const task = document.querySelector("#jsDiv")
    console.log(jsDiv);
    const xBtns = document.querySelectorAll("#xBtn");
    const checkBoxes = document.querySelectorAll("#checkBox");

    xBtns.forEach(e => {
        e.onclick = function() {
            e.parentElement.remove();
        }
    })

    checkBoxes.forEach(e => {
        console.log(e);
        e.addEventListener("change", () => {
            if (e.checked) {
                console.log("checked");
                e.parentElement.style.backgroundColor = "rgba(245, 245, 245, 0.6)";
            } else {
                e.parentElement.style.backgroundColor = "rgba(245, 245, 245, 100)";
            }
        })
        
    })
    
};

const loadProjectContent = (() => {
    const projectTab = (id) => {
        console.log("clicked");
        let i, tablinks;
        
        tablinks = document.getElementsByClassName("projectTabs");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }
    return { projectTab };
})();

const storage = (() => {
    const saveFolder = (folder) => {
        localStorage.setItem("projects", JSON.stringify(folder));
    }

    const saveTodoList = (projectTab, data) => {
        localStorage.setItem(`${projectTab}`, JSON.stringify(data));
    }

    const getTodoList = () => {
        JSON.parse(localStorage.getItem('todoList'));
    }

    return { saveFolder, saveTodoList, getTodoList };
})();

const all = document.querySelector("#all");

all.addEventListener('click', loadProjectContent.projectTab('allTasks'));