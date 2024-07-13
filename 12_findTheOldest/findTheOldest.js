const findTheOldest = (people) => {
  const currentYear = new Date().getFullYear();

  return people
    .map((person) => {
      const yearOfDeath = person.yearOfDeath || currentYear;
      const age = !person.yearOfBirth ? 0 : yearOfDeath - person.yearOfBirth;

      return {
        ...person,
        yearOfDeath,
        age,
      };
    })
    .sort((a, b) => (a.age > b.age ? -1 : 1))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
