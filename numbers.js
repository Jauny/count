BASE_TWO = [0, 1]
BASE_TEN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
BASE_ABC = ['a', 'b', 'c']
BASE_HEXA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

BASES = {
  2: BASE_TWO,
  3: BASE_ABC,
  10: BASE_TEN,
  16: BASE_HEXA
}

class Counter {
  static incrementDigit(base, digit) {
    digit = digit || base[0]
    const index = base.indexOf(digit)
    const next = (index + 1) % base.length

    return base[next]
  }

  static  incrementDigits(base, digits) {
    let digitsIndex = 0
    let nextDigit = this.incrementDigit(base, digits[digitsIndex])
    digits[digitsIndex] = nextDigit

    while (base.indexOf(nextDigit) === 0) {
      digitsIndex++
      nextDigit = this.incrementDigit(base, digits[digitsIndex])
      digits[digitsIndex] = nextDigit
    }
  }

  static count(base, number) {
    const digits = [base[0]]
    for (let i = number, index = 1; i > 0; i-- && index++) {
      this.incrementDigits(base, digits)
    }
    return digits
  }

  static formatCount(base, number, width=5) {
    const pad = base[0].toString().repeat(width)
    const digits = this.count(base, number).reverse().join('')
    const result = pad.substring(0, pad.length - digits.length) + digits
    return result
  }
}

/**********************
 * VIEW
 **********************/ 
const app = new Vue({
  el: '#app',
  data: {
    number: 0,
    base: 10
  },
  computed: {
    formatCount: function() {
      return Counter.formatCount(BASES[this.base], this.number)
    }
  }
});

const colors = new Vue({
  el: '#colors',
  data: {
    red: 250,
    green: 105,
    blue: 0
  },
  computed: {
    hexa: function() {
      return {
        red: Counter.formatCount(BASES[16], this.red, 2),
        green: Counter.formatCount(BASES[16], this.green, 2),
        blue: Counter.formatCount(BASES[16], this.blue, 2)
      }
    }
  }
});
