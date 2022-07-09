export const setDataLocalStorage = (key, obj) => {
    const objInLocal = JSON.parse(localStorage.getItem(key));

    if(objInLocal) {
        const localUser = objInLocal.find(localObj => localObj.name === obj.name);

        if(localUser) return false 

        else {
            objInLocal.push(obj);
            localStorage.setItem(key, JSON.stringify(objInLocal));

            return true
        }

    } else {
        localStorage.setItem(key, JSON.stringify([obj]))

        return true
    };

}

export const getDataLocalStorage = (key, obj) => {
    return JSON.parse(localStorage.getItem(key))
}

export const deleteDataLocalStorage = (key) => {
    localStorage.removeItem(key)
}