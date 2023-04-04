import { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(true)
  let label = "On"
  if(!toggle) label = "Off"
  return (
    <label>
      <input type="checkbox" defaultChecked={toggle} onClick= {() => {setToggle(!toggle)}} />
      <span />
      <p> { label }</p>
    </label>
  )
}
