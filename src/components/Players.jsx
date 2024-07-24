import StatsButton from './StatsButton'
import BioButton from './BioButton'

const Players = (props) => {
  return (
    <div class="card">
      <img src={props.player.img} alt="Image" />
      <p>Number: {props.player.number}</p>
      <p>Name: {props.player.name}</p>
      <p>Age: {props.player.age}</p>
      <p>Games: {props.player.games}</p>
      <StatsButton />
      <BioButton />
    </div>
  )
}
export default Players
