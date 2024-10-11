import React from 'react';
import styles from './Technical.module.css';
import langImg from '../../assets/work.png';
import useTypewriter from '../../useTypewriter';
import { TbMessageLanguage } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { GoDatabase } from "react-icons/go";
import { FaBook } from "react-icons/fa";

const Technical = () => {
  const displayText = useTypewriter(`W hat skills do I have?`);

  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>{displayText}</p>
      <h1 className={styles.title}>Technical Skills</h1>
      <div className={styles.subContainer}>
        <div className={styles.imageContainer}>
          <img src={langImg} alt='language images' className={styles.image} />
          <div className={styles.learningContainer}>
            <h1 className={styles.titleLearning}>📚 What I'm currently learning?</h1>
            <ul className={styles.techList}>
              <li className={styles.techLearning}>☁️ Cloud Technology</li>
              <li className={styles.techLearning}>🔧 DevOps</li>
              <li className={styles.techLearning}>🌐 Web3</li>
            </ul>
          </div>
        </div>

        <div className={styles.textContainer}>

          {/* Programming Languages Section */}
          <div className={styles.section}>
            <div className={styles.iconContainer}>
              <TbMessageLanguage className={styles.icon}/>
              <p className={styles.sectionTitle}>Programming Languages</p>
            </div>
            <div className={styles.carousel}>
              <div className={styles.carouselItems}>
                <div className={styles.listItem}>C</div>
                <div className={styles.listItem}>Python</div>
                <div className={styles.listItem}>Java</div>
                <div className={styles.listItem}>JavaScript</div>
                <div className={styles.listItem}>HTML/CSS</div>
                <div className={styles.listItem}>SQL</div>
              </div>
            </div>
          </div>

          {/* Frameworks Section */}
          <div className={styles.section}>
            <div className={styles.iconContainer}>
              <GrTechnology className={styles.icon} />
              <p className={styles.sectionTitle}>Frameworks</p>
            </div>
            <div className={styles.carousel}>
              <div className={styles.carouselItems}>
                <div className={styles.listItem}>ReactJS</div>
                <div className={styles.listItem}>Node.js</div>
                <div className={styles.listItem}>Express</div>
                <div className={styles.listItem}>Flask</div>
                <div className={styles.listItem}>Spring Boot</div>
                <div className={styles.listItem}>NextJS</div>
              </div>
            </div>
          </div>

          {/* Databases and Tools Section */}
          <div className={styles.section}>
          <div className={styles.iconContainer}>
              <GoDatabase className={styles.icon} />
              <p className={styles.sectionTitle}>Databases and Tools</p>
            </div>
            <div className={styles.carousel}>
              <div className={styles.carouselItems}>
                <div className={styles.listItem}>MySQL</div>
                <div className={styles.listItem}>MongoDB</div>
                <div className={styles.listItem}>PostgreSQL</div>
                <div className={styles.listItem}>Git</div>
              </div>
            </div>
          </div>

        </div>
        {/* Learning Section with Icon */}
        
      </div>

    </div>
  );
};

export default Technical;
