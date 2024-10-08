function calculateSGPA() {
    let numSubjects = document.getElementById("numSubjects").value;
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        let marks = parseFloat(document.getElementById(`subject${i}`).value);
        let credits = parseFloat(document.getElementById(`credit${i}`).value);

        if (isNaN(marks) || isNaN(credits) || credits <= 0) {
            alert(`Please enter valid marks and credits for Subject ${i}`);
            return;
        }

        let gradePoints = getGradePoint(marks);
        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    if (totalCredits === 0) {
        alert("Total credits cannot be zero");
        return;
    }

    let sgpa = totalGradePoints / totalCredits;
    document.getElementById("showdata").innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
}

function getGradePoint(marks) {
    if (marks >= 90) return 10;   // A+
    if (marks >= 80) return 9;    // A
    if (marks >= 70) return 8;    // B
    if (marks >= 60) return 7;    // C
    if (marks >= 50) return 6;    // D
    if (marks >= 40) return 5;    // E
    return 0;                     // Fail (F)
}
