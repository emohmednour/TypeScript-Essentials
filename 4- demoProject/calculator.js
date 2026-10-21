"use strict";
// data:
// initial amount
// annual contribution
// expected return
// duration
function calculateInvestment(data) {
    //deconstractiong
    const { initialamount, duration, expectedreturn, annualcontribution } = data;
    if (initialamount < 0) {
        return "Initial investment amount must be at least zero.";
    }
    if (duration <= 0) {
        return "No valid amount of years provided.";
    }
    if (expectedreturn < 0) {
        return "Expected return must be at least zero.";
    }
    let total = initialamount;
    let Totalcontribution = 0;
    let totalInterestEarned = 0;
    let annualResult = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedreturn);
        totalInterestEarned = total - Totalcontribution - initialamount;
        Totalcontribution = Totalcontribution + annualcontribution;
        total = total + annualcontribution;
        annualResult.push({
            year: `year : ${i + 1}`,
            totalAmount: total,
            Totalcontribution: Totalcontribution,
            totalIntersetEarned: totalInterestEarned,
        });
    }
    return annualResult;
}
function printresult(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.Totalcontribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalIntersetEarned.toFixed(0)}`);
        console.log('----------------------');
    }
}
const investmentData = {
    initialamount: 1000,
    annualcontribution: 500,
    expectedreturn: .08,
    duration: 10
};
let result = calculateInvestment(investmentData); //[]
printresult(result);
