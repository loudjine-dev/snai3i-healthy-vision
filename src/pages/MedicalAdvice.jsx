import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MedicalAdvice.module.css";


function MedicalAdvice() {
  const topics = [
    { title: "نصائح بخصوص القلب", img: "/images/نصائح بخصوص القلب.jpg", link: "/tips/heart" },
    { title: "نصائح بخصوص الجسم", img: "/images/نصائح بخصوص الجسم.jpg", link: "/tips/body" },
    { title: "نصائح بخصوص التغذية", img: "/images/نصائح بخصوص التغذية.png", link: "/tips/nutrition" },
    { title: "نصائح بخصوص الصحة النفسية", img: "/images/نصائح بخصوص الصحة النفسية.jpg", link: "/tips/mental-health" },
    { title: "نصائح بخصوص التمارين الرياضية", img: "/images/نصائح بخصوص التمارين الرياضية.jpg", link: "/tips/exercise" },
    { title: "نصائح بخصوص الترطيب", img: "/images/نصائح بخصوص الترطيب.jpg", link: "/tips/hydration" },
    { title: "نصائح بخصوص النوم الصحي", img: "/images/نصائح بخصوص النوم الصحي.jpg", link: "/tips/sleep" },
    { title: "نصائح بخصوص التدخين", img: "/images/نصائح بخصوص التدخين.png", link: "/tips/smoking" },
    { title: "نصائح بخصوص الوقاية من الأمراض", img: "/images/نصائح بخصوص الوقاية من الأمراض.webp", link: "/tips/disease-prevention" },
    { title: "نصائح بخصوص الصحة والتكنولوجيا", img: "/images/نصائح بخصوص التكنولوجيا والصحة.webp", link: "/tips/health-tech" }
  ];


  return (
    <>
      <header className={styles.header}>
        <h1>نصائح طبية</h1>
        <p>اختر الموضوع الذي تريد الاطلاع عليه</p>
      </header>


      <main className={styles.container}>
        {topics.map((topic) => (
          <div className={styles.topic} key={topic.link}>
            <Link to={topic.link}>
              <img className={styles.topicImg} src={topic.img} alt={topic.title} loading="lazy" />
              <h2>{topic.title}</h2>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}


export default MedicalAdvice;


