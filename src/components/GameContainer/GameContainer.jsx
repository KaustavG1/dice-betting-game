import { useEffect, useState } from 'react'
import BetContainer from '../BetContainer/BetContainer'
import DiceRoll from '../DiceRoll/DiceRoll'
import InfoText from '../InfoText/InfoText'
import calculateResult from '../../utils/calculateResult'
import duration from '../../constants/duration'
import randomNumberCreator from '../../utils/randomNumberCreator'
import './GameContainer.css'

export default function GameContainer() {
  const [ step, setStep ] = useState(1)
  const [ time, setTime ] = useState(duration.betting)
  const [ one, setOne ] = useState(0)
  const [ two, setTwo ] = useState(0)
  const [ three, setThree ] = useState(0)
  const [ four, setFour ] = useState(0)
  const [ five, setFive ] = useState(0)
  const [ six, setSix ] = useState(0)
  // const [ temp, setTemp ] = useState({})
  const [ isDisabled, setDisabled ] = useState(false)
  const [ randomFace, setRandomFace ] = useState(1)
  const [ balance, setBalance ] = useState(0)
  const [ money, setMoney ] = useState(1)
  const [ hasWon, setWon ] = useState(false)

  const resetGame = () => {
    setOne(0)
    setTwo(0)
    setThree(0)
    setFour(0)
    setFive(0)
    setSix(0)
    setDisabled(false)
  }

  const getResult = () => {
    // Calculate if user bet on the amount and if so how much
    let betAmt
    switch(randomFace) {
      case 1:
        betAmt = one
        break
      case 2:
        betAmt = two
        break
      case 3:
        betAmt = three
        break
      case 4:
        betAmt = four
        break
      case 5:
        betAmt = five
        break
      case 6:
        betAmt = six
        break
      default:
        break
    }

    console.log(betAmt)
    setWon(Boolean(betAmt))

    setMoney(calculateResult(Boolean(betAmt), betAmt, balance, money))
  }

  useEffect(() => {
    if (step === 1) {
      resetGame()
    } else {
      setDisabled(true)
    }
  }, [ step ])

  useEffect(() => {
    if (step === 1) {
      const timer = setInterval(() => {
        setTime(time => time - 1)
      }, 1000);

      if (time <= 0) {
        clearTimeout(timer)
        setBalance(one + two + three + four +five + six)
        setTime(duration.dice_rolling)
        setStep(step => step += 1)
      }

      return () => {
        clearTimeout(timer)
      }
    }
  }, [ time, step ])

  useEffect(() => {
    if (step === 2) {
      const timer = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)

      if (time <= 0) {
        clearTimeout(timer)
        setTime(duration.result)
        setRandomFace(randomNumberCreator(1, 6))
        setStep(step => step += 1)
        getResult()
      }

      return () => clearTimeout(timer)
    }
  }, [ time, step ])

  useEffect(() => {
    if (step === 3) {
      const timer = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)

      if (time <= 0) {
        clearTimeout(timer)
        setTime(duration.betting)
        setStep(1)
      }

      if (money <= 0) {
        // setStep(4)
        console.log('HHH')
      }

      return () => clearTimeout(timer)
    }
  }, [ time, step ])

  return (
    <div className="container">
      <InfoText time={time} balance={balance} money={money} step={step} hasWon={hasWon}/>
      <DiceRoll step={step} value={randomFace}/>
      <BetContainer
        step={step}
        one={one}
        setOne={setOne}
        two={two}
        setTwo={setTwo}
        three={three}
        setThree={setThree}
        four={four}
        setFour={setFour}
        five={five}
        setFive={setFive}
        six={six}
        setSix={setSix}
        isDisabled={isDisabled}
        setDisabled={setDisabled}
        // temp={temp}
        // setTemp={setTemp}
      />
    </div>
  )
}
