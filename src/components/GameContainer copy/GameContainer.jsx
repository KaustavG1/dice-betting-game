import './GameContainer.css'
import Dice1 from '../../assets/dice-1.png'
import Dice2 from '../../assets/dice-2.png'
import Dice3 from '../../assets/dice-3.png'
import Dice4 from '../../assets/dice-4.png'
import Dice5 from '../../assets/dice-5.png'
import Dice6 from '../../assets/dice-6.png'
import content from '../../constants/locale'



export default function GameContainer() {
  return (
    <div className="container">
      <div>
        <div className="timer">
          10 second(s) left
        </div>
        <div className="player-balance">
          {content.player_balance}{'100'}
        </div>
        <div className="game-instructions">
          {content.game_instructions.place_bets}
        </div>
      </div>

      <div className="dice-roll rolling">
        <img src={Dice1} alt="dice 1"/>
      </div>

      <div className="bet-container">
        <div className="bet">
          <img src={Dice1} alt="dice 1"/>
          <div>{content.bet_value}</div>
          <div>$100</div>
        </div>
        <div className="bet">
          <img src={Dice2} alt="dice 2"/>
          <div>{content.bet_value}</div>
          <div>$100</div>
        </div>
        <div className="bet">
          <img src={Dice3} alt="dice 3"/>
          <div>{content.bet_value}</div>
          <div>$100</div>
        </div>
        <div className="bet">
          <img src={Dice4} alt="dice 4"/>
          <div>{content.bet_value}</div>
          <div>$100</div>
        </div>
        <div className="bet">
          <img src={Dice5} alt="dice 5"/>
          <div>{content.bet_value}</div>
          <div>$100</div>
        </div>
        <div className="bet">
          <img src={Dice6} alt="dice 6"/>
          <div>{content.bet_value}</div>
          <div>$100</div>
        </div>
      </div>
    </div>
  )
}
