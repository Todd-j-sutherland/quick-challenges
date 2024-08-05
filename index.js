const studentArrayToObject = (arr) => {
  const studentResults = {};

  arr.students.forEach((element) => {
    const { class: className, attended } = element;

    if (!studentResults[className]) {
      studentResults[className] = {
        total: 0,
        count: 0,
        average: 0,
      };
    }

    studentResults[className].count++;
    studentResults[className].total += attended;
  });

  for (const className in studentResults) {
    const { total, count } = studentResults[className];
    studentResults[className].average = Math.round(total / count);
    delete studentResults[className].count;
  }

  return studentResults;
};

const studentData = {
  students: [
    {
      name: "Lulu Gearside",
      class: "art",
      attended: 35,
    },
    {
      name: "Matthew Milham",
      class: "art",
      attended: 11,
    },
    {
      name: "Dany Dufner",
      class: "biology",
      attended: 12,
    },
    {
      name: "Jeremy Doyle",
      class: "biology",
      attended: 3,
    },
    {
      name: "Tim O'Connor",
      class: "biology",
      attended: 10,
    },
    {
      name: "Charlie Wang",
      class: "french",
      attended: 12,
    },
  ],
};

console.log(studentArrayToObject(studentData));
