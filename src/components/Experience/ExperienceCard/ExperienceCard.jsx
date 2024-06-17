import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceCard.css';

export default function ExperienceCard({
    companyName,
    designation,
    statements,
    iconImages,
    variants
}) {
    const icons = iconImages.map((icon, index) => (
        <motion.img
            key={icon}
            src={icon}
            alt={icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        />
    ));

    return (
        <motion.div
            className='ex_card_container'
            variants={variants}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.p className='ex_card_title'>{companyName}</motion.p>

            <motion.p className='ex_card_subtitle'>Designation: {designation}</motion.p>

            {statements.map((item, index) => (
                <motion.p
                    key={item}
                    className='ex_card_sentence'
                    variants={variants}
                >
                    {item}
                </motion.p>
            ))}
            <motion.p className='ex_card_tech_used_title'>Tech Stack Used</motion.p>

            <motion.div className='ex_card_icon_images_container' variants={variants}>
                {icons}
            </motion.div>
        </motion.div>
    );
}
