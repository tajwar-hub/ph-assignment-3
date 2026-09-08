function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    else if (students.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < students.length; i++) {
        if (!students[i].hasOwnProperty('name') || !students[i].hasOwnProperty('score') || typeof students[i].score !== "number") {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => {

        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {

        return name.toUpperCase();
    });

    return names.slice(0, 3);
}