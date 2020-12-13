const map = (array, cb) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(cb(array[i]));
    }

    return result;
}

module.exports = {map};