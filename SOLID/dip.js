// Violation
// class EmailService {
//   send(message) {
//     console.log("Sending email:", message);
//   }
// }

// class Notification {
//   constructor() {
//     this.emailService = new EmailService(); // tightly coupled
//   }

//   sendNotification(message) {
//     this.emailService.send(message);
//   }
// }

// DIP
class MessageSender { //abstraction
  send(message) {
    throw new Error("send() must be implemented");
  }
}

class EmailSender extends MessageSender {  // low level module
  send(message) {
    console.log("Sending email:", message);
  }
}
// If we want to add SMS implementation
class SmsSender extends MessageSender { // low level module
  send(message) {
    console.log("Sending SMS:", message);
  }
}

class Notification {  // high level module
  constructor(sender) {
    this.sender = sender; // depends on abstraction, not concrete class
  }

  sendNotification(message) {
    this.sender.send(message);
  }
}

const emailNotification = new Notification(new EmailSender());
emailNotification.sendNotification("Hello via Email");

const smsNotification = new Notification(new SmsSender());
smsNotification.sendNotification("Hello via SMS");