import React from 'react';
import styles from './intro.module.css';
import useTypewriter from '../../useTypewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image1 from '../../assets/hi.png';
const App = () => {
    const displayText = useTypewriter(`I 'm Lan Dinh`);

    return (
        <div className={styles.container}>


            <div className={styles.container_two}>
                {/* GitHub and LinkedIn section */}
                <div className={styles.socialContainer}>
                    <a href="https://github.com/ld051609" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                      <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/lan-dinh-7363a3194" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                      <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                    </a>
                </div>
            </div>
            <div className={styles.container_one}>
                <p className={styles.codeWord}>"Hello World"</p>
                <h1 className={styles.name}>{displayText}</h1>
                <p className={styles.description}>Software Engineering Student @ University of Guelph</p>
                <p className={styles.description}>Driven by a passion for bringing solutions to life.</p>

                <div className={styles.qualities}>
                    <div className={styles.quality}>an enthusiastic software developer</div>
                    <div className={styles.quality}>a problem solver</div>
                    <div className={styles.quality}>an innovator</div>
                    <div className={styles.quality}>a team player</div>
                    <div className={styles.quality}>a passionate learner</div>
                </div>            
                <div className={styles.btn_container}>
                    <button className={styles.button}>Resume</button>
                    <button className={styles.button}>Connect With Me</button>
                </div>
            </div>

            <img src={image1} alt="Description of image 2" className={styles.workImg} />

            

        </div>
    );
};

export default App;
