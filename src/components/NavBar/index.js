// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <navbar className="navbar">
      <div className="sub-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-image"
          alt="emoji logo"
        />
        <h1 className="head-2">Emoji Game</h1>
      </div>
      {score !== 12 ? (
        <div className="sub-1">
          <p className="head-1">Score: {score}</p>
          <p className="head-1">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </navbar>
  )
}

export default NavBar
