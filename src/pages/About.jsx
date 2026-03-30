import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <section className={styles.about}>
        <h1>من نحن</h1>
        <p>
          في <strong>Healthy Vision</strong> نعمل على دمج التكنولوجيا بالصحة
          لتوفير تجربة سلسة، من متابعة التمارين وحتى فهم نتائج التحاليل.
        </p>

        <ul className={styles.timeline}>
          <li className={styles.timelineItem}>
            <h3>فهم التحاليل الطبية</h3>
            <p>تفسير مبسط لنتائج الفحوصات الطبية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>نصائح طبية</h3>
            <p>إرشادات عملية للحياة الصحية اليومية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>تذكير الأدوية</h3>
            <p>تنظيم وتذكير بمواعيد الدواء اليومية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>الجيم - تنشيف / تضخيم</h3>
            <p>خطط تدريبية تناسب أهدافك البدنية.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>غرفة الطوارئ الذكية</h3>
            <p>مساعدة فورية عند الحالات الحرجة.</p>
          </li>
          <li className={styles.timelineItem}>
            <h3>إدارة الصحة</h3>
            <p>أدوات لمتابعة حالتك الصحية بانتظام.</p>
          </li>
        </ul>
      </section>

    
    </>
  );
}

export default About;