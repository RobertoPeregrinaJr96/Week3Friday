/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep' .  // print 'beep'
        pause for 400ms // setTimeout(anonFunc, 400)
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
    // Your code here
    for (let i = 0; i < code.length; i++) {
        const num = code[i];
        //console.log(num)
        if (num === 0) {
            console.log("beep")
            setTimeout(() => {
            }, 400)
        } else {
            console.log("boop")
            setTimeout(() => {
            }, 800)
        }

    }
    //console.log(num)



}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}