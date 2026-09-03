// One reason to change
// class OrderService {
//     constructor(order) { 
//         this.order = order 
//     }

//     // Business logic
//     calculateTotal() {
//         return this.order.items.reduce((sum, i) => sum + i.price, 0)
//     }

//     // Persistence
//     saveToDatabase() {
//         console.log('INSERT INTO orders ...')
//     }

//     // Notifications
//     sendConfirmationEmail() {
//         console.log(`Email sent to ${this.order.customerEmail}`)
//     }
// }
// const order = {
//     items: [
//         { name: "Phone", price: 8000 },
//         { name: "Case", price: 200 }
//     ],
//     customerEmail: "user@shop.com"
// };

// const service = new OrderService(order);

// console.log(service.calculateTotal()); // 8200
// service.saveToDatabase();
// service.sendConfirmationEmail();

// INTRODUCE A change
// class OrderService {
//     constructor(order) { this.order = order }

//     calculateTotal() {
//         const total = this.order.items.reduce(
//             (sum, i) => sum + i.price,
//             0
//         );

//         return total * (1 - this.order.discountPercent / 100);
//     }

//     // Reason 2: persistence
//     saveToDatabase() {
//         console.log('INSERT INTO orders ...') // DB gets the wrong data
//     }

//     // Reason 3: notifications
//     sendConfirmationEmail() {
//         console.log(`Email sent to ${this.order.customerEmail}`) // Email sent with 
//     }
// }

// const order = {
//     items: [
//         { name: "Phone", price: 8000 },
//         { name: "Case", price: 200 }
//     ],
//     customerEmail: "user@shop.com",
//     discountPercent: 10
// };

// const service = new OrderService(order);

// console.log(service.calculateTotal());   // 7380 instead of 8200
// service.saveToDatabase();
// service.sendConfirmationEmail();

// SRP
class Order {
    constructor(items, customerEmail) {
        this.items = items;
        this.customerEmail = customerEmail;
    }

    calculateTotal() {
        return this.items.reduce((sum, i) => sum + i.price, 0);
    }
}

class OrderRepository {
    save(order) {
        console.log('INSERT INTO orders ...');
    }
}

class OrderMailer {
    sendConfirmation(order) {
        console.log(`Email sent to ${order.customerEmail}`);
    }
}

// Usage
const order = new Order(
    [{ price: 8000 }, { price: 200 }],
    'itu@example.com'
);

const repo = new OrderRepository();
const mailer = new OrderMailer();

console.log(order.calculateTotal()); 
repo.save(order);
mailer.sendConfirmation(order);
