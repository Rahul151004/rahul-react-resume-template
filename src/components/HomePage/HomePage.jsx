import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import image1 from '../../assets/githubicon.png';
import linked from '../../assets/linkedin.png';

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="homepage_container"
      id="homepage_container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="homepage_left">
        <motion.p className="homepage_heading" variants={itemVariants}>
          <span className="red_color">Hi,</span> my name is
        </motion.p>
        <motion.p className="homepage_left_h2" variants={itemVariants}>
          Rahul Bhat
        </motion.p>
        <motion.p className="homepage_left_h3" variants={itemVariants}>
          Student at <span className="red_color">LPU</span>
        </motion.p>
        <motion.p className="homepage_desc_left" variants={itemVariants}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          delectus blanditiis dolorum voluptas, itaque quas quo optio suscipit
          atque numquam quasi libero maiores vitae eum accusantium nobis
          expedita doloribus qui? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptas beatae fugit amet sapiente enim iste
          quisquam ipsa vitae tenetur ad sunt rerum minima molestias placeat,
          veritatis explicabo eos ipsum dolor.
        </motion.p>
        <motion.div className="homepage_buttons" variants={itemVariants}>
          <a
            href="https://github.com/Rahul151004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={image1}
              alt="GitHub Logo"
              className="homepage_logo"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rahulsbhat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={linked}
              alt="LinkedIn Logo"
              className="homepage_logo"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </a>
        </motion.div>
        <motion.a
          href="mailto:rbhat5480@gmail.com"
          variants={itemVariants}
          className="homepage_left_button"
        >
          <motion.button
            className="homepage_left_button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            animate="rest"
          >
            Get in Touch
          </motion.button>
        </motion.a>
      </div>

      <motion.div className="homepage_right" variants={itemVariants}>
        <motion.img
          src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          alt="Programming GIF"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          style={{ borderRadius: '10px' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
