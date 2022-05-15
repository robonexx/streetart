import NamesList from './NamesList';
import './App.scss';
import SprayC from './images/spraycan.png';
import SprayB from './images/spray2.png';
import Spray from './spray/Spray';
import NamesItem from './NamesItem';

function App() {
  return (
    <div className='App'>
      <div className='names-array'>
        <NamesList>
          <NamesItem name='olle' />
          <NamesItem name='bertil' />
          <NamesItem name='arne' />
          <NamesItem name='02' />
          <NamesItem name='spray ya date' />
          <NamesItem name='predator the crayz' />
          <NamesItem name='Rupert the moz' />
          <NamesItem name='Apa the mapa' />
          <NamesItem name='Zues' />
          <NamesItem name='Yes' />
          <NamesItem name='No' />
          <NamesItem name='Numpsy' />
        </NamesList>
      </div>
      <h1 className='special'>Street Art Market</h1>

      <div className='info-container'>
        <h2>DJ's</h2>
        <h2>Talks</h2>
        <h2>Burgers</h2>
        <h2>Beer &</h2>
        <h2>Breakdance</h2>
      </div>

      {/* <Spray /> */}

      <h4>StreetArtMarket</h4>

      <div className='mid-lists'>
        <div className='street-list'>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
        </div>
        <div className='logo'>
          <img src={SprayB} alt='' />
        </div>

        <div className='street-list'>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
          <li>
            <h3>StreetArtMarket</h3>
          </li>
        </div>
      </div>
    </div>
  );
}

export default App;
