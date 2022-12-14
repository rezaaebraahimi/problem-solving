/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million,
find the sum of the even-valued terms.
*/

function answer(firstNum, secondNum, newFib, sum) {
    while (newFib < 4000000) {
        sum += newFib;
        firstNum = secondNum + newFib;
        secondNum = newFib + firstNum;
        newFib = firstNum + secondNum;
    }
    return sum;
}

console.log(answer(1,1,2, 0));

    /* Answer is 4613732 */