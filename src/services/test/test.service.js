// Initializes the `test` service on path `/test`
const hooks = require("./test.hooks");
const errors = require("@feathersjs/errors");

module.exports = function(app) {
  const test = {
    async create(payload, params) {
      if (!payload)
        throw new errors.BadRequest(
          "Must Provide webhook ID /test/<your-webhook-id>"
        );

      const { query, request } = params;
      const { data } = await app
        .service("webhooks")
        .find({ query: { _id: query.webhook } });

      if (!data || data.length < 1) {
        throw new errors.BadRequest("Invalid ID or Webhook has expired");
      }

      // Renew webhook endpoint
      const thisWebhook = data[0];
      const updatedHook = await app
        .service("webhooks")
        .patch(thisWebhook._id, { updatedAt: new Date() });

      const post = Object.assign(
        { payload },
        { headers: request.headers },
        { time: new Date() },
        { webhook: query.webhook },
        { webhookLastUsed: updatedHook.updatedAt }
      );
      const result = await app.service("posts").create(post);

      return result;
    }
  };

  // Initialize our service with any options it requires
  app.use("/test/:webhook", test);

  // Get our initialized service so that we can register hooks
  const service = app.service("test/:webhook");

  service.hooks({
    before: {
      create: function(context) {
        context.params.query.webhook = context.params.route.webhook;
      }
    }
  });
};
