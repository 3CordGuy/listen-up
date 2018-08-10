function setupNotify() {
  // Let's check if the browser supports notifications
  var img = "/listen-up-phones.png";
  if (!("Notification" in window)) {
    console.log("This browser does not support system notifications");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function(permission) {
      var text = "Notifications are enabled!";
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
  var title = msg && msg.title ? msg.title : "Webhook Alerts";

  var img = "/listen-up-phones.png";
  var notification = new Notification(title, { body: message, icon: img });
}
