import { Preferences } from "../types";

const COLLECTION = 'preferences'

const setPreferencesToLocalStorage = (preferences: Preferences | null) => {    
    localStorage.setItem(COLLECTION, JSON.stringify(preferences));
}

const getPreferencesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(COLLECTION) as any)
}


export {
    setPreferencesToLocalStorage,
    getPreferencesFromLocalStorage
}