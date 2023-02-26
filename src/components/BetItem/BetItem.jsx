import React, { useState } from 'react'
import content from '../../constants/locale'
import './BetItem.css'

export default function BetItem({ value, icon, isDisabled, bet, setBet }) {
  const handleClick = () => {
    if (isDisabled) {
      return
    }

    setBet(bet => bet + 1)
  }

  return (
    <div className="bet">
      <img className={isDisabled ? "bet-disabled" : ""} src={icon} alt={`dice ${value}`} onClick={handleClick}/>
      <div>{content.bet_value}</div>
      <div>${bet}</div>
    </div>
  )
}
