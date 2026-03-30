import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح للتوقف عن التدخين" بسلايدر تفاعلي
function SmokingTips() {
  const tips = [
    { title: "حدد تاريخاً للإقلاع", text: "اختر يوماً قريباً وابدأ بالاستعداد له." },
    { title: "ابتعد عن المحفزات", text: "تجنب الأماكن والأشخاص المرتبطين بالتدخين." },
    { title: "استبدل العادة", text: "امضغ علكة أو تناول فواكه بدلاً من السيجارة." },
    { title: "اطلب الدعم", text: "شارك قرارك مع الأصدقاء أو العائلة." },
    { title: "تذكر الفوائد", text: "تحسن التنفس وصحة القلب خلال أسابيع من الإقلاع." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح للتوقف عن التدخين</h1>
        <p>خطوات عملية تساعدك على التخلص من التدخين</p>
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


      {/* ===== الفوتر ===== */}
      <footer className={styles.footer}>
        <p>© 2025 - جميع الحقوق محفوظة | Healthy Vision</p>
      </footer>
    </div>
  );
}


export default SmokingTips;
