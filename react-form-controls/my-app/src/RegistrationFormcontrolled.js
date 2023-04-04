import { useState } from "react";

export default function RegistrationFormControlled(props) {
  const { text } = props
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <div>
      <label>
       Username: <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
      </label>
      <label>
       Password: <input value={lastName} onChange={e => setLastName(e.target.value)}/>
      </label>
      <button onClick={() => {console.log('firstName: ', firstName); console.log('lastName: ',lastName)}}>
        { text }
      </button>
    </div>
  )
}
