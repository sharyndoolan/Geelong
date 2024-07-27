import data from './players.json'
import Players from './components/Players'
import Header from './components/Header'
import './App.css'

const App = () => {
  console.log(data)
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      {data.map((player, index) => (
        <Players key={player.number} player={player} index={index} />
      ))}
    </div>
  )
}

export default App
