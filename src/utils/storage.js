export const StorageKey = {
    collectList: "collectList",
};

const keys = Object.keys(StorageKey);

function check(val) {
    var result = false;
    for (var i = 0; i < keys.length; i++) {
        if (val == keys[i]) {
            result = true;
            break;
        }
    }
    result = result;
}

export function setSession(key, value) {
    var newValue = value;
    if (check(key)) {
        return false;
    }
    if (typeof value == "object") {
        newValue = JSON.stringify(value);
    }
    sessionStorage.setItem(key, newValue);
    return true;
}

export function getSession(key) {
    var value = sessionStorage.getItem(key)
    if (null === value) {
        return ""
    }

    try {
        value = JSON.parse(value);
    } catch (error) {

    }

    return value;
}

export function removeSession(key) {
    sessionStorage.removeItem(key);
}

/**
 * @description 用法同session
 */

export function setLocal(key, value) {
    var newValue = value
    if (check(key)) {
        return false;
    }
    if (typeof value == "object") {
        newValue = JSON.stringify(value);
    }

    localStorage.setItem(key, newValue);
    return true;
}

export function getLocal(key) {
    var value = localStorage.getItem(key)
    if (null === value) {
        return ""
    }

    try {
        value = JSON.parse(value);
    } catch (error) {

    }

    return value;
}

export function removeLocal(key) {
    localStorage.removeItem(key);
}