// Violatio
// function applyDiscount(order, discountType) {
//   if (discountType === 'percentage') {
//     return order.total * 0.9
//   } else if (discountType === 'fixed') {
//     return order.total - 50
//   } else if (discountType === 'bogo') {
//     return order.total / 2
//   } 
//   // Every new discount type requires editing this function
//   // and re-testing everything inside it
// }

// Fixed
class PercentageDiscount {
  apply(total) { return total * 0.9 }
}

class FixedDiscount {
  apply(total) { return total - 50 }
}

class BOGODiscount {
  apply(total) { return total / 2 }
}


// This function never needs to change — it accepts any discount
function applyDiscount(order, discount) {
  return discount.apply(order.total)
}

// Adding a new discount? Just add a new class.
class SeasonalDiscount {
  apply(total) { return total * 0.75 }
}

applyDiscount({ total: 200 }, new SeasonalDiscount())  // 150