const hri = require('human-readable-ids').hri

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const webhooks = new Schema(
    {
      _id: {
        type: String,
        default: function() {
          return hri.random()
        }
      },
      updatedAt: { type: Date, index: { expires: '1d' } }
    },
    {
      setDefaultsOnInsert: true,
      timestamps: true
    }
  )

  return mongooseClient.model('webhooks', webhooks)
}
