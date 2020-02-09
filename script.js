var count = 0;

function cc(card) {
    let betHold = '';
    const obj = {
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 0,
        8: 0,
        9: 0,
        10: -1,
        'J': -1,
        'Q': -1,
        'K': -1,
        'A': -1
    }

    // function betOrHold(count) {
    //     return count > 0 ? "Bet" : "Hold"
    // }

    // if (obj[`${card}`] === 1) {
    //     count++;
    //     return `${count} ${betOrHold(count)}`
    // }
    // else if (obj[`${card}`] === 0) {
    //     count++;
    //     return `${count} ${betOrHold(count)}`
    // }
    // else if (obj[`${card}`] === -1) {
    //     count++;
    //     return `${count} ${betOrHold(count)}`
    // }
    // else {
    //     return "Dunno"
    // }

var count = 0;

function cc(card) {
    let betHold = '';
    const obj = {
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 0,
        8: 0,
        9: 0,
        10: -1,
        'J': -1,
        'Q': -1,
        'K': -1,
        'A': -1
    }

}













    // switch (obj[String(card)]) {
    //     case 1:
    //         count++;
    //         return `${count} ${betOrHold(count)}`
    //     case 0:
    //         return `${count} ${betOrHold(count)}`
    //     case -1:
    //         count--;
    //         return `${count} ${betOrHold(count)}`
    //     default:
    //         return "Dunno"
    // }

    switch (obj[String(card)]) {
        case 1:
            count++;
            betHold = count > 0 ? "Bet" : "Hold"
        case 0:
            betHold = count > 0 ? "Bet" : "Hold"
        case -1:
            count--;
            betHold = count > 0 ? "Bet" : "Hold"
        default:
            break;
    }
    return `${count} ${betHold}`
}


console.log(cc(2)); console.log(cc(3)); console.log(cc(7)); console.log(cc('K')); console.log(cc('A'));

function collectAverageSalary(){
    
}
