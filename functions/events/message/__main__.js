////////////////////////////////////////////////////////////////////
////////////             Strategic Machines           /////////////
///////////         Strategic Bot    c2018          //////////////
/////////////////////////////////////////////////////////////////

const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const msgData = require('../../../utils/messageObj')
const sendRequest = require('../../../helpers/machineRequest')


/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/

module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {
  // this switch statement determines strategic bot's response to the end user
  // if any case is met the reponse will be met appropriately
  // else I'm strategic but I can't respond to that.
  switch (text.toLowerCase().replace(/[^a-zA-Z ]/g, "")) {
    case 'hi':
    case 'hey':
    case 'how are you':
    case 'hello':
    case 'aloha':
    case 'bonjour':
    case 'sup':
      callback(null, {
        text: `Hi <@${user}>! I'm SM Bot a live agent for Strategic Machines.`,
      });
    break;
    case 'bye':
    case 'goodbye':
    case 'see you later':
      callback(null, {
        text: `Bye! I hope to see you soon!`
      })
    case 'who are you':
    case 'what are you':
    callback(null, {
      text: "I'm SM Bot a live agent for Strategic Machines and, I'm here to help with whatever you need."
    })
    break;
    case 'what is strategic machines':
    case 'who is strategic machines':
      // Interactive message that creates a button to offer user a choice
      // If yes or no button is clicked an action is triggered to respond
      // This triggers the more_yes action
      callback(null, {
        attachments: [
          {
            title: `Hi <@${user}>! Strategic Machines is an organization that connects businesses to the conversational economy through intelligent interactions using low latency messaging platforms and ai engines.`,
            callback_id: 'hear_more',
            attachment_type: 'default',
            text:
              'Would you like to know more about what Strategic Machines can do?',
            actions: [
              {
                name: "more_yes",
                text: "Yes",
                value: "yes",
                type: "button"
              },
              {
                name: "no_more",
                text: "No",
                value: "no",
                style: "danger",
                type: "button"
              }
            ]
          }
        ]
      });
        break;
    default:
      // set message object body to user entered text
      msgData.Body = text
      // console.log(msgData)
  
      getData(msgData).then(msgRes => {
        // consolidate returned array and seperate sentence with a period
        let message = msgRes.join('. ')
        // return message to slack
          callback(null, {
            text: message
          })
      })
  }

};

// make request to messaging platform and return for use in slack
async function getData(userText){
  let response = await sendRequest.postData(userText)
  return response
}

