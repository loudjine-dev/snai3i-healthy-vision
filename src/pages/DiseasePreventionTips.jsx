import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح للوقاية من الأمراض" بسلايدر تفاعلي
function DiseasePreventionTips() {
  const tips = [
    { title: "اغسل يديك بانتظام", text: "الحرص على النظافة يقلل من انتشار العدوى." },
    { title: "تلقي التطعيمات الضرورية", text: "اللقاحات تحمي من الأمراض المعدية الخطيرة." },
    { title: "اتباع نظام غذائي صحي", text: "الأطعمة الغنية بالفيتامينات والمعادن تقوي المناعة." },
    { title: "مارس النشاط البدني", text: "التمارين الرياضية تحافظ على صحة القلب والجهاز المناعي." },
    { title: "احرص على النوم الكافي", text: "النوم يعزز قدرة الجسم على مكافحة الأمراض." },
    { title: "تجنب التدخين والكحول", text: "هذه العادات تضعف الجهاز المناعي وتزيد خطر الأمراض المزمنة." },
    { title: "تجنب التوتر والإجهاد", text: "التوتر المستمر يضعف المناعة ويزيد التعرض للأمراض." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح للوقاية من الأمراض</h1>
        <p>إرشادات للحفاظ على صحتك والحد من مخاطر الأمراض</p>
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


export default DiseasePreventionTips;
