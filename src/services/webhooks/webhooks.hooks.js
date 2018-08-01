const { disallow, allow, iff, provider } = require('feathers-hooks-common');

const autoId = require('../../hooks/auto-id');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [autoId()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
