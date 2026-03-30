import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Gym.module.css";

const gymCategories = [
  {
    id: 1,
    title: "التنشيف",
    description: "إنقاص نسبة الدهون مع الحفاظ على الكتلة العضلية، للحصول على جسم مشدود، متناسق، بروز عضلي واضح دون فقدان القوة.",
    image: "/images/Cutting.png",
    link: "/cutting"
  },
  {
    id: 2,
    title: "التضخيم",
    description: "زيادة الكتلة العضلية بشكل صحي وتدريجي، مع تعزيز القوة البدنية وتحسين الأداء الرياضي، وبناء جسم قوي ومتوازن مع تقليل تراكم الدهون.",
    image: "/images/Bulking.png",
    link: "/bulking"
  }
];

export default function Gym() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>حدد هدفك</h1>

      <div className={styles.cards}>
        {gymCategories.map((category) => (
          <Link key={category.id} to={category.link} className={styles.card}>
            <div className={styles.cardTop}>
              <img src={category.image} alt={category.title} loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <span className={styles.btn}>ابدأ</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}