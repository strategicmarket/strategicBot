const lib = require("lib")({ token: process.env.STDLIB_TOKEN });

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
module.exports = (user, channel, action = {}, botToken = null, callback) => {
  callback(null, {
    text: `Here at Strategic Machines, we help our clients design, build and deploy intelligent brand interactions, leveraging the world's top technologies for compelling business outcomes. I could talk about this all day but...
    `,
    attachments: [
      {
        text: "Why don't you visit our website to learn even more! Here's the link. https://strategicmessage.mybluemix.net/web/",
        fallback: "Can't display attachment",
        callback_id: "callback_id",
        actions: [
          {
            name: "more_yes",
            text: "Refresh",
            type: "button",
            value: "value"
          }
        ]
      }
    ]
  });
};
