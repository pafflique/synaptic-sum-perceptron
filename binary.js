function fromNumber(num, rank) {
    var binary = num.toString(2).split('');

    return Array(rank - binary.length)
        .fill(0)
        .concat(binary.map(function (n) {
            return parseInt(n, 10);
        }));
}

function toNumber(binary) {
    return parseInt(binary.join(''), 10);
}

function parse(arr) {
    return parseInt(arr.map(function (v) {
        return Math.round(v);
    }).map(function (v) {
        return v > 0 ? 1 : 0;
    }).join(''), 2);
}

module.exports = {
    fromNumber: fromNumber,
    toNumber: toNumber,
    parse: parse
};