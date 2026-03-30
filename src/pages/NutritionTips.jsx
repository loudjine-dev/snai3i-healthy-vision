import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح التغذية الصحية"
function NutritionTips() {
  const tips = [
    {
      title: "الغذاء المتوازن أساس الصحة",
      text: "تناول وجبات تحتوي على خضار، فواكه، بروتينات، وكربوهيدرات بنسب معتدلة يحافظ على صحة جسمك."
    },
    {
      title: "اشرب الماء بانتظام",
      text: "الماء ضروري لكل وظائف الجسم، ويساعد على الهضم، التركيز، ونضارة البشرة."
    },
    {
      title: "قلل من السكريات",
      text: "الإفراط في السكر يسبب السمنة، تسوس الأسنان، ويرفع خطر الإصابة بالسكري."
    },
    {
      title: "لا تهمل وجبة الفطور",
      text: "فطور صحي يمنحك طاقة أفضل ويساعد على التركيز خلال اليوم."
    },
    {
      title: "اختر الدهون الصحية",
      text: "الدهون الموجودة في زيت الزيتون والمكسرات أفضل من الدهون المشبعة والمقليات."
    },
    {
      title: "الخضروات صديقك اليومي",
      text: "غنية بالفيتامينات والألياف التي تحسن الهضم وتقوي المناعة."
    },
    {
      title: "نظم أوقات وجباتك",
      text: "الأكل في أوقات منتظمة يساعد على استقرار مستوى السكر في الدم."
    },
    {
      title: "تجنب الأكل السريع",
      text: "الوجبات السريعة غنية بالدهون والملح وتضر بالصحة على المدى الطويل."
    },
    {
      title: "استمع لجسمك",
      text: "توقف عن الأكل عند الشعور بالشبع، ولا تأكل بدافع الملل أو التوتر."
    },
    {
      title: "التغذية الصحية أسلوب حياة",
      text: "الالتزام بعادات غذائية جيدة يحسن صحتك ومزاجك على المدى البعيد."
    }
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح التغذية الصحية</h1>
        <p>عادات بسيطة تصنع فرقًا كبيرًا في صحتك</p>
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


export default NutritionTips;


