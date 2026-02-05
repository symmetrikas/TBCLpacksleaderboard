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
    //Ship Pack
    if (rank == 1) {
        return 500;
    }
    //Wave Pack
    if (rank == 2) {
        return 350;
    }
    //Cube Pack
    if (rank == 3) {
        return 300;
    }
    //Robot Pack
    if (rank == 4) {
        return 650;
    }
    //Swing Pack
    if (rank == 5) {
        return 300;
    }
    //Balls Pack
    if (rank == 6) {
        return 550;
    }
    //Daul Pack
    if (rank == 7) {
        return 400;
    }
    //Memory Trials
    if (rank == 8) {
        return 300;
    }
    //Hank Pack
    if (rank == 9) {
        return 350;
    }
    //Anatomy Pack
    if (rank == 10) {
        return 500;
    }
    //Hazbin Hotel
    if (rank == 11) {
        return 500;
    }
    //Hazbin Resort
    if (rank == 12) {
        return 750;
    }
    //Impossable Endings Pack
    if (rank == 13) {
        return 650;
    }
    //Finni Pack
    if (rank == 14) {
        return 450;
    }
    //Deco Pack 1
    if (rank == 15) {
        return 500;
    }
    // MP VC Pack
    if (rank == 16) {
        return 100;
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