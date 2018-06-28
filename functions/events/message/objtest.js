const request = require('request')
const uuidv1 = require('uuid/v1')
// object to pulse messaging platform with
const message = {
    MessageSid: uuidv1(),
    SmsSid:uuidv1(),
    AccountSid: uuidv1(),
    MessagingServiceSid: uuidv1(),
    From: '+19195237948',
    To: '+19148195104',
    Body: "Hi",
    NumMedia: "",
    NumSegments: "",
    MediaContentType: " ",
    MediaUrl: " ",
    FromCity:"Charlotte",
    FromState: "NC",
    FromZip: "28222",
    FromCounty: "USA",
    SmsStatus: "",
    ToCity: "Charlotte",
    ToState: "NC",
    ToZip: "28222",
    ToCountry: "USA",
    AddOns: " ",
    ApiVersion: "v1",
    PostDate: Date.now(),
    ChaoticSid: uuidv1(),
    ChaoticSource: "slack" 
}

let url = 'https://strategicmessage.mybluemix.net/api/sms'
request.post({
    headers:{
        'accept' : 'application/json',
        'content-type': 'application/json'
    },
    url: url,
    body: JSON.stringify(message)
}, function(err, res, body){
    if (err){
        console.log(err)
    } else {
        console.log(res)
    }
})