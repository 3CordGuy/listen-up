const webhooks = require('./webhooks/webhooks.service.js');
const test = require('./test/test.service.js');
const posts = require('./posts/posts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(webhooks);
  app.configure(test);
  app.configure(posts);
};
