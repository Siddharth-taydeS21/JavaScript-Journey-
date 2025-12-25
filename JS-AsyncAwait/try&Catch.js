// setTimeout( () => {
//     console.log('fetching data from API 1, plese wait....');
//     console.log('Data fetched Successfully from API 1');
// }, 1000 )

// console.log(Mumbaiwether)//

// /* Code wont run from here because of the error
// all of the next executions will stop..
// here the try-Ctach comes in place.
// */

// setTimeout( () => {
//     console.log('fetching Wether Data of Delhi, plese wait....');
//     console.log('Data fetched Successfully of Delhi wether');
// }, 3000 )

// setTimeout( () => {
//     console.log('fetching Wether Data of Mumbai, plese wait....');
//     console.log('Data fetched Successfully of Mumbai wether');
// }, 6000 )

// Try Catch Example

setTimeout( () => {
    console.log('fetching data from API 1, plese wait....');
    console.log('Data fetched Successfully from API 1');
}, 100 )

try { 
    console.log(Mumbaiwether)
    // Wraped the code that might thorow an error. if an error occurs the try block will handover the error object to the catch block.
} catch (error) {
    console.log("Error : somthing went wrong.");
    //Got the error in catch, an handled it with catch
}
//whole programs execution will not stop like the privious version. 

setTimeout( () => {
    console.log('fetching Wether Data of Delhi, plese wait....');
    console.log('Data fetched Successfully of Delhi wether');
}, 3000 )

setTimeout( () => {
    console.log('fetching Wether Data of Mumbai, plese wait....');
    console.log('Data fetched Successfully of Mumbai wether');
}, 6000 )