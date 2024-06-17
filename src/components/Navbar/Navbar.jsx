import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
    const name = '<RB/>';

    const navbarVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className='navbar_container'
            initial='hidden'
            animate='visible'
            variants={navbarVariants}
        >
            <motion.div className='navbar_left' variants={itemVariants}>
                {name}
            </motion.div>
            <motion.div className='navbar_right' variants={itemVariants}>
                <motion.a
                    href='#homepage_container'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    About
                </motion.a>
                <motion.a
                    href='#techstack_container'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Tools
                </motion.a>
                <motion.a
                    href='#experience'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Experience
                </motion.a>
                <motion.a
                    href='#projects'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Projects
                </motion.a>
                <motion.a
                    href='#resume'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Resume
                </motion.a>
            </motion.div>
        </motion.div>
    );
}

export default Navbar;
