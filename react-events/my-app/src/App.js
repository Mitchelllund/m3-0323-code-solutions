import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton customClick={(color, text) => alert(`You clicked ${color} "${text}" button`)} text='Text' color='red' />
      <CustomButton customClick={(color, text) => alert(`You clicked ${color} "${text}" button`)} text='Some text' color='yellow' />
      <CustomButton customClick={(color, text) => alert(`You clicked ${color} "${text}" button`)} text='Alot of text' color='green' />
    </div>
  );
}
export default App;
