const AltImage = (props) => {
  const showImg = () => {
    props.setImg(!props.img2)
  }

  return (
    <button className="buttonimg" onClick={showImg}>
      Img2
    </button>
  )
}

export default AltImage
