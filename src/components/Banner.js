import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [sideScroll, setSideScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSideScroll(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={'JUNE7-12'} />
      <BannerRowCenter title={'StreetArtMarket'} sideScroll={sideScroll} />
      <BannerRowBottom title={'TERMINALEN'} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, i) => (
     
      <motion.span key={i}
        className='row-letter' 
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={'banner-row'}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'
      >
        <span className='row-message'>
          <h3>DJ´s</h3>
          <h3>TALKS</h3>
          <h3>SHOWS</h3>
          <h3>BURGERS</h3>
          <h3>BEER &</h3>
          <h3>BREAKDANCE</h3>
          <h3>OVER 1000SQM</h3>
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row center'}>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, sideScroll }) => {
  return (
    <div className={`banner-row sideScroll  ${sideScroll && 'animate'}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='sideScroll__inner'
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
      </motion.div>
    </div>
  );
};

export default Banner;
