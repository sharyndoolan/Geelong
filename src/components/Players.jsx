import StatsButton from './StatsButton'
import BioButton from './BioButton'
import Header from './Header'
import { useState } from 'react'

const Players = (props) => {
  const [bio, setBio] = useState(false)

  return (
    <div className="page">
      {/* <div className="header">
        <Header />
      </div> */}
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
          <BioButton setBio={setBio} bio={bio} />
          {bio ? <p>{props.player.bio}</p> : null}
        </div>
      </div>
    </div>
  )
}
export default Players
