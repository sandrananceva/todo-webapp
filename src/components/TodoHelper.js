export const addItem = (list, item) => {
    return list.concat(item)
}


export const generateId = () => {
    return Math.floor(Math.random()*10000);
}