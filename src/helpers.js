// Get a random item

const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

// Returns a copy of the items array without the first match of item

const remove = (items, item) => {
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove};