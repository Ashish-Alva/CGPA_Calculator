const sem_credits = {
    1: [4, 4, 3, 1, 1, 1, 3, 3],
    2: [4, 4, 3, 1, 1, 1, 3, 3],
    3: [3, 4, 4, 3, 1, 1, 1, 3],
    4: [3, 4, 4, 1, 3, 1, 3, 1],
    5: [3, 4, 4, 1, 2, 3, 2, 3]
};

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
    if (marks >= 30) return 3;
    if (marks >= 20) return 2;
    if (marks >= 10) return 1;
    return 0;
}

// Function to calculate SGPA for a given semester
function calculateSGPA(sem) {
    let marksInputs = document.querySelectorAll(`.sem${sem} .marks`);
    let credits = sem_credits[sem];
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < marksInputs.length; i++) {
        let marks = parseFloat(marksInputs[i].value);
        if (!isNaN(marks) && marks >= 0 && marks <= 99) {
            totalGradePoints += convertToGrade(marks) * credits[i];
            totalCredits += credits[i];
        }
    }

    let sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    document.getElementById(`result${sem}`).innerText = `SGPA: ${sgpa}`;
}

// Function to calculate overall CGPA across semesters
function calculateOverallCGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let sem = 1; sem <= 5; sem++) {
        let marksInputs = document.querySelectorAll(`.sem${sem} .marks`);
        let credits = sem_credits[sem];

        for (let i = 0; i < marksInputs.length; i++) {
            let marks = parseFloat(marksInputs[i].value);
            if (!isNaN(marks) && marks >= 0 && marks <= 99) {
                totalGradePoints += convertToGrade(marks) * credits[i];
                totalCredits += credits[i];
            }
        }
    }

    let cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    document.getElementById("cgpaResult").innerText = `Overall CGPA: ${cgpa}`;
}
