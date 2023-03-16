const trialDivision = (number) => {
    if (number <= 0 || number == 1 || number % 1 != 0) {
        return false;
    } else {
        for (let x = 2; x <= number / 2; x++) {
            if (number % x == 0) return false;
        }
    }
    return true;
}

module.exports = trialDivision;