import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className='frame'>
                <h2>Click for details!</h2>
                <Link to={`/street/market`}>
                  <ProgressiveImage
                    src={require('../images/StreetArtMarket.JPG')}
                    placeholder={require('../images/StreetArtMarket.JPG')}
                  >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Street art'
                        whileHover={{ scale: 0.55 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'
            >
              <div className='title'>Street Art Market</div>
              <div className='location'>
                <span>59.31970553447133</span>
                <span>18.07761179651022</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
