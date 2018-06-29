const Axios = require("axios");

module.exports = {
  // message will be passed in from messaging object
  // which can be found in utils
  postData: async function(message) {
    // url of messaging platform
    let url = "https://strategicmessage.mybluemix.net/api/sms";

    let data = await Axios.post(url, message)
        .then(res => {
            let msgData = res.data
            // stage empty array which will filled with platform response
            const msgResponse = []
            for (messages of msgData){
                msgResponse.push(messages.msg)
            }
            return msgResponse;
        })
        return data
  }
};

