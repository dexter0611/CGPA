document.addEventListener('DOMContentLoaded', (event) => {
    const semestersSubjectsData = {
        1: [
            { subname: "Matrics,Differtial and Integral Calculus", subcredit: 4.0 },
            { subname: "Engineering Graphics", subcredit: 4.0 },
            { subname: "Commutative English", subcredit: 2.0 },
            { subname: "Engineering Chemistry", subcredit: 3.0 },
            { subname: "C Programming", subcredit: 3.0 },
            { subname: "Commutative English Lab", subcredit: 1.0 },
            { subname: "Engineering Chemistry Lab", subcredit: 1.0 },
            { subname: "C Programming Lab", subcredit: 2.0 },
        ],
        2: [
            { subname: "Vector Calculus and Complex Functions", subcredit: 4.0 },
            { subname: "Engineering Physics", subcredit: 3.0 },
            { subname: "Programming for Problem Solving using Python", subcredit: 4 },
            { subname: "Basic Electrical, Electronics and Communication Engineering", subcredit: 3 },
            { subname: "Introduction to Information and Computing Technology", subcredit: 3 },
            { subname: "Constitution of India", subcredit: 0 },
            { subname: "Physics Laboratory", subcredit: 1.0 },
            { subname: "Workshop Practice", subcredit: 2.0 },
            { subname: "Basic Electrical, Electronics & Communication Engineering Lab", subcredit: 1.0 },
            { subname: "Quantitative Aptitude and Verbal Reasoning", subcredit: 1.0 },
        ],
        3: [
            { subname: "Data Structures", subcredit: 3 },
            { subname: "Digital Logic Circuits", subcredit: 4 },
            { subname: "Object Oriented Programming", subcredit: 3 },
            { subname: "Computer Architecture", subcredit: 3 },
            { subname: "Discrete Mathematics", subcredit: 3 },
            { subname: "Fundamentals of Nano Science", subcredit: 0 },
            { subname: "Heritage of Tamil", subcredit: 1 },
            { subname: "Data Structures Laboratory", subcredit: 1 },
            { subname: "Object Oriented Programming Laboratory", subcredit: 1 },
            { subname: "Quantitative Aptitude & Behavioral Skills", subcredit: 1 },
        ],
        // Add more semesters and subjects as needed
    };

    let numSemesters;

    function calculateGPA(grades, semesterSubjects) {
        const gradeMapping = {
            'O': 10,
            'A+': 9,
            'A': 8,
            'B+': 7,
            'B': 6,
            'C': 5,
            'U': 0,
            // Add more grades as needed
        };

        const arrearSubjects = [];
        let totalCredits = 0;
        let totalPoints = 0;

        for (let i = 0; i < semesterSubjects.length; i++) {
            const { subname, subcredit } = semesterSubjects[i];
            const grade = grades[i].trim();

            if (grade === 'U') {
                arrearSubjects.push(subname);
            }

            const gradeValue = gradeMapping[grade] || 0;
            const points = gradeValue * subcredit;

            totalPoints += points;
            totalCredits += subcredit;
        }

        const GPA = totalPoints / totalCredits;
        console.log(`GPA for the semester is: ${GPA.toFixed(2)}`);

        return { totalPoints, totalCredits, arrearSubjects };
    }

    function handleSemester(semester, semesterSubjects) {
        console.log(`\nInput for Semester ${semester}:`);

        const inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ''; // Clear previous inputs

        // Display predefined subject information for the semester
        console.log("Stored Subject Information for the semester:");
        semesterSubjects.forEach(({ subname, subcredit }, i) => {
            console.log(`Subject: ${subname}, Credit: ${subcredit}`);

            // Create HTML label element for subject name
            const label = document.createElement('label');
            label.setAttribute('for', `grade${semester}_${i + 1}`);
            label.textContent = `${subname} (Credit: ${subcredit}):`;
            inputContainer.appendChild(label);

            // Create HTML select element for grades
            const select = document.createElement('select');
            select.id = `grade${semester}_${i + 1}`;
            // Add grade options to the dropdown (customize as needed)
            const grades = ['O', 'A+', 'A', 'B+', 'B', 'C', 'U'];
            grades.forEach(grade => {
                const option = document.createElement('option');
                option.value = grade;
                option.textContent = grade;
                select.appendChild(option);
            });
            select.style.marginBottom = '10px'; // Add spacing
            select.style.width = '150px'; // Increase dropdown size
            inputContainer.appendChild(select);
        });
    }

    function simulateGradesInput() {
        const inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ''; // Clear previous inputs

        numSemesters = parseInt(document.getElementById('numSemesters').value);

        for (let semester = 1; semester <= numSemesters; semester++) {
            console.log(`\nInput for Semester ${semester}:`);

            semestersSubjectsData[semester].forEach(({ subname, subcredit }, i) => {
                console.log(`Subject: ${subname}, Credit: ${subcredit}`);

                // Create HTML label element for subject name
                const label = document.createElement('label');
                label.setAttribute('for', `grade${semester}_${i + 1}`);
                label.textContent = `${subname} (Credit: ${subcredit}):`;
                inputContainer.appendChild(label);

                // Create HTML select element for grades
                const select = document.createElement('select');
                select.id = `grade${semester}_${i + 1}`;
                // Add grade options to the dropdown (customize as needed)
                const grades = ['O', 'A+', 'A', 'B+', 'B', 'C', 'U'];
                grades.forEach(grade => {
                    const option = document.createElement('option');
                    option.value = grade;
                    option.textContent = grade;
                    select.appendChild(option);
                });
                select.style.marginBottom = '10px'; // Add spacing
                select.style.width = '150px'; // Increase dropdown size
                inputContainer.appendChild(select);
            });
        }

        // Create "Calculate CGPA" button
        const calculateButton = document.createElement('button');
        calculateButton.textContent = 'Calculate CGPA';
        calculateButton.id = 'calculateButton';
        calculateButton.addEventListener('click', calculateCGPA);

        // Add a line break for better separation
        const lineBreak = document.createElement('br');
        inputContainer.appendChild(lineBreak);

        inputContainer.appendChild(calculateButton);
    }

    function calculateCGPA() {
        const userName = document.getElementById('userName').value;

        let totalCumulativePoints = 0;
        let totalCumulativeCredits = 0;

        for (let semester = 1; semester <= numSemesters; semester++) {
            console.log(`\nInput for Semester ${semester}:`);

            semestersSubjectsData[semester].forEach(({ subname, subcredit }, i) => {
                const gradeSelect = document.getElementById(`grade${semester}_${i + 1}`);
                const grade = gradeSelect.value.trim();
            });

            // Implement the calculation for each semester
            const { totalPoints, totalCredits } = calculateGPA(
                Array.from({ length: semestersSubjectsData[semester].length }, (_, i) => {
                    const gradeSelect = document.getElementById(`grade${semester}_${i + 1}`);
                    return gradeSelect.value.trim();
                }),
                semestersSubjectsData[semester]
            );

            // Accumulate total cumulative points and credits
            totalCumulativePoints += totalPoints;
            totalCumulativeCredits += totalCredits;
        }

        // Calculate CGPA
        const CGPA = totalCumulativePoints / totalCumulativeCredits;

        // Display CGPA at the end
        document.getElementById('output').textContent = `CGPA for ${userName} in all semesters is: ${CGPA.toFixed(2)}`;
    }

    // Set up event listeners
    document.getElementById('simulateButton').addEventListener('click', simulateGradesInput);
    document.getElementById('calculateButton').addEventListener('click', calculateCGPA);
});
