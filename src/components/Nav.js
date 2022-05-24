import React, {useState, useEffect, useRef} from 'react'
import logo from "../assets/images/logo.png"
import styles from "../styles/Nav.module.scss"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [ascending, setAscending] = useState(true);
  const prevScrollY = useRef(0);

  const toggleNav = () => {
    console.log("Hello from the toggle function!")
    if (open === true) {return}
    console.log("Hello from after the open return!")
    const currentScrollY = window.scrollY
    if (prevScrollY.current < currentScrollY) {
      setAscending(false)
    }
    if (prevScrollY.current > currentScrollY) {
      setAscending(true);
    }
    prevScrollY.current = currentScrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleNav);
    return () => {
      window.removeEventListener('scroll', toggleNav);
    };
  }, [window.scrollY]);

  return (
    <nav className={`${ascending ? "" : styles.hidden}`}>
      {/* Main nav */}
      <div className={styles.logo_container}>
        <img src={logo} alt="Digital Spaniel logo" className={styles.image}/>  
      </div>
      <div className={styles.items_container}>
        <p>Services</p>
        <p>Work</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>

      {/* Hamburger menu */}
      <div className={styles.square} onClick={() => setOpen(!open)}>
        <span className={open ? styles.open : ""}></span>
        <span className={open ? styles.open : ""}></span>
        <span className={open ? styles.open : ""}></span>
      </div>

      {/* Overlay */}
      <div className={`${styles.overlay} ${open ? styles.open : ""}`} onClick={() => setOpen(!open)}></div>

      {/* Slide-out menu */}
      <div className={`${styles.slide_out} ${open ? styles.open : ""}`}>
        <p>Services</p>
        <p>Work</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
    </nav>
  )
}
