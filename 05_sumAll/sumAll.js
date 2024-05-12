const sumAll = function (A, B) {
    if (A > B) {
        const C = A;
        A = B;
        B = C;
    }

    if (A < 0 || B < 0) {
        return "ERROR"
    }

    if (!Number.isInteger(A) || !Number.isInteger(B)){
        return "ERROR"
    }

    let array = [];
    for (let i = A; i <= B; i++) {
        array.push(i);
    }
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
