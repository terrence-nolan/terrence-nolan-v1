import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import images from "../../images/images";
import ConnectionLinks from "../../components/ConnectionLinks/ConnectionLinks";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title = "Terrence Nolan | About";

        return () => {
            document.title = "Terrence Nolan";
        };
    }, [])

    return (
        <main className={styles.aboutMain}>
            <div className={styles.introSection}>
                <img src={images.tjPortrait} alt="Terrence Nolan Portrait" className={styles.image} />
                <div className={styles.card}>
                    <h2><strong>Terrence Nolan</strong></h2>
                    <h4><em>Greater Boston, MA</em></h4>
                    <h4>Computer Science @ Villanova University</h4>
                    <h4>Exp. Graduation: May 2024</h4>
                    <p>I am a senior CS student looking for a full time SWE role, particularly a frontend position.
                        Feel free to check out my website and contact me at any of the links below.</p>
                </div>
            </div>
            <div className={styles.mainCardsContainer}>
                <div className={styles.skillsAndTech}>
                    <div className={styles.card}>
                        <h4>Languages</h4>
                        <p>
                            Javascript<br/>
                            Java<br/>
                            Python<br/>
                            Typescript<br/>
                            SQL<br />
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h4>Technologies</h4>
                        <p>
                            React.js<br/>
                            React Native<br/>
                            Expo Go<br/>
                            Jest<br/>
                            Firebase<br/>
                            Jupyter Notebook<br/>
                            Figma<br/>
                        </p>
                    </div>
                </div>
                <div className={styles.soloCardContainer}>
                    <div className={styles.card}>
                        <p>In my final semester of college, I am enrolled in an Applied Machine Learning course as well
                            as continuing to work on my Senior Capstone project – <a href={"https://punchcard.work/"} className={styles.link}>Punchcard</a>.
                            <br /><br />
                            In addition to programming, I enjoy running, playing the guitar, and drawing.
                        </p>
                    </div>
                </div>
            </div>
            <ConnectionLinks />
        </main>
    );
}

export default AboutPage;
