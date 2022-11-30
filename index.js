
const request = require('request-promise')
require('dotenv').config()
const token = process.env.LINE_TOKEN_GROUP; // Token from line
const msg = 'this is message from node js server'
const fs = require("fs");
const test = "default_image.png"; //picture to sent

function sendMessage(){
    //const msg = 'this is message from node js server'
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
          'Content-Type': 'multipart/form-data',
          //'Content-Type': 'application/x-www-form-urlencoded',
     },
        'auth': {
          'bearer': token
     },form: {
          message: msg,
          imageFullsize: 'E:\TRAIN\NodeJs\line-notifiy\download.png'
       }
     }, (err,httpResponse,body) => {
        console.log(JSON.stringify(err));
        console.log(JSON.stringify(httpResponse));
        console.log(JSON.stringify(body));
     })
}

function sendImage(){
    request({
        method: 'POST',
        url: "https://notify-api.line.me/api/notify",
        resolveWithFullResponse: true,
        header: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'multipart/form-data',
        },
        formData: {
            message:msg,
            imageFile : fs.createReadStream(test)
        },
        auth: {
            bearer: token,
        },

    },(err, httpResponse, body) => {
        console.log(JSON.stringify(err));
        console.log(JSON.stringify(httpResponse));
        console.log(JSON.stringify(body));
    });
}
sendImage();
//setInterval(sendImage,10000);