import './App.css';
import Carousel from './Carousel';

const logo = [
  {url: "https://content.sportslogos.net/logos/7/6708/full/8521_las_vegas_raiders-primary-20201.png"},
  {url: "https://content.sportslogos.net/logos/7/161/full/9ebzja2zfeigaziee8y605aqp.png"},
  {url: "https://content.sportslogos.net/logos/7/179/full/9455_san_francisco_49ers-primary-2009.png"},
  {url: "https://content.sportslogos.net/logos/7/171/full/dcy03myfhffbki5d7il3.png"},
  {url: "https://content.sportslogos.net/logos/7/165/full/406.png"}
]

function App() {
  return (
    <div className='container'>
      <Carousel logo={logo}/>
    </div>
  );
}

export default App;
