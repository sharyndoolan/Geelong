import StatsButton from './StatsButton'
import BioButton from './BioButton'
import Head from './Header'

const Players = (props) => {
  return (
    <div className="card">
      <div className="number">
        <p>{props.player.number}</p>
      </div>
      <div className="name">
        <p>{props.player.name}</p>
      </div>
      <img src={props.player.img} alt="Image" />
      <div className="age">
        <p>Age: {props.player.age}</p>
      </div>
      <div className="games">
        <p>Games: {props.player.games}</p>
      </div>
      <div className="stats">
        <StatsButton />
      </div>
      <div className="bio">
        <BioButton />
      </div>
    </div>
  )
}
export default Players
