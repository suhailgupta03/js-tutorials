function isSpaceLeftOnHardDisk() {
    const rand = (Math.random() * 10) > 2 ? true : false 
    return rand;
}

function downloader(resolve, reject) {
    let downloadPercentage = 0;
    const i = setInterval(() => {
        console.log(`Downloaded ${downloadPercentage}%`);
        downloadPercentage += 10;
        const spaceLeft = isSpaceLeftOnHardDisk();
        if(!spaceLeft) {
            reject("No space left on the disk. Empty some space");
            clearInterval(i);
        }
        if(downloadPercentage >= 100) {
            resolve();
            clearInterval(i);
        }
    }, 1000)
}
// function download a big MP3 file
// to the system. This gives us a way 
// to wait until we have the complete data
// and then only notify with the STATUS
function downloadMP3() {
    const pro =  new Promise(downloader)
    return pro;
}

function downloadMP4() {
    const pro =  new Promise(downloader)
    return pro;
}

downloadMP3()
    .then(r => {
        console.log("Downloaded the MP3 file!!");
    })
    .catch(err => {
        console.log(err);
        console.log("MP3 failed");
    })

downloadMP4()
    .then(r => {
        console.log("Downloaded the MP4 file!!");
    })
    .catch(err => {
        console.log(err);
        console.log("MP4 failed");
    })