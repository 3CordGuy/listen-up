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

  // eslint-disable-next-line no-unused-vars
  // app.publish((data, hook) => {
  //   // Here you can add event publishers to channels set up in `channels.js`
  //   // To publish only for a specific event use `app.publish(eventname, () => {})`
  //   console.log(data, hook);
  //   console.log('Publishing all events to all authenticated users. See `channels.js` and https://docs.feathersjs.com/api/channels.html for more information.'); // eslint-disable-line

  //   // e.g. to publish all service events to all authenticated users use
  //   return app.channel(`webhook/${data.webhook}`);
  // });

  // Here you can also add service specific event publishers
  // e.g. the publish the `users` service `created` event to the `admins` channel
  // app.service('users').publish('created', () => app.channel('admins'));
  
  // With the userid and email organization from above you can easily select involved users
  // app.service('messages').publish(() => {
  //   return [
  //     app.channel(`userIds/${data.createdBy}`),
  //     app.channel(`emails/${data.recipientEmail}`)
  //   ];
  // });
  app.service('posts').publish((data, context) => {
    return app.channel(`${data.webhook}`);
  });  
};
