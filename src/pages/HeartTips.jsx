import React, { useState } from "react";
import styles from "../styles/AdviceTemplate.module.css";


// مكوّن صفحة "نصائح بخصوص القلب" بسلايدر تفاعلي
function HeartTips() {
  const tips = [
    { title: "مارس النشاط البدني", text: "المشي 30 دقيقة يومياً أو ممارسة أي نشاط رياضي يساعد على تقوية عضلة القلب وتحسين الدورة الدموية." },
    { title: "تجنب الأطعمة الدسمة", text: "قلل من الدهون المشبعة والمقليات، وأكثر من تناول الخضروات والفواكه." },
    { title: "راقب ضغط دمك", text: "القياس المنتظم لضغط الدم يساعدك على اكتشاف أي ارتفاع مبكر." },
    { title: "توقف عن التدخين", text: "الإقلاع عن التدخين يقلل خطر أمراض القلب بنسبة كبيرة ويحسن صحة الشرايين." },
    { title: "تجنب التوتر", text: "مارس تمارين الاسترخاء أو التأمل لتقليل التوتر الذي يؤثر سلباً على صحة القلب." },
    { title: "احرص على نوم كافٍ", text: "7-8 ساعات من النوم العميق يومياً تساهم في الحفاظ على صحة القلب." },
    { title: "اشرب الماء بانتظام", text: "الترطيب المستمر يحافظ على سيولة الدم ويقلل الجلطات." },
    { title: "قلل الملح في الطعام", text: "الإفراط في الملح يرفع ضغط الدم وبالتالي يزيد من خطر أمراض القلب." },
    { title: "افحص الكوليسترول", text: "المتابعة الدورية لنسبة الكوليسترول تساعد على الوقاية من انسداد الشرايين." },
    { title: "حافظ على وزن صحي", text: "زيادة الوزن ترهق القلب، بينما الوزن المثالي يقلل خطر الأمراض المزمنة." },
  ];


  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % tips.length);
  const prev = () => setIndex((i) => (i - 1 + tips.length) % tips.length);


  return (
    <div className={styles.page}>
      {/* ===== الهيدر ===== */}
      <header className={styles.header}>
        <h1>نصائح بخصوص القلب</h1>
        <p>إرشادات شائعة للحفاظ على صحة قلبك وحمايته من الأمراض</p>
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


export default HeartTips;


