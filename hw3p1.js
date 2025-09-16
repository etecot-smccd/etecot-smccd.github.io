/* Create a script that:
checks for valid input, i.e., that the input is between 0-100 and that, of course, the input are all numbers. 
If all input is valid then calculate and display the student's final average according to the formula:
final average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
in the output area, you will present the student's final average (rounded to an integer) and final letter grade using the following criteria:
Points/Percentage to Letter Grade
Percentage	Letter Grade
90-100	A
80-89	B
70-79	C
60-69	D
0-59	F
If the student's final grade is 'D' or 'F' then display "Student must retake the course". 
If the input of the user is invalid, you will present an error message and, of course, no result will be presented
Note: The user should be able to reuse that same form for another student!
*/
let btn = document.getElementById("btnCalculate");
btn.onclick = function() {
    let output = document.getElementById("output");
    output.value = "";
    function getScore(name) {
        const input = document.getElementById(name);
        let score = parseFloat(input.value);
        if (isNaN(score) || score < 0 || score > 100) {
            const label = input.labels[0].textContent;
            output.value += (`Error - ${label} must be a number between 0 and 100.\n`);
            return null;
        }
        return score;
    }
    let homeworkAvg = getScore("homeworkAvg");
    let midTermScore = getScore("midTermScore");
    let finalExamScore = getScore("finalExamScore");
    let participation = getScore("participation");
    if (homeworkAvg === null || midTermScore === null || finalExamScore === null || participation === null) {
        return;
    }
    let finalAverage = (0.5 * homeworkAvg) + (0.2 * midTermScore) + (0.2 * finalExamScore) + (0.1 * participation);
    let roundedAverage = Math.round(finalAverage);
    let letterGrade;
    if (roundedAverage >= 90) {
        letterGrade = 'A';
    } else if (roundedAverage >= 80) {
        letterGrade = 'B';
    } else if (roundedAverage >= 70) {
        letterGrade = 'C';
    } else if (roundedAverage >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    output.value = `Final Average: ${roundedAverage}\nLetter Grade: ${letterGrade}`;
    if (letterGrade === 'D' || letterGrade === 'F') {
        output.value += `\nStudent must retake the course.`;
    }
}
