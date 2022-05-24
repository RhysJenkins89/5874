import React from 'react'
import styles from "../styles/Projects.module.scss"
import wellies from "../assets/images/wellies.png"
import ideas from "../assets/images/ideas.png"
import fish from "../assets/images/tinned-fish.png"
import dinamo from "../assets/images/dinamo.png"
import bike from "../assets/images/rider.png"

export default function Projects() {
  return (
    <section className={styles.section}>
      <h1>Some of our <br></br><span>recent projects</span></h1>
      <div className={styles.main_grid}>
        <div className={styles.container}>
          <img src={wellies} alt="Colourful wellies" />
          <div className={styles.overlay}></div>
          <div className={styles.text_container}>
            <h3>Jump in a Puddle</h3>
            <p>Look at this lovely pair of wellies. Aren't they delightful? Gosh, how wonderful.</p>
            <a href="/">Full project</a>
          </div>
        </div>
        <div className={styles.container}>
          <img src={ideas} alt="Newspaper with heading" />
          <div className={styles.overlay}></div>
          <div className={styles.text_container}>
            <h3>Make Ideas Happen</h3>
            <p>A local paper with big ideas needed a sharp new brand to inspire readers.</p>
            <a href="/">Full project</a>
          </div>
        </div>
        <div className={styles.container}>
          <img src={fish} alt="Colourful wellies" />
          <div className={styles.overlay}></div>
          <div className={styles.text_container}>
            <h3>Eat More Fish</h3>
            <p>Oily fish is very good for you. It's definitely worth a go!</p>
            <a href="/">Full project</a>
          </div>
        </div>
        <div className={`${styles.container} ${styles.dinamo}`}>
          <img src={dinamo} alt="Colourful wellies" />
          <div className={styles.overlay}></div>
          <div className={styles.text_container}>
            <h3>Cheeky chappy</h3>
            <p>Not to be confused with a Croatian football team.</p>
            <a href="/">Full project</a>
          </div>
        </div>
        <div className={styles.container}>
          <img src={bike} alt="Colourful wellies" />
          <div className={styles.overlay}></div>
          <div className={styles.text_container}>
            <h3>Wheely Good Fun</h3>
            <p>This lad on his bike is having a great time. What a guy.</p>
            <a href="/">Full project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
