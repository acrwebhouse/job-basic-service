const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const utilsFile = require('../utils/file');
const path = require('path')
const globule = require('globule');
const watermark = require('../tools/watermark');

function watermarkByFolder(input,output,watermarkPath,callback) {
    const images = globule.find(path.join(input, '*'));
    const promiseArr = []
    const opacity = 0.5
    for(let i =0 ;i<images.length;i++){
        const dstPath = path.join(output,path.basename(images[i]))
        const options = {
            opacity,
            dstPath
        };
        promiseArr.push(watermark.addWatermark(images[i], watermarkPath,options))
    }

    Promise.all(promiseArr)
        .then(value => {
        console.log(value)
        console.log('start remove images')
        console.log(images)
        utilsFile.removeFiles(images,()=>{})
        callback(true,'success')
    })
    .catch(err => {
        console.log(err.message)
        callback(false,err.message)
    })
}


exports.watermarkByFolder = watermarkByFolder
