import React from "react";
import styles from "../styles/Exercises.module.css";

const cuttingExercises = [
  {
    id: 1,
    sectionTitle: "تمارين الكارديو وحرق الدهون",
    exercises: [
      {
        id: 1,
        title: "كارديو سريع",
        desc: "تمرين كارديو مكثف لرفع نبض القلب وتسريع حرق الدهون.",
        video: "fast-cardio-fat-burn.mp4"
      },
      {
        id: 2,
        title: "انطلاقة العداء",
        desc: "تمرين انفجاري عالي الشدة يركز على التسارع السريع، يحرق الدهون ويقوي عضلات الساقين.",
        video: "sprint-cardio-workout.mp4"
      },
      {
        id: 3,
        title: "القفز بالحبل",
        desc: "كارديو ممتاز لحرق السعرات وتقوية الساقين.",
        video: "jump-rope-fat-loss.mp4"
      }
    ]
  },
  {
    id: 2,
    sectionTitle: "تمارين HIIT",
    exercises: [
      {
        id: 1,
        title: "تمرين HIIT لحرق الدهون",
        desc: "تمارين متقطعة ترفع معدل الأيض وتحرق الدهون بعد التمرين.",
        video: "hiit-fat-loss-workout.mp4"
      }
    ]
  },
  {
    id: 3,
    sectionTitle: "تمارين بليومتريك",
    exercises: [
      {
        id: 1,
        title: "القفز والهبوط",
        desc: "تمرين بليومتريك يقوي العضلات ويحرق الدهون بسرعة.",
        video: "jump-and-land-workout.mp4"
      },
      {
        id: 2,
        title: "قفزات بليومتريك",
        desc: "حركات انفجارية لزيادة القوة والسرعة.",
        video: "plyometric-jumps-fat-burn.mp4"
      }
    ]
  },
  {
    id: 4,
    sectionTitle: "تمارين الكور (Core)",
    exercises: [
      {
        id: 1,
        title: "تمرين عجلة البطن (Ab Wheel)",
        desc: "تمرين قوي لتقوية عضلات البطن والكور.",
        video: "ab-wheel-core-workout.mp4"
      }
    ]
  },
  {
    id: 5,
    sectionTitle: "تمارين كامل الجسم",
    exercises: [
      {
        id: 1,
        title: "سحب الحبل",
        desc: "تمرين شامل لتقوية الذراعين والظهر وزيادة التحمل.",
        video: "rope-pull-full-body.mp4"
      }
    ]
  }
];

export default function CuttingExercises() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>تمارين التنشيف وحرق الدهون</h1>

      {cuttingExercises.map((section) => (
        <div key={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>

          {section.exercises.map((exercise) => (
            <div key={exercise.id} className={styles.card}>
              <div className={styles.text}>
                <h3>{exercise.title}</h3>
                <p>{exercise.desc}</p>
              </div>

              <video controls preload="metadata" className={styles.video}>
                <source src={`/videos/${exercise.video}`} type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}