const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((check) => {
        if (!args.includes(check))
            newArray.push(check);
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
