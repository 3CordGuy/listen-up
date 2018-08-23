// Initializes the `posts` service on path `/posts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/posts.model');
const hooks = require('./posts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/posts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('posts');

  service.hooks(hooks);
};
