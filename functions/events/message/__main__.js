////////////////////////////////////////////////////////////////////
////////////             Strategic Machines           /////////////
///////////         Strategic Bot    c2018          //////////////
/////////////////////////////////////////////////////////////////

const lib = require('lib')({token: process.env.STDLIB_TOKEN});

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
  // if any case is met the reponse well be met
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
        text: `Hey there! <@${user}> said ${text}`,
        attachments: [
        ]
      });
    break;
    case 'see you later':
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
      console.log('machine')
      callback(null, {
        attachments: [
          {
            title: `Hi <@${user}>! I'm SM Bot!`,
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
                name: "no",
                text: "No",
                value: "no",
                style: "danger",
                type: "button"
              }
            ]
          }
        ]
        // text: `Hey there <@${user}>! I'm SM Bot!`,
        // attachments: [
        //   // You can customize your messages with attachments.
        //   // See https://api.slack.com/docs/message-attachments for more info.
        // ]
      });
        break;
    default:
      console.log("didn't work")
      callback(null, {
        text: "I'm very strategic but, I can't seem to respond to that at this time..."
      })
  }

};