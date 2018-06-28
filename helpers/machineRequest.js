const request = require('request')

module.exports = {
    // message will be passed in from messaging object
    // which can be found in utils
    postData: function(message) {
        // url of messaging platform
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
    }
}