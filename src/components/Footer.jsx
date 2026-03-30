import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* About Section */}
          <div className={styles.section}>
            <h3>Healthy Vision</h3>
            <p>منصة طبية ذكية وعصرية لخدمتك والعناية بصحتك</p>
          </div>

          {/* Links Section */}
          <div className={styles.section}>
            <h4>روابط سريعة</h4>
            <ul>
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/about">عن التطبيق</Link></li>
              <li><Link to="/medical-tests">تحاليل طبية</Link></li>
              <li><Link to="/medical-advice">نصائح طبية</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div className={styles.section}>
            <h4>معلومات إضافية</h4>
            <ul>
              <li><a href="#privacy">سياسة الخصوصية</a></li>
              <li><a href="#terms">شروط الاستخدام</a></li>
              <li><a href="#faq">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
             <h2>تواصل معنا</h2>
        <div className={styles.contactItem}>
          البريد: <a href="mailto:healtyvision1409@gmail.com">healtyvision1409@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          الهاتف: <a href="tel:+213654601047">+213 654 601 047</a>
        </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>&copy; 2026 Healthy Vision. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}