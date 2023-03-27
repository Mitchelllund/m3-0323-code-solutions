export default function CustomButton(props) {
  const { text, color, customClick} = props
  console.log('Props: ', props)
  return (
    <button onClick={() => customClick(color, text)} style={{ backgroundColor: color}}> {text} </button>
  )
}
