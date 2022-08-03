let family = {
  revenue: [1000, 200, 200],
  expense: [500, 300, 100]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateRevenue = sum(family.revenue)
  const calculateExpense = sum(family.expense)

  const total = calculateRevenue - calculateExpense

  const itsOK = total >= 0

  let balanceText = 'negativo'

  if (itsOK) {
    balanceText = 'positivo'
  }

  console.log(`seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()
