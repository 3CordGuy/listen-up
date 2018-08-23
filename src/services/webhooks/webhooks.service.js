// Initializes the `webhooks` service on path `/webhooks`
const createService = require('feathers-mongoose');
const createModel = require('../../models/webhooks.model');
const hooks = require('./webhooks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/webhooks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('webhooks');

  service.hooks(hooks);
};
