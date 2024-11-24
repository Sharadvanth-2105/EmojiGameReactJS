// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props

  return (
    <div className="win-or-lose-card">
      <div>
        <h1 className="hea">{isWon ? 'You Won' : 'You Lose'}</h1>
        <p className="par-1">{isWon ? 'Best Score' : 'Your Score'}:</p>
        <p className="par-2">{score}/12</p>
        <button type="button" onClick={playAgain} className="button">
          Play Again
        </button>
      </div>
      <div>
        <img
          src={
            isWon
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
