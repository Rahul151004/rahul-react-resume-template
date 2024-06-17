import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import c from '../../assets/c.png';
import js from '../../assets/js.png';
import css from '../../assets/css.png';

export default function Experience() {
    const statements = [
        "1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam?",
        "2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam?",
        "3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam?",
        "4. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam?",
        "5. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam?",
    ];

    const iconImages = [js, c, css];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className='experience_container'
            id='experience'
            initial='hidden'
            animate='visible'
            variants={containerVariants}
        >
            <motion.p className='experience_title'>Experience</motion.p>

            <motion.div className='experience_cards_container'>
                <ExperienceCard
                    companyName='ABC Pvt Ltd'
                    designation='SDE 2'
                    statements={statements}
                    iconImages={iconImages}
                    variants={itemVariants}
                />
                <ExperienceCard
                    companyName='XYZ Pvt Ltd'
                    designation='SDE 1'
                    statements={statements}
                    iconImages={iconImages}
                    variants={itemVariants}
                />
                <ExperienceCard
                    companyName='EFG Pvt Ltd'
                    designation='SDE 1'
                    statements={statements}
                    iconImages={iconImages}
                    variants={itemVariants}
                />
            </motion.div>
        </motion.div>
    );
}
