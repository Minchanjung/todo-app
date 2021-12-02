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

const taskFactory = (name, description, time) => {
    const getName = () => name;
    const getDescription = () => description;
    const getTime = () => time;

    return {getName, getDescription, getTime};
}