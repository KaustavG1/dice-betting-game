import React, { useState } from 'react'
import content from '../../constants/locale'
import './BetItem.css'

export default function BetItem({ value, icon, isDisabled, bet, setBet, tempMoney, setTempMoney }) {
  const handleClick = () => {
    if (isDisabled) {
      return
    }

    if (tempMoney) {
      setBet(bet => bet + 1)
      setTempMoney(amount => amount - 1)
    }

    return
  }

  return (
    <div className="bet">
      <img className={isDisabled ? "bet-disabled" : ""} src={icon} alt={`dice ${value}`} onClick={handleClick}/>
      <div>{content.bet_value}</div>
      <div>${bet}</div>
    </div>
  )
}
