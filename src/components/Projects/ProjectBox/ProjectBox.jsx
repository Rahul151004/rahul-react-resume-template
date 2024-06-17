import React from "react";
import "./ProjectBox.css";

export default function ProjectBox({ title, image, sentences, link }) {
  return (
    <div className="project_box_container">
      <div className="project_box_image_container">
        <img src={image} alt={title} />
      </div>
      <div className="project_box_description_container">
        <h2 className="project_box_title">{title}</h2>
        <div className="project_box_sentences_container">
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
        <div className="project_box_link">
          <span>Link:</span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}
