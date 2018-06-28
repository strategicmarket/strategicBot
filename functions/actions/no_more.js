const lib = require("lib")({ token: process.env.STDLIB_TOKEN });
const request = require("request");
/**
 *     All Actions in response to interactive messages use this template, simply
 *     create additional files with different names to add actions.
 *
 *   See https://api.slack.com/docs/message-buttons for more details.
 *
 * @param {string} user The user id of the user that invoked this command (name is usable as well)
 * @param {string} channel The channel id the command was executed in (name is usable as well)
 * @param {object} action The full Slack action object
 * @param {string} botToken The bot token for the Slack bot you have activated
 * @returns {object}
 */
// module.exports = (user, channel, action = {}, botToken = null, callback) => {
//   callback(null, {
//     text: `Oh ok... Well, if you change your mind, I'm ready to answer your questions.`,
//   });
// };

const message = {
    // MessageSid: uuidv1(),
    // SmsSid:uuidv1(),
    // AccountSid: uuidv1(),
    // MessagingServiceSid: uuidv1(),
    From: '+17045551212',
    To: '+19142223434',
    Body: "Insert your slack bot message on this property",
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
    // ChaoticSid: uuidv1(),
    ChaoticSource: "slack" 
}

request.post('https://strategicmessage.mybluemix.net/api/sms', message, function(err, res, body){
    if (err){
        console.log(err)
    } else {
        console.log(body)
    }
})