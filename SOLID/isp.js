// Violation
// class Machine {
//     print() { }
//     scan() { }
//     fax() { }
// }

// class SimplePrinter extends Machine {  //SimplePrinter is forced to implement scan + fax It doesn't need them It throws errors → bad design
//     print() {
//         console.log("Printing...");
//     }

//     scan() {
//         throw new Error("Scan not supported");
//     }

//     fax() {
//         throw new Error("Fax not supported");
//     }
// }

// isp

const Printable = { print() { console.log("Printing...") } }
const Scannable = { scan() { console.log("Scanning...") } }
const Faxable = { fax() { console.log("Faxing...") } }

// SimplePrinter only gets what it actually needs
class SimplePrinter { }
Object.assign(SimplePrinter.prototype, Printable)

// MultiFunctionPrinter gets everything
class MultiFunctionPrinter { }
Object.assign(MultiFunctionPrinter.prototype, Printable, Scannable, Faxable)

const simple = new SimplePrinter()
const multi = new MultiFunctionPrinter()

simple.print()  
multi.print() 
multi.scan() 
multi.fax()