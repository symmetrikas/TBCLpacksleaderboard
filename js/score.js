/**
 * Numbers of decimal digits to round to
 */
const scale = 3;

/**
 * Calculate the score awarded when having a certain percentage on a list level
 * @param {Number} rank Position on the list
 * @param {Number} percent Percentage of completion
 * @param {Number} minPercent Minimum percentage required
 * @returns {Number}
 */
export function score(rank, percent, minPercent) {
    if (rank = 1) {
        return 500;
    }
    if (rank = 2) {
        return 350;
    }
    if (rank = 3) {
        return 300;
    }
    if (rank = 4) {
        return 650;
    }
    if (rank = 5) {
        return 300;
    }
    if (rank = 6) {
        return 550;
    }
    if (rank = 7) {
        return 400;
    }
    if (rank = 8) {
        return 300;
    }
    if (rank = 9) {
        return 350;
    }
    if (rank = 10) {
        return 500;
    }
    if (rank = 11) {
        return 500;
    }
    if (rank = 12) {
        return 750;
    }
    if (rank = 13) {
        return 650;
    }
    if (rank = 14) {
        return 450;
    }
    if (rank = 15) {
        return 500;
    }
}

export function round(num) {
    if (!('' + num).includes('e')) {
        return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    } else {
        var arr = ('' + num).split('e');
        var sig = '';
        if (+arr[1] + scale > 0) {
            sig = '+';
        }
        return +(
            Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
            'e-' +
            scale
        );
    }
}