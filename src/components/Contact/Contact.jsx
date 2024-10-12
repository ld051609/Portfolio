import React from 'react';
import styles from './Contact.module.css';
import contactMeImg from '../../assets/contactMe.png';
const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Contact Me 😁</h2>
      <p className={styles.intro}>
        Feel free to reach out for collaborations, to discuss about technology, or just to have a boba chat!
      </p>
      <div className={styles.subContainer}>
        {/* Information container */}
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <span className={styles.icon}>☎️</span>
            <a href="tel:+1234567890" className={styles.link}>+1 (647) 765-3730</a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📮</span>
            <a href="mailto:landinhhoang0509@gmail.com.com" className={styles.link}>landinhhoang0509@gmail.com</a>
          </div>
        </div>  
          <img src={contactMeImg} alt="Contact" className={`${styles.image} ${styles.rotate}`}/>
      </div>

      
    </div>
  );
};

export default Contact;
