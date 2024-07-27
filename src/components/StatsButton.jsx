const StatsButton = (props) => {
  const showStats = () => {
    props.setStats(!props.stats)
  }

  return <button onClick={showStats}>Stats</button>
}

export default StatsButton
