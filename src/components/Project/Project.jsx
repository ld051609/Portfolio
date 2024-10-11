import React, { useState, useEffect } from 'react';
import styles from './Project.module.css';
import useTypewriter from '../../useTypewriter';
import flowerImage from '../../assets/flower.png';
import droplessImage from '../../assets/dropless.png';
import pantryImage from '../../assets/pantry.png';
const Project = () => {
  const displayText = useTypewriter(`What projects have I worked on?`);
  const displayText2 = `view my`;

  // Projects data with images
  const projects = [
    {
      title: '🌻 Flora Click',
      description: '🔍 An app that enables users to take a photo of a plant, utilizes a Tensorflow fine-tuned model to identify the plant, and then saves it to their personal collection.',
      tech: 'React Native, Expo, Tensorflow, Flask, Firestore (Cloud Storage), Firebase Auth',
      link: "https://github.com/ld051609/FloraClick",
      images: [flowerImage, flowerImage], // Add images for Flora Click
    },
    {
      title: '💦  Dropless',
      description: '🔍 A dashboard addressing water scarcity with an interactive map for global renewable resources predictions, an emergency chatbot to find nearby freshwater, and a summary board that monitors and alerts based on weather and water resource data.',
      tech: 'React, Google APIs, OpenAI API, Machine Learning, Flask',
      link: "https://github.com/ld051609/Dropless",
      images: [droplessImage, droplessImage], // Add images for Mind Tracker
    },
    {
      title: '📋 Pantry Tracker',
      description: '🔍 A website for managing pantry inventory, allowing users to add and track food items and get notifications for low supplies.',
      tech: 'Next.js, Material-UI, Firebase, Firestore',
      link: "https://github.com/ld051609/PantryTracker",
      images: [pantryImage, pantryImage], // Add images for Mind Tracker
    },
    {
      title: '🖱️ Mousetrack',
      description: '🔍 Leverages computer vision to control mouse movements with hand gestures, offering a seamless and hands-free interaction experience.',
      tech: 'Python, Mediapipe, OpenCV, PyAutoGUI',
      link: "https://github.com/ld051609/Mousetrack",
      images: [droplessImage, droplessImage], // Add images for Mind Tracker
    },
    {
      title: '📄 Docuquery',
      description: '🔍 The RAG chatbot will help users find information, generate responses, and assist with specific queries by leveraging a retrieval system and a generative model.',
      tech: 'React, Firebase, Langchain, RAG',
      link: "https://github.com/ld051609/DocuQuery",
      images: [droplessImage, droplessImage], // Add images for Mind Tracker
    },
    {
      title: '🧩 MemoryCraft',
      description: '🔍 An app that transforms your cherished memory photos into engaging and meaningful puzzle games.',
      tech: 'Expo, React Native, Firebase, Firestore',
      link: "https://github.com/ld051609/MemoryCraft",
      images: [droplessImage, droplessImage], // Add images for Mind Tracker
    }
    
  ];

  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>{displayText2}</p>
      <h1 className={styles.title}>Project Portfolio</h1>

      <div className={styles.subContainer}>
      {projects.map((project, projectIndex) => {
        const [currentSlide, setCurrentSlide] = useState(0);

        const handleNextSlide = () => {
          setCurrentSlide((prev) => (prev + 1) % project.images.length);
        };

        const handlePrevSlide = () => {
          setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
        };

        return (
          <div key={projectIndex} className={styles.projectContainer}>
            <div className={styles.imageSlider}>
              <button className={styles.prevButton} onClick={handlePrevSlide}>&#10094;</button>
              <img src={project.images[currentSlide]} alt='Project image' className={styles.flowerImage} />
              <button className={styles.nextButton} onClick={handleNextSlide}>&#10095;</button>
            </div>
            {/* Dots for slide indicators */}
            <div className={styles.dotsContainer}>
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
            <p className={styles.projectTitle}>{project.title}</p>
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.projectTechnologies}>🛠️ Technologies: {project.tech}</p>
            {/* Create button for view on github */}
            <button className={styles.projectButton} onClick={() => window.open(project.link)}>View on GitHub</button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Project;
