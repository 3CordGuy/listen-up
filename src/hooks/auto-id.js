// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const hri = require('human-readable-ids').hri;

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    if (!data || !data._id || data._id == undefined) {
      const new_id = hri.random();
      context.data._id = new_id
    }

    return context;
  };
};
