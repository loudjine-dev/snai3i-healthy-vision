import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح بخصوص الجسم" بسلايدر تفاعلي
function BodyTips() {
  const tips = [
    { title: "اشرب كمية كافية من الماء", text: "الترطيب المستمر يساعد على تنشيط الجسم وحماية الجلد من الجفاف." },
    { title: "مارس الرياضة بانتظام", text: "التمارين تحافظ على قوة العضلات والعظام وتزيد من مرونة الجسم." },
    { title: "تناول وجبات متوازنة", text: "اهتم بتناول البروتين، الخضار، الفواكه، والحبوب الكاملة." },
    { title: "احرص على النظافة الشخصية", text: "الاستحمام المنتظم وغسل اليدين يحميك من كثير من الأمراض." },
    { title: "تجنب الجلوس الطويل", text: "حاول أن تتحرك كل ساعة لتنشط الدورة الدموية وتحمي ظهرك." },
    { title: "احصل على قسط كافٍ من النوم", text: "النوم الجيد ضروري لتجديد الطاقة وتعزيز المناعة." },
    { title: "راقب وزنك", text: "الحفاظ على وزن صحي يقلل من خطر الأمراض المزمنة." },
    { title: "اعتنِ بصحة بشرتك", text: "استخدم واقي الشمس وحافظ على نظام غذائي صحي للحماية من التجاعيد." },
    { title: "تجنب التوتر والإجهاد", text: "الصحة النفسية تنعكس بشكل مباشر على صحة الجسم." },
    { title: "افحص جسمك دورياً", text: "الفحوصات الدورية تساعد على اكتشاف الأمراض مبكراً." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح بخصوص الجسم</h1>
        <p>إرشادات شائعة للحفاظ على صحة جسمك ونشاطه</p>
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


export default BodyTips;
