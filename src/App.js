import Navbar from  './Navbar';
import Hero from './Hero';
import Card from'./Card';
import './App.css';

import data from './data';

function App() {
  const jokesElement = data.map((jokes) => {
    return <Card key={jokes.id} jokes={jokes}/>
    })
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <div className="ew">
      {jokesElement}
      </div>
    </div>
  );
}

export default App;
