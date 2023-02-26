import React from 'react'
import content from '../../constants/locale'
import './InfoText.css'

export default function InfoText({ time, money, balance, step, hasWon }) {
  const getInstruction = () => {
    if (step === 1) {
      return content.game_instructions.place_bets
    }

    if (step === 2) {
      return content.game_instructions.rolling_dice
    }

    if (hasWon) {
      return `${content.game_instructions.win_message}${balance}`
    }

    if (!hasWon) {
      return `${content.game_instructions.lose_message}${balance}`
    }
    if (!Boolean(money)) {
      return content.game_instructions.zero_balance
    }
  }

  return (
    <div>
      <div className="timer">
        {time} second(s) left
      </div>
      <div className="player-balance">
        {content.player_balance}{money}
      </div>
      <div className="game-instructions">
        {getInstruction()}
      </div>
    </div>
  )
}
