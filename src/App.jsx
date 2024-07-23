import data from './players.json'
import Players from './components/Players'
import './App.css'

const App = () => {
  console.log(data)
  return (
    <div>
      {data.map((player) => (
        <Players key={player.number} player={player} />
      ))}
    </div>
  )
}

export default App
