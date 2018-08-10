function setupNotify() {
  // Let's check if the browser supports notifications
  var img = "/listen-up-phones.png";
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  } else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there!");

    var text = "Notifications are enabled!";
    var notification = new Notification("Webhook Alerts", {
      body: text,
      icon: img
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function(permission) {
      if (permission === "granted") {
        var notification = new Notification("Webhook Alerts", {
          body: text,
          icon: img
        });
      }
    });
  }
}

function sendNotification(msg) {
  var message = msg && msg.text ? msg.text : "New Webhook Received";
  var title = msg && msg.title ? msg.title : "Webhook Alerts";

  var img = "/listen-up-phones.png";
  var notification = new Notification(title, { body: message, icon: img });
}
