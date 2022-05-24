import React from 'react'
import styles from "../styles/IntroText.module.scss"

export default function IntroText() {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.text_container}>
          <h1>What are <span>we capable of?</span></h1>
          <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>
          <a href="/">Our process</a>
        </div>
      </div>
      <div className={styles.secondary}>
        <div className={styles.columns_container}>
          <div className={styles.column_one}>
            <h3>Brand</h3>
            <p>Brand Strategy</p>
            <p>Logo & Name</p>
            <p>Identity & Collateral</p>
            <h3>Development</h3>
            <p>eCommerce</p>
            <p>Web Development</p>
            <p>Mobile Apps</p>
          </div>
          <div className={styles.column_two}>
            <h3>Marketing</h3>
            <p>Digital</p>
            <p>Market Research</p>
          </div>
        </div>
      </div>
    </section>
  )
}
