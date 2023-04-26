import './App.css';
import Accordian from './Accordian';

const info = [
  {
    title: "Hypertext Markup Language",
    content:
      "The HyperText Markup Language or HTML is the standard markup be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
  },
  {
    title: "Cascading Style Sheets",
    content:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "Javascript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

function App() {
  return (
      <Accordian info={info}/>
  );
}

export default App;
