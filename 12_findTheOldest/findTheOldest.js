const findTheOldest = function(people) {

    const currentYear = new Date().getFullYear();

    const oldestPerson = people.reduce((oldest, current) => {
            const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;

            const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        if (currentAge > oldestAge) {
            return current;
        } else {
            return oldest;
        }
    });

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
