import StatsButton from './StatsButton'
import BioButton from './BioButton'

const Players = (props) => {
  return (
    <div class="card">
      <div class="number">
        <p>{props.player.number}</p>
      </div>
      <div class="name">
        <p>{props.player.name}</p>
      </div>
      <img src={props.player.img} alt="Image" />
      <div class="age">
        <p>Age: {props.player.age}</p>
      </div>
      <div class="games">
        <p>Games: {props.player.games}</p>
      </div>
      <StatsButton />
      <BioButton />
    </div>
  )
}
export default Players
