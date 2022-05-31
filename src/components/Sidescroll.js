import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import styles from '../sass/components/sidescroll/Sidescroll.scss'


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
  
  
const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
      className='row_title'
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

const SideScrollText = ({ title, sideScroll }) => {
    const [sideScroll, setSideScroll] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setSideScroll(true);
        }, 3000);
      }, []);
    return (
      <div className={`banner_row sideScroll  ${sideScroll && 'animate'}`}>
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
  


export default function Sidescroll() {
  return (
      <motion.div className='banner' variants={banner}>
           <SideScrollText title={'StreetArtMarket'} sideScroll={sideScroll} />
    </motion.div>
  )
}
