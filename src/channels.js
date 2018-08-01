module.exports = function(app) {
  if(typeof app.channel !== 'function') {
    // If no real-time functionality has been configured just return
    return;
  }

  app.on('connection', connection => {
    // On a new real-time connection, add it to the anonymous channel
    if (!connection.webhook) {
      app.channel('empty').join(connection);
      return
    };

    app.channel(`${connection.webhook}`).join(connection);
  });

  app.service('posts').publish((data, context) => {
    return app.channel(`${data.webhook}`);
  });  
};
