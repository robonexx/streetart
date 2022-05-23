import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

//Components

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Street = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'
    >
       <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2>
              TERMINALEN! <br />
            </h2>
            <p>
              SLUSSEN <br />
              STADSGÅRDST3RMINAL3N <br />
              116 45 STOCKHOLM
            </p>
            <h2>7-12E JUNI 2022</h2>
          </div>
        </div>
      </div>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='information'
            >
              <div className='location'>
                <span>59.31970553447133</span>
                <span>18.07761179651022</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: 0,
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: '60%',
                  height: 0,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'
              >
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}
                >
                  <motion.img
                    src={require('../images/StreetArtMarket.JPG')}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 0.6 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: 0,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
     
    </motion.div>
  );
};

export default Street;
