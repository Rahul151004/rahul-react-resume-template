import React from 'react';
import { projectData } from "../../constants";
import ProjectBox from "./ProjectBox/ProjectBox";
import { motion } from 'framer-motion';
import "./Projects.css";

export default function Projects() {
  return (
    <motion.div
      className="projects_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="projects_title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.p>
      <motion.div
        className="projects_box_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.3 }}
      >
        {projectData.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <ProjectBox
              title={project.title}
              image={project.image}
              sentences={project.sentences}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
