import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Goals.module.css";

const cuttingCategories = [
  { id: 1, title: "نصائح التغذية", link: "/cutting/nutrition" },
  { id: 2, title: "التمارين الرياضية", link: "/cutting/exercises" },
  { id: 3, title: "وصفات صحية", link: "/cutting/recipes" },
  { id: 4, title: "برامج التنشيف", link: "/cutting/program" }
];

export default function Cutting() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>برامج التنشيف</h1>

        <p className={styles.desc}>
          إنقاص نسبة الدهون مع الحفاظ على الكتلة العضلية، للحصول على جسم مشدود ومتناسق مع إبراز العضلات.
        </p>

        <div className={styles.grid}>
          {cuttingCategories.map((category) => (
            <Link key={category.id} to={category.link} className={styles.item}>
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}