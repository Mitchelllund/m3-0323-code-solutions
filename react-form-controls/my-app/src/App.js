import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled'
import RegistrationFormControlled from './RegistrationFormcontrolled'


function App() {
  return (
    <div>
      <RegistrationFormUncontrolled text="Submit" />
      <RegistrationFormControlled text="Submit"  />
    </div>
  );
}

export default App;
