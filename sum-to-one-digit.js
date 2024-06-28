/* 
  Sum To One Digit
  Implement a function ​sumToOne(num)​ that, given
  a number, sums that number’s digits repeatedly
  until the sum is only one digit. Return that
  final one digit result.

  Ex.
  sumToOne(5) // 5
  sumToOne(20) // 2
  sumToOne(849) // 3
*/

/**
 * This function takes in an integer as input and
 * sums that number’s digits repeatedly until the
 * sum is only one digit.
 * @param {number} num
 * @returns {number}
 */
/**
 * This function takes in an integer as input and
 * sums that number’s digits repeatedly until the
 * sum is only one digit.
 * @param {number} num
 * @returns {number}
 */

function sumToOne(num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

console.log(sumToOne(5)); // 5
console.log(sumToOne(20)); // 2
console.log(sumToOne(849)); // 3
