const uuidv1 = require('uuid/v1')

/*
* object to pulse messaging object with and
* pass to sendReqest in __main__ in message folder
* From is the number of user. It is hard coded right now
* but should be changed. Same goes for Body.
*/
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

module.exports = message