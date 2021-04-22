const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empHrsAndWageArray = new Array();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function sum(dailyWage) {
    totEmpWage += dailyWage;
}

let totEmpWage = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empWageArray.push(calculateWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empHrsAndWageArray.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calculateWage(empHrs),
        toString() {
            return '\nDay ' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
        },
    });
}

//UC 7A - Calc total wage using Array forEach traversal or reduce method
empWageArray.forEach(sum);
console.log("UC7A - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage += dailyWage;
}
console.log("UC7A - Emp Wage with reduce : " + empWageArray.reduce(totalWages, 0))

//UC 7B - Show the day along with daily wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empWageArray.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show Days when Full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance When Full Time Wage was earned using find function
function findFUllTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage earned on Day : " + mapDayWithWageArr.find(findFUllTimeWage));

//UC 7E - Check if every element of full time is truely holding full time wage 
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all elements have full time wage : " + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - Check if any part time wage : " + fullDayWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G - Number of Days Emp Worked : " + empWageArray.reduce(totalDaysWorked, 0));

//UC 8 - Calculate employee wage with employee wage map
console.log(empDailyWageMap);
console.log("UC8 - Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC 9 - Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);
let totalSalary = empWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow : " + " Total Hours : " + totalHours + " Total Wage : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

//UC 10 - Object Creation
console.log("UC 10 Showing Daily Hours Worked and Wage Earned : " + empHrsAndWageArray);

//UC 11 - Object Operations using Arrow Function
let totalEmpWage = empHrsAndWageArray.filter(dailyEmpHrsAndWage => dailyEmpHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyEmpHrsAndWage) => totalWage += dailyEmpHrsAndWage.dailyWage, 0);
let totalEmpHours = empHrsAndWageArray.filter(dailyEmpHrsAndWage => dailyEmpHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyEmpHrsAndWage) => totalHours += dailyEmpHrsAndWage.dailyHours, 0);

console.log("UC 11A Total Hours : " + totalEmpHours + " Total Wages : " + totalEmpWage);

console.log("UC 11B Logging Full Work Days");
empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartWorkingDaysStrings : " + partWorkingDayStrArr);

let nonWorkingDayNum = empHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NoWorkingDayNums : " + nonWorkingDayNum);