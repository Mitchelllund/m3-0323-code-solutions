import { useState } from "react";

export default function HotButton(props) {
  const { text }= props
  const [clickCount, setClickCount]= useState(0);
  function handleClick() {
    setClickCount(clickCount + 1);
    console.log('clickCount: ', clickCount)
  }
  let txtColor="white"
  let bkColor=""
  if (clickCount <= 3) {
    bkColor = "indigo"
  } else if (clickCount > 3 && clickCount <= 6) {
    bkColor = "darkorchid"
  } else if (clickCount > 6 && clickCount <= 9) {
    bkColor = "salmon"
  } else if (clickCount > 9 && clickCount <= 12) {
    bkColor = "orange"
    txtColor = "black"
  } else if (clickCount > 12 && clickCount <= 15) {
    bkColor = "yellow"
    txtColor = "black"
  } else if (clickCount > 15 && clickCount <= 18) {
    bkColor = "white"
    txtColor = "black"
  }


  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: bkColor, color: txtColor }}>
        {text}
      </button>
      <p>
        {clickCount} Clicks
      </p>
    </div>
  )
}
