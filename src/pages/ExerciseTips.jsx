import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح للرياضة" بسلايدر تفاعلي
function ExerciseTips() {
  const tips = [
    { title: "ابدأ تدريجياً", text: "لا تبالغ من البداية، زد من شدة التمارين تدريجياً." },
    { title: "مارس تمارين متنوعة", text: "اخلط بين الكارديو، القوة، والمرونة." },
    { title: "التزم بالاستمرارية", text: "من الأفضل ممارسة الرياضة بانتظام حتى لو كانت قصيرة." },
    { title: "لا تنسَ الإحماء", text: "الإحماء يقلل خطر الإصابات." },
    { title: "اشرب الماء أثناء التمارين", text: "الترطيب يحافظ على طاقتك." },
    { title: "استمع لجسمك", text: "إذا شعرت بألم شديد توقف وخذ قسطاً من الراحة." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح للرياضة</h1>
        <p>إرشادات تساعدك على ممارسة التمارين بأمان وفعالية</p>
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


export default ExerciseTips;