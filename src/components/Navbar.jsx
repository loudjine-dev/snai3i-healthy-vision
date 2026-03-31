import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrap}>
        <span className={styles.logo}> Healthy Vision</span>
      </div>

      <ul className={styles.navLinks}>
        <li>
     <Link 
    to="/" 
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
     >
      الرئيسية
    </Link>
   </li>
        <li><Link to="/about">من نحن</Link></li>
        <li><a href="#categories">الفئات</a></li>
        <li><a href="mailto:healtyvision1409@gmail.com">تواصل معنا</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;