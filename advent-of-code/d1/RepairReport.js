const fs = require('fs').promises;

const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');
};
// --- Day 1: Report Repair ---
// After saving Christmas five years in a row, you've decided to take a vacation at 
// a nice resort on a tropical island. Surely, Christmas will go on without you.

// The tropical island has its own currency and is entirely cash-only. The gold coins 
// used there have a little picture of a starfish; the locals just call them stars. 
// None of the currency exchanges seem to have heard of them, but somehow, you'll need 
// to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

// To save your vacation, you need to get all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day 
// in the Advent calendar; the second puzzle is unlocked when you complete the first. 
// Each puzzle grants one star. Good luck!

// Before you leave, the Elves in accounting just need you to fix your expense report 
// (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply 
// those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them 
// together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; 
// what do you get if you multiply them together?

// Time: O(n)
// Space: O(n)

const repairReport = async () => {
    const lines = await readLines();
    const numbers = lines.map(Number);
    const numberSet = new Set();

    for (let number of numbers) {
        const diff = 2020 - number;
        if(numberSet.has(diff)) {
            return number * diff;
        } 
        numberSet.add(number);
    }
}

// repairReport().then(console.log); // 913824


// --- Part Two ---
// The Elves in accounting are thankful for your help; one of them even offers you 
// a starfish coin they had left over from a past vacation. They offer you a second 
// one if you can find three numbers in your expense report that meet the same criteria.

// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675.
//  Multiplying them together produces the answer, 241861950.

// In your expense report, what is the product of the three entries that sum to 2020?

// Time: O(n^2)
// Space: O(n^2) 

const repairReport2 = async () => {
    const lines = await parseLines();
    const numbers = lines.map(Number);
    const pairSums = {};

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            const num1 = numbers[i];
            const num2 = numbers[j];
            const sum = num1 + num2;

            pairSums[sum] = [num1, num2];
        }
    }

    for (let number of numbers) {
        const diff = 2020 - number;
        if (diff in pairSums) {
            const [numB, numC] = pairSums[diff];
            return number * numB * numC
        }
    }
}

repairReport2().then(console.log) //240889536