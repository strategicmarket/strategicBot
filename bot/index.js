////////////////////////////////////////////////////////////////////
////////////             Strategic Machines           /////////////
///////////         Strategic Bot    c2018          //////////////
/////////////////////////////////////////////////////////////////
const dotenv = require("dotenv").config();
const Botkit = require("botkit");
const app = require("express")
const request = require("request");
const Controller = Botkit.slackbot({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  clientVerificationToken: process.env.VERIFICATION_TOKEN,
  scopes: ["bot"]
});

// connect to Slack
Controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM(function(err, bot, payload) {
  if (err) {
    console.log(`Error connecting to Slack: ${err}`);
  } else {
    console.log("Connected to Slack RTM!");
  }
});

// Let the channel know you're here!
Controller.on("bot_channel_join", function(bot, message) {
  bot.reply(message, "SM Bot has joined this channel!");
});

// When SM Bot hears any of the opitions below, 
// it will ask the user if they'd like to know more
// from here the intent is to inform the customer of Strategic Machines services
// Get the Sale!
Controller.hears(
  ["hi", "howdy", "hello", "howdy", "aloha", "bonjour"],
  [
    "ambient",
    "direct_message",
    "direct_mention",
    "mention",
    "message_received"
  ],
  function(bot, message) {
    bot.reply(message, {
      attachments: [
        {
          title: "Hi! I'm SM Bot!",
          callback_id: "hear_more",
          attachment_type: "default",
          text:
            "Would you like to know more about what Strategic Machines can do?",
          actions: [
            {
              name: "yes",
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
    });
  }
);

// what is strategic machines
Controller.hears(
  ["what is strategic machines?", "who is strategic machines?"][
    ("ambient",
    "direct_message",
    "direct_mention",
    "mention",
    "message_received")
  ],
  function(bot, message) {
    bot.reply(
      message,
      "Strategic Machines, Inc is a venture dedicated to connecting organizations with the conversational economy."
    );
  }
);
Controller.hears(
  ["what can you do?", "what can you do"],
  [
    "ambient",
    "direct_message",
    "direct_mention",
    "mention",
    "message_received"
  ],
  function(bot, message) {
    let apiRes;
  /*
    Testing to see if using this route from the api machine
    will yield a response. This will need to be updated
  */
    request("http://localhost:3100/status", function(err, res) {
      if (err) {
        console.log(`Error in request: ${err}`);
      } else {
        apiRes = res.body;
        console.log(apiRes);
      }
      // bot.reply(message, apiRes)
    });
  }
);

module.exports = app