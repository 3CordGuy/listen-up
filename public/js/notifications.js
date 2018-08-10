function setupNotify() {
  // Let's check if the browser supports notifications
  var img = '/listen-up-phones.png'
  var text = 'Notifications are enabled!'
  if (!('Notification' in window)) {
    console.log('This browser does not support system notifications')
  } else if (Notification.permission === 'granted') {
    var notification = new Notification('Webhook Alerts', {
      body: text,
      icon: img
    })
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        var notification = new Notification('Webhook Alerts', {
          body: text,
          icon: img
        })
      }
    })
  }
}

function sendNotification(msg) {
  var title = msg && msg.title ? msg.title : 'Webhook Alerts'
  var message = msg && msg.text ? msg.text : 'New Webhook Received'

  var img = '/listen-up-phones.png'
  var notification = new Notification(title, { body: message, icon: img })
}
