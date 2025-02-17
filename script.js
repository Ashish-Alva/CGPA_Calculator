const subjectCredits = [3, 4, 4, 1, 2, 3, 2, 3];

function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
    if (parseInt(input.value) > 99) {
        input.value = '99';
    }
}

function convertToGrade(marks) {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    if (marks >= 45) return 5;
    if (marks >= 40) return 4;
    return 0;
}


function calculateCGPA() {
    let marksInputs = document.querySelectorAll(".marks");
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    for (let i = 0; i < marksInputs.length; i++) {
        let marks = parseFloat(marksInputs[i].value);
        let credits = subjectCredits[i]; 
        if (!isNaN(marks) && marks >= 0 && marks <= 99) {
            totalGradePoints += convertToGrade(marks) * credits;
            totalCredits += credits;
        }
    }
    
    let cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    document.getElementById("result").innerText = `CGPA: ${cgpa}`;
}