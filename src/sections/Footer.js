import React from 'react'
import styles from "../styles/Footer.module.scss"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div className={styles.header_container}>
        <h2>We're a brand's <span>best friend</span></h2>
        <a href="/">Let's talk</a>
        <p>Copyright © Digital Spaniel 2019. All rights reserved.</p>
      </div>
      <div className={styles.info_container}>
        <div className={styles.columns}>
          <div className={styles.column_one}>
            <h3>Explore</h3>
            <p>Services</p>
            <p>Work</p>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
          <div className={styles.column_two}>
            <h3>Services</h3>
            <p>Brand</p>
            <p>Development</p>
            <p>Marketing</p>
          </div>
          <div className={styles.column_three}>
            <h3>Questions</h3>
            <h4>Call us</h4>
            <p className={styles.details}>0121 345 678</p>
            <h4>Email us</h4>
            <p className={styles.details}>info@digitalspaniel.co.uk</p>
          </div>
        </div>
        <div className={styles.icons_container}>
          <FaFacebookF className={styles.icon} size={30}/>
          <FaTwitter className={styles.icon} size={30}/>
          <FaInstagram className={styles.icon} size={30}/>
          <FaLinkedinIn className={styles.icon} size={30}/>
        </div>
      </div>
    </footer>
  )
}
