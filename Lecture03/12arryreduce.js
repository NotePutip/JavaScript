const array = [15, 16, 17, 18, 19];

function reduce(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accunulator: ${accumulator}, currenValue: ${currentValue}, index: ${index},returns:${returns}`,
    );
    return returns;
}

array.reduce(reducer);