/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import './index.css'

import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojis: [], gameStatus: 'IN_PROGRESS'}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameStatus: 'IN_PROGRESS',
    })
  }

  onClickingEmoji = id => {
    const {clickedEmojis, score, topScore} = this.state

    if (clickedEmojis.includes(id)) {
      this.setState({gameStatus: 'LOST'})
    } else {
      const newClickedEmojis = [...clickedEmojis, id]
      const newScore = score + 1
      const emojisList = this.props
      if (newScore === emojisList.length) {
        this.setState({
          gameStatus: 'WON',
          score: newScore,
          topScore: Math.max(newScore, topScore),
        })
      } else {
        this.setState({
          clickedEmojis: newClickedEmojis,
          score: newScore,
        })
      }
    }
  }

  render() {
    const {score, topScore, gameStatus} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <div className="container">
        {gameStatus === 'WON' ? (
          <div className="nav">
            <NavBar score={score} topScore={topScore} />
          </div>
        ) : (
          <div className="nav">
            <NavBar score={score} topScore={topScore} />
          </div>
        )}
        {gameStatus === 'IN_PROGRESS' && (
          <div className="ul">
            {shuffledEmojisList.map(eachItem => (
              <EmojiCard
                details={eachItem}
                key={eachItem.id}
                onClickingEmoji={() => this.onClickingEmoji(eachItem.id)}
              />
            ))}
          </div>
        )}
        {(gameStatus === 'WON' || gameStatus === 'LOST') && (
          <WinOrLoseCard
            isWon={gameStatus === 'WON'}
            score={score}
            playAgain={this.playAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
