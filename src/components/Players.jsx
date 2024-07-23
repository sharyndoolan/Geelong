const Players = (props) => {
  return (
    <div class="card">
      <img src={props.player.img} alt="Image" />
      <p>Number:{props.player.number}</p>
      <p>Name: {props.player.name}</p>
      <p>Age: {props.player.age}</p>
      <p>Games: {props.player.games}</p>
    </div>
  )
}
export default Players
