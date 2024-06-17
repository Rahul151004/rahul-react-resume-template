import React from 'react';
import { motion } from 'framer-motion';
import './TechStackIconContainer.css';

export default function TechStackIconContainer(props) {
  return (
    <motion.div
      className='techstack_icons'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={props.image} alt={props.altProperty} />
      <p>{props.title}</p>
    </motion.div>
  );
}
