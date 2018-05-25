const BASE_TWO = [0, 1]
const BASE_TEN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const BASE_ABC = ['a', 'b', 'c']

const incrementDigit = (base, digit) => {
  digit = digit || base[0]
  const index = base.indexOf(digit)
  const next = (index + 1) % base.length

  return base[next]
}

const incrementDigits = (base, digits) => {
  let digitsIndex = 0
  let nextDigit = incrementDigit(base, digits[digitsIndex])
  digits[digitsIndex] = nextDigit

  while (base.indexOf(nextDigit) === 0) {
    digitsIndex++
    nextDigit = incrementDigit(base, digits[digitsIndex])
    digits[digitsIndex] = nextDigit
  }
}

const count = (base, number) => {
  const digits = [base[0]]
  for (let i = number, index = 1; i > 0; i-- && index++) {
    incrementDigits(base, digits)
  }
  console.log(digits.reverse().join(''))
}


const main = () => {
  count(BASE_ABC, 0); 
  count(BASE_ABC, 1); 
  count(BASE_ABC, 2); 
  count(BASE_ABC, 3); 
  count(BASE_ABC, 4); 
  count(BASE_ABC, 5); 
};

document.addEventListener("DOMContentLoaded", function() {
  main();
});
