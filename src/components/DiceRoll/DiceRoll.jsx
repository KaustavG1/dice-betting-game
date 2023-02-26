import React from 'react'
import Dice1 from '../../assets/dice-1.png'
import Dice2 from '../../assets/dice-2.png'
import Dice3 from '../../assets/dice-3.png'
import Dice4 from '../../assets/dice-4.png'
import Dice5 from '../../assets/dice-5.png'
import Dice6 from '../../assets/dice-6.png'
import './DiceRoll.css'

const diceLookup = {
  '1': Dice1,
  '2': Dice2,
  '3': Dice3,
  '4': Dice4,
  '5': Dice5,
  '6': Dice6,
}

export default function DiceRoll({ step, value }) {

  return (
    <div className={`dice-roll ${step === 2 ? 'rolling' : ''}`}>
      <img src={diceLookup[String(value)]} alt="dice 1"/>
    </div>
  )
}
