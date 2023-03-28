import { useState } from "react";

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false)
  console.log('This is the value returned by useState :', isClicked)
  function handleClick() {
    console.log('This is the value before calling the setter :', isClicked)
    setIsClicked(!isClicked)
  }
  if (isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: 'white' }}>
        {text}
      </button>
    )
  }
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}
