import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NamesList from './NamesList';
import SprayC from './images/spraycan.png';
import SprayB from './images/spray2.png';
import Spray from './components/Spray';
import NamesItem from './NamesItem';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Street from './pages/street';
import Banner from './components/Banner';
import Loader from './components/Loader';
import Cursor from './components/Cursor/Cursor';

//styles
import './App.scss';
import './sass/main.scss';

function App({ cursor }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const imageDetails = {
    width: '100%',
    height: '100%',
  };

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <div className='App'>
      {window.innerWidth > 768 ? (
        <Cursor
          cursor={cursor}
          onMouseMove={(e) => {
            const cursor = document.querySelector('.cursor');
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
          }}
        />
      ) : null}

      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence initial={false} exitBeforeEnter>
          {loading ? (
            <motion.div key='loader'>
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Banner />
              {!loading && (
                <div className='transition-image final'>
                  <motion.img
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                    layoutId='main-image-1'
                  />
                </div>
              )}
              <Route
                render={() => (
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
                )}
              />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;

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
