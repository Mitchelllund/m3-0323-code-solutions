import logo from './logo.svg';
import './App.css';


function CustomButton() {
  return (
    <div>
      <button
        style={{ backgroundColor: "red" }}>
        I
      </button>
      <button
        style={{ backgroundColor: "green" }}>
        know
      </button>
      <button
        style={{ backgroundColor: "lightblue" }}>
        React
      </button>
    </div>
  )
}

function App() {
  return (
  <CustomButton />
);
}

export default App;
