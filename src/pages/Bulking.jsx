import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Goals.module.css";

const bulkingCategories = [
  { id: 1, title: "نصائح التغذية", link: "/bulking/nutrition" },
  { id: 2, title: "التمارين الرياضية", link: "/bulking/exercises" },
  { id: 3, title: "وصفات لزيادة الوزن", link: "/bulking/recipes" },
  { id: 4, title: "برامج التضخيم", link: "/bulking/program" }
];

export default function Bulking() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>برامج التضخيم</h1>

        <p className={styles.desc}>
          زيادة الكتلة العضلية بشكل صحي وتدريجي، مع تعزيز القوة البدنية وبناء جسم قوي ومتوازن دون دهون زائدة.
        </p>

        <div className={styles.grid}>
          {bulkingCategories.map((category) => (
            <Link key={category.id} to={category.link} className={styles.item}>
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}