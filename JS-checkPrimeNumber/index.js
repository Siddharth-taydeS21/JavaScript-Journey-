//Check if the number is prime..

const isPrime = (n) => {
    if (n <= 1) {
        return `${n} is not a prime nmuber`
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0)
            return `${n} is not a prime nmuber`;
        }
        return `${n} is a prime nmuber`;
    }
}
// console.log(isPrime(15));

//for ceking prime numbers between 1 to 100 or between any range of numbers..
for (let i = 1; i <= 100; i++) {
   console.log(isPrime(i));
}