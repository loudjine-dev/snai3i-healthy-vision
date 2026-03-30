import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح حول الصحة والتكنولوجيا" بسلايدر تفاعلي
export default function HealthTechTips() {
  const tips = [
    { title: "استخدم تطبيقات الصحة", text: "تتبع خطواتك، نومك، ونظامك الغذائي عبر التطبيقات الذكية." },
    { title: "استعن بالأجهزة القابلة للارتداء", text: "مثل الساعات الذكية لقياس معدل ضربات القلب والنشاط." },
    { title: "خزن بياناتك الطبية", text: "استخدم المنصات الرقمية لحفظ ملفاتك الطبية بأمان." },
    { title: "استفد من الاستشارات عن بعد", text: "الخدمات الطبية الإلكترونية توفر وقتك وجهدك." },
    { title: "تابع الأخبار الطبية", text: "ابقَ مطلعاً على آخر التقنيات والابتكارات الصحية." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح حول الصحة والتكنولوجيا</h1>
        <p>طرق الاستفادة من التكنولوجيا لتحسين صحتك</p>
      </header>


      {/* ===== السلايدر ===== */}
      <main className={styles.slider}>
        <button className={styles.arrow} onClick={prev}>❮</button>


        <div className={styles.card}>
          <h2>{tips[index].title}</h2>
          <p>{tips[index].text}</p>
        </div>


        <button className={styles.arrow} onClick={next}>❯</button>
      </main>


    </div>
  );
}

