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
              <li><Link to="/medication-reminder">تذكير الأدوية</Link></li>
              <li><Link to="/gym">الجيم</Link></li>
              <li><Link to="/emergency">غرفة الطوارئ الذكية</Link></li>
              <li><Link to="/health-administration">إدارة الصحة</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div className={styles.section}>
            <h4>معلومات إضافية</h4>
            <ul>
              <li><Link to="/privacy">سياسة الخصوصية</Link></li>
              <li><Link to="/terms">شروط الاستخدام</Link></li>
              <li><Link to="/faq">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
            <h2>تواصل معنا</h2>
            <div className={styles.contactItem}>
              البريد: <a href="mailto:healtyvision1409@gmail.com">healtyvision1409@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
            الهاتف: <a href="tel:+213654601047"><span dir="ltr">+213 654 601 047</span></a>
          </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>&copy; 2025 Healthy Vision. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}