import React from "react";
import styles from "../styles/Nutrition.module.css";

const nutritionTips = [
  {
    id: 1,
    title: "عجز سعرات تدريجي",
    text: "قلّل السعرات بمقدار 300–500 سعرة يوميًا لتفادي فقدان العضلات."
  },
  {
    id: 2,
    title: "رفع البروتين",
    text: "البروتين العالي يحافظ على الكتلة العضلية أثناء خسارة الدهون."
  },
  {
    id: 3,
    title: "كربوهيدرات ذكية",
    text: "استخدم الكربوهيدرات المعقدة وركّزها حول التمرين."
  },
  {
    id: 4,
    title: "دهون معتدلة",
    text: "الدهون ضرورية لصحة الهرمونات حتى أثناء التنشيف."
  },
  {
    id: 5,
    title: "الخضار والألياف",
    text: "الألياف تزيد الشبع وتحسّن الهضم وتقلل الجوع."
  },
  {
    id: 6,
    title: "شرب الماء بكثرة",
    text: "الترطيب الجيد يدعم الحرق ويقلل احتباس السوائل."
  },
  {
    id: 7,
    title: "تقليل السكريات",
    text: "السكريات الزائدة تعيق خسارة الدهون وترفع الشهية."
  },
  {
    id: 8,
    title: "التحكم في الصوديوم",
    text: "تقليل الملح يساعد في تقليل احتباس السوائل."
  },
  {
    id: 9,
    title: "نوم كافٍ",
    text: "قلة النوم تضعف الحرق وتزيد الشهية."
  },
  {
    id: 10,
    title: "مراقبة التقدم",
    text: "تابع الوزن ونسبة الدهون وعدّل السعرات حسب النتائج."
  }
];

export default function CuttingNutrition() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>تغذية التنشيف</h1>
        <p>
          نصائح غذائية تساعدك على خسارة الدهون مع الحفاظ على العضلات والصحة.
        </p>
      </header>

      <section className={styles.tips}>
        {nutritionTips.map((tip) => (
          <div key={tip.id} className={styles.card}>
            <h3>{tip.id}. {tip.title}</h3>
            <p>{tip.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}