function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true
}

function getRotations(num) {
    const rotations = [];
    const strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        const rotation = strNum.slice(i) + strNum.slice(0, i);
        rotations.push(parseInt(rotation, 10));
    }
    return rotations;
}

// Function to check if a number is a circular prime
function isCircularPrime(num) {
    const rotations = getRotations(num);
    return rotations.every(isPrime);
}

// Main function to calculate the number of circular primes below a given number
function calculateCircularPrimes() {
    const inputNumber = document.getElementById('inputNumber').value;
    const number = parseInt(inputNumber, 10);

    if (isNaN(number) || number < 100 || number > 100000) {
        document.getElementById('result').textContent = "Please enter a number between 100 and 100,000.";
        return;
    }

    let count = 0;
    for (let i = 100; i < number; i++) {
        if (isCircularPrime(i)) {
            count++;
        }
    }

    document.getElementById('result').textContent = `The number of circular primes below ${number} is: ${count}`;
}