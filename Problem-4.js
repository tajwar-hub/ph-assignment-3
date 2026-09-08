function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < scores.length; i++) {
        if (typeof scores[i] !== "number") {
            return "Invalid";
        }
    }

    return scores
        .map(score => score + 10)
        .reduce((total, currentScore) => total + currentScore, 0);
}