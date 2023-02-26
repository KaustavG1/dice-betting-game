import { useState, useEffect } from 'react'
import BetItem from '../BetItem/BetItem'
import Dice1 from '../../assets/dice-1.png'
import Dice2 from '../../assets/dice-2.png'
import Dice3 from '../../assets/dice-3.png'
import Dice4 from '../../assets/dice-4.png'
import Dice5 from '../../assets/dice-5.png'
import Dice6 from '../../assets/dice-6.png'
import './BetContainer.css'

export default function BetContainer({
  one,
  setOne,
  two,
  setTwo,
  three,
  setThree,
  four,
  setFour,
  five,
  setFive,
  six,
  setSix,
  isDisabled,
  // temp,
  // setTemp
}) {

  return (
    <div className="bet-container">
      <BetItem key={1} value={1} icon={Dice1} isDisabled={isDisabled} bet={one} setBet={setOne}/>
      <BetItem key={2} value={2} icon={Dice2} isDisabled={isDisabled} bet={two} setBet={setTwo}/>
      <BetItem key={3} value={3} icon={Dice3} isDisabled={isDisabled} bet={three} setBet={setThree}/>
      <BetItem key={4} value={4} icon={Dice4} isDisabled={isDisabled} bet={four} setBet={setFour}/>
      <BetItem key={5} value={5} icon={Dice5} isDisabled={isDisabled} bet={five} setBet={setFive}/>
      <BetItem key={6} value={6} icon={Dice6} isDisabled={isDisabled} bet={six} setBet={setSix}/>

      {/* <BetItem key={1} value={1} icon={Dice1} isDisabled={isDisabled} bet={temp} setBet={setTemp}/>
      <BetItem key={2} value={2} icon={Dice2} isDisabled={isDisabled} bet={temp} setBet={setTemp}/>
      <BetItem key={3} value={3} icon={Dice3} isDisabled={isDisabled} bet={temp} setBet={setTemp}/>
      <BetItem key={4} value={4} icon={Dice4} isDisabled={isDisabled} bet={temp} setBet={setTemp}/>
      <BetItem key={5} value={5} icon={Dice5} isDisabled={isDisabled} bet={temp} setBet={setTemp}/>
      <BetItem key={6} value={6} icon={Dice6} isDisabled={isDisabled} bet={temp} setBet={setTemp}/> */}
    </div>
  )
}
