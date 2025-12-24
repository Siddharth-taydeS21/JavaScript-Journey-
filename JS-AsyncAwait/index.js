async function wetharControl() {

    const delhiWether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 5000);
    })

    const mumbaiwethr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("22 deg")
        }, 2000);
    })

    delhiWether.then()
    mumbaiwethr.then()

    console.log("fetching delhi wether please wait...");
    let delhiW = await delhiWether
    console.log(`delhi wetehr fetched: ${delhiW}`);
    
    console.log("fetching mumbai wether please wait...");
    let mumbaiW = await mumbaiwethr
    console.log(`mumbai wetehr fetched: ${mumbaiW}`);

}
wetharControl()