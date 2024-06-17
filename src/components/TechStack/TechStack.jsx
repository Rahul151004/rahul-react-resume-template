import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';
import { techstackRowOne, techstackRowTwo } from '../../constants';

function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="techstack_container"
      id="techstack_container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p
        className="techstack_title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.p>
      <motion.div className="techstack_icon_container" variants={containerVariants}>
        {techstackRowOne.map(element => (
          <motion.div
            key={element.iconName}
            className="techstack_icons"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TechStackIconContainer
              title={element.iconName}
              altProperty={element.iconAltProperty}
              image={element.iconImage}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="techstack_icon_container" variants={containerVariants}>
        {techstackRowTwo.map(element => (
          <motion.div
            key={element.iconName}
            className="techstack_icons"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TechStackIconContainer
              title={element.iconName}
              altProperty={element.iconAltProperty}
              image={element.iconImage}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TechStack;
