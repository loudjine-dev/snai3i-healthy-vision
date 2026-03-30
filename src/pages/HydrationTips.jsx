import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


function HydrationTips() {
  const tips = [
    { title: "اشرب 8 أكواب يومياً", text: "الحفاظ على الترطيب أمر ضروري لصحة الجسم." },
    { title: "ابدأ يومك بكوب ماء", text: "يساعد على تنشيط الجسم بعد الاستيقاظ." },
    { title: "احمل زجاجة ماء", text: "وجود الماء بجانبك يجعلك تتذكر الشرب." },
    { title: "أكثر من الفواكه الغنية بالماء", text: "مثل البطيخ والبرتقال والخيار." },
    { title: "قلل المشروبات الغازية", text: "تسبب الجفاف وتحتوي على سكريات عالية." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>نصائح الترطيب</h1>
        <p>طرق بسيطة للحفاظ على شرب الماء بانتظام</p>
      </header>


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


export default HydrationTips;


