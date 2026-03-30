import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح للصحة النفسية" بسلايدر تفاعلي
function MentalHealthTips() {
  const tips = [
    { title: "مارس التأمل والاسترخاء", text: "تمارين التنفس والتأمل تساعد على تقليل التوتر وتحسين التركيز." },
    { title: "تحدث مع من تثق بهم", text: "مشاركة مشاعرك مع الأصدقاء أو العائلة يخفف الضغوط النفسية." },
    { title: "نم جيداً", text: "النوم الكافي يساهم في تحسين المزاج والذاكرة." },
    { title: "تجنب العزلة", text: "التواصل الاجتماعي يعزز الصحة النفسية ويقلل الاكتئاب." },
    { title: "مارس الرياضة", text: "النشاط البدني يرفع هرمونات السعادة مثل السيروتونين." },
    { title: "ابتعد عن التفكير السلبي", text: "درّب نفسك على التركيز على الإيجابيات." },
    { title: "اطلب المساعدة عند الحاجة", text: "استشر مختصاً إذا شعرت بقلق أو اكتئاب مستمر." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح للصحة النفسية</h1>
        <p>إرشادات للحفاظ على راحة البال والتوازن النفسي</p>
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


export default MentalHealthTips;


