// posts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const posts = new Schema(
    {
      createdAt: { type: Date, index: { expires: '60s' } },
      payload: { type: Object },
      headers: { type: Object },
      time: { type: Number },
      webhook: { type: String }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('posts', posts)
}
