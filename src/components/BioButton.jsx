const BioButton = (props) => {
  const showBio = () => {
    props.setBio(!props.bio)
  }

  return <button onClick={showBio}>Bio</button>
}

export default BioButton
