import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // save error
    }
};


export const removeItemValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch (exception) {
        return false;
    }
}

export function logCurrentStorage() {
    AsyncStorage.getAllKeys().then((keyArray) => {
        AsyncStorage.multiGet(keyArray).then((keyValArray) => {
            let myStorage: any = {};
            for (let keyVal of keyValArray) {
                myStorage[keyVal[0]] = keyVal[1]
            }

            console.log('CURRENT STORAGE: ', myStorage);
            return myStorage
        })
    });
}