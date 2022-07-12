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

export const getDataLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const deleteDataLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export const changeArrInLocal = (key, obj) => {

    const arr = getDataLocalStorage(key);

    const newArr = arr?.map(localObj => {
        if(localObj.id == obj.id) return obj;
        return localObj;
    });

    localStorage.setItem(key, JSON.stringify(newArr));
}

export const changeObjInLocal = (key, obj) => {
    const arrInLocal = JSON.parse(localStorage.getItem(key));    

    const newArr = arrInLocal?.map(localObj => {
        if(localObj.id == obj.id) return obj;
        return localObj;
    });

    localStorage.setItem(key, JSON.stringify(newArr));
}