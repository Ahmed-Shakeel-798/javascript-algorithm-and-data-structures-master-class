const calcPower = function (base, exp) {
    if (exp < 1) return 1;
    if (exp === 1) return base;

    return base * calcPower(base, exp - 1);
}

console.log(calcPower(5, 3));