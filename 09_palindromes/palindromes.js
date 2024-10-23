const palindromes = function (word) {
    let lowerString = word.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '');
    
    
    let reverseString = lowerString
                            .split("")
                            .reverse()
                            .join("");

    return reverseString === lowerString;

    console.log(lowerString);
    console.log(reverseString);
};

// Do not edit below this line
module.exports = palindromes;
