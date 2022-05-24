import React from 'react'
import spaniel from "../assets/images/spaniel-gradient-large.png"
import styles from "../styles/Landing.module.scss"

export default function landing() {
  return (
    <section className={styles.section}>
      <div className={styles.text_section}>
        <div className={styles.text_container}>
          <p className={styles.pre_header}>Brand, Dev, Ecom, Marketing</p>
          <h1>We unleash <span>business potential</span></h1>
          <p>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
          <a href='/'>Let's talk</a>
        </div>
      </div>
      <div className={styles.image_section}>
        <img src={spaniel} alt="Doggo leaping majestically through the air" className={styles.image}/>
      </div>
    </section>
  )
}
