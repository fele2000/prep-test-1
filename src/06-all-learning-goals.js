/**
 * This function determines which students pass based on grades and attendance.
 *
 * @param {array} students - An array of student objects with `name`, `grades`, and `attendance`.
 * @returns {object} - An object with arrays of names of passing and failing students.
 *
 * Usage:
 * const students = [
 *   { name: "Alice", grades: [85, 78, 92], attendance: 80 },
 *   { name: "Bob", grades: [60, 50, 70], attendance: 65 }
 * ];
 * const result = trackStudentGrades(students);
 * console.log(result); // Outputs { passing: ["Alice"], failing: ["Bob"] }
 */
const students = [
    { name: "Alice", grades: [85, 78, 92], attendance: 80 },
    { name: "Bob", grades: [60, 50, 70], attendance: 65 },
    { name: "Charlie", grades: [90, 95, 85], attendance: 95 },
    { name: "David", grades: [40, 30, 50], attendance: 70 }
];


const result = trackStudentGrades(students);
console.log(result);
function trackStudentGrades(students) {
    let studentOutcome = {
        passing: [],
        failing: []
    };

    students.forEach(students => {
        let sum = 0;

        if (students.grades.length !== 0) {
            for (let i = 0; i < students.grades.length; i++) {
                sum += students.grades[i];
            }
            const averageGrade= (sum / students.grades.length);
            if (averageGrade >= 70 && students.attendance >= 75) {
                studentOutcome.passing.push(students.name);
            } else {
                studentOutcome.failing.push(students.name);
            }
        }
    })
    return studentOutcome;
}


