const NeDB = require('nedb');
const path = require('path');

module.exports = function (app) {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'webhooks.db'),
    timestampData: true,
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'updatedAt', expireAfterSeconds: 28800 });

  Model.persistence.setAutocompactionInterval(1000 * 60 * 30) // Compact data every 30 min

  return Model;
};
