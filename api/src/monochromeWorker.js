const gm = require('gm')

const {
    workerData,
    parentPort
} = require('worker_threads')

gm(workerData.source).write().monochrome(workerData.destinaton, (error) => {
    if (error) {
        throw error;
    }
    parentPort.postMessage({
        monochrome: true
    })
})