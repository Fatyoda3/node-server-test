'use strict';
// range function
// it can do start stop step 
// under very specific condition like start < stop ||
/**@__range -@returns {int array} takes start stop step as positional arguments */
/**
* @param {int} start
* @param {int} stop
* @param {int} step
*/
const __range = (start, stop, step) => {
    const internal_array = [];
    if (start && !stop && !step) {

        for (let i = 0; i < start; i++) {
            internal_array[i] = i;
        }
    }

    else if (start && stop && !step) { // 5 2
        /*  if (start > stop) {
         console.log('first')
 
             for (let i = stop; i > start; i--) {
                 internal_array[i - start] = i;
             }
         } */

        // else
        for (let i = start; i < stop; i++) {
            internal_array.push(i);
        }
    }

    else if (start && stop && step) {

        for (let i = start; i < stop; i += step) {
            internal_array.push(i);
        }
    }
    return internal_array;



}


// console.log(__range(20))
// console.log(__range(10, 20))
// console.log(__range(12, 20))
// console.log(__range(-20, 20,2))

// console.log(__range(2))
for (const el of __range(10, 20)) {
    console.log(el)
}

// var ar = new BigUint64Array(25000).fill(250*1200)