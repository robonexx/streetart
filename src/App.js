import NamesList from './NamesList';
import SprayC from './images/spraycan.png';
import SprayB from './images/spray2.png';
import Spray from './components/Spray';
import NamesItem from './NamesItem';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Street from './pages/street';
import Banner from './components/Banner';

//styles
import './App.scss';
import './sass/main.scss';

const streetList = () => {
  return (
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
  );
};

const NameLi = () => {
  return (
    <>
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
    </>
  );
};

const InfoCont = () => {
  return (
    <div className='info-container'>
      <h2>DJ's</h2>
      <h2>Talks</h2>
      <h2>Burgers</h2>
      <h2>Beer &</h2>
      <h2>Breakdance</h2>
    </div>
  );
};

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div className='App'>
      <Router>
        <AnimateSharedLayout type='crossfade'>
          <Banner />
          <Route
            render={({ location }) => (
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path='/'
                    render={() => <Home imageDetails={imageDetails} />}
                  />
                  <Route
                    exact
                    path='/street/:id'
                    render={() => <Street imageDetails={imageDetails} />}
                  />
                </Switch>
              </AnimatePresence>
            )}
          />
        </AnimateSharedLayout>
      </Router>
    </div>
  );
}

export default App;
