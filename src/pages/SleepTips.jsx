import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح بخصوص التغذية" بسلايدر تفاعلي
function SleepTips() {
  const tips = [
    { title: "تناول وجبات متوازنة", text: "احرص على أن تحتوي وجبتك على البروتين، الكربوهيدرات، والدهون الصحية." },
    { title: "أكثر من الخضروات والفواكه", text: "تمد جسمك بالفيتامينات والمعادن والألياف الضرورية." },
    { title: "قلل من السكريات", text: "الإفراط في تناول السكر يرفع خطر السمنة والسكري." },
    { title: "تناول الحبوب الكاملة", text: "الشوفان والقمح الكامل أفضل من الحبوب المكررة لأنها غنية بالألياف." },
    { title: "اشرب الماء بانتظام", text: "الماء يساعد على الهضم ويحافظ على صحة الكلى والبشرة." },
    { title: "تجنب الأطعمة المصنعة", text: "الوجبات السريعة والمعلبة تحتوي على مواد حافظة ودهون ضارة." },
    { title: "قلل من الملح", text: "الإفراط في الصوديوم يرفع ضغط الدم ويؤثر على صحة القلب." },
    { title: "قسم وجباتك", text: "يفضل تناول 4-5 وجبات صغيرة خلال اليوم بدلاً من وجبتين كبيرتين." },
    { title: "اهتم بوجبة الإفطار", text: "تعتبر أساس الطاقة والنشاط لبقية اليوم." },
    { title: "لا تنسَ البروتين", text: "مصادر البروتين مثل البيض، البقوليات، والسمك مهمة لبناء العضلات." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح بخصوص التغذية</h1>
        <p>إرشادات تساعدك على اتباع نظام غذائي صحي ومتوازن</p>
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


export default SleepTips;


