// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onClickingEmoji} = props
  const {emojiName, emojiUrl} = details

  return (
    <li className="li">
      <button className="emoji-item" onClick={onClickingEmoji} type="button">
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
