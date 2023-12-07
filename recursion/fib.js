const fib = function (num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num === 2) return 1;


    return fib(num - 1) + fib(num - 2);
}

// through memoization.
const fibDynamic = function (num, mem = {}) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num === 2) return 1;

    if (mem["" + num]) return mem["" + num];
    mem["" + num] = fibDynamic(num - 1, mem) + fibDynamic(num - 2, mem);

    return mem["" + num];
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

console.log(fibDynamic(350));
console.log(fib(350));
