var request = require('superagent');
var POST_METHOD = 'POST';

module.exports = {
  dispatchEvent: function(eventObj) {
    var url = eventObj.url;
    var params = eventObj.params;

    if (eventObj.httpVerb === POST_METHOD) {
      return request
        .post(url)
        .type('application/json')
        .send(params)
    } else {
      return request
        .get(url)
        .type('application/json')
        .query(params)
    }
  }
};

