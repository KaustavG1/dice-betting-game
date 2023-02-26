export default function calculateResult(betPlaced, betAmount, betSum, total) {
  // Dice: 1 2 3 4 5 6
  // Bets: 5 0 4 8 0 0
  // Calculation: 100 - (5 + 4 + 8) + (4 * 3)

  // If, user placed bets on rn double value at rn
  // Tripple the bets placed on rn and subtract sum of all bets placed
  // One additional value of bet amount will be deducted, so tripple bet
  if (betPlaced) {
    return total + (betAmount * 3) - betSum
  }

  // Else, subtract sum of all bets placed from money
  return total - betSum
}
