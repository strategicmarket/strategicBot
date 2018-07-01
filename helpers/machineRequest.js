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
            // console.log(msgData)
            // stage empty array which will filled with platform response
            const msgResponse = []

            msgData.forEach((r) => {
                // console.log(`R: ${r}`)
                let rKey = Object.keys(r)[0]
                let message = r[rKey]
                msgResponse.push(message)
                // console.log(`message: ${message}`)
                // console.log(`msgResponse: ${msgResponse}`)
            })
            return msgResponse
        })
        return data
  }
};

