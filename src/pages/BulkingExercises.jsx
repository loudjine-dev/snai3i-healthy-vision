import React from "react";
import styles from "../styles/Exercises.module.css";

const bulkingExercises = [
  {
    id: 1,
    sectionTitle: "تمارين الصدر",
    exercises: [
      {
        id: 1,
        title: "ضغط البار على البنش",
        desc: "تمرين أساسي لزيادة القوة والكتلة العضلية في الصدر.",
        video: "bench-bar-press.mp4"
      },
      {
        id: 2,
        title: "ضغط بنش مائل (الصدر العلوي)",
        desc: "يستهدف الصدر العلوي لزيادة الحجم والشكل.",
        video: "incline-bench-press-upper-chest.mp4"
      }
    ]
  },
  {
    id: 2,
    sectionTitle: "تمارين البايسبس",
    exercises: [
      {
        id: 1,
        title: "بايسبس بالدامبل (تمرين كامل)",
        desc: "يحسن القوة والتحكم العضلي.",
        video: "dumbbell-biceps-workout.mp4"
      },
      {
        id: 2,
        title: "بايسبس المتوازي",
        desc: "تمرين وزن الجسم لتقوية الذراعين.",
        video: "parallel-bar-biceps.mp4"
      },
      {
        id: 3,
        title: "تقوية البايسبس بالمتوازي",
        desc: "يعزز القوة العضلية والتحمل.",
        video: "parallel-biceps-strength.mp4"
      }
    ]
  },
  {
    id: 3,
    sectionTitle: "تمارين الأكتاف",
    exercises: [
      {
        id: 1,
        title: "رفع أمامي للأكتاف",
        desc: "يستهدف الكتف الأمامي ويزيد من عرض الكتف.",
        video: "front-shoulder-raise.mp4"
      },
      {
        id: 2,
        title: "رفع جانبي للأكتاف",
        desc: "تمرين أساسي لتوسيع الأكتاف وبناء الشكل الجمالي.",
        video: "side-shoulder-raise.mp4"
      }
    ]
  },
  {
    id: 4,
    sectionTitle: "تمارين الظهر",
    exercises: [
      {
        id: 1,
        title: "سحب أرضي للظهر",
        desc: "يقوي عضلات الظهر السفلية والوسطى.",
        video: "ground-pull-back.mp4"
      },
      {
        id: 2,
        title: "عضلات الظهر العلوية",
        desc: "تمرين لبناء سماكة وقوة أعلى الظهر.",
        video: "upper-back-muscle.mp4"
      }
    ]
  },
  {
    id: 5,
    sectionTitle: "تمارين الأرجل",
    exercises: [
      {
        id: 1,
        title: "تمرين السكوات",
        desc: "تمرين شامل لبناء عضلات الأرجل وزيادة القوة.",
        video: "squat-fat-burning.mp4"
      }
    ]
  },
  {
    id: 6,
    sectionTitle: "تمارين الترايسبس",
    exercises: [
      {
        id: 1,
        title: "الترايسبس – الرأس الخلفي",
        desc: "يعزل الرأس الخلفي للترايسبس لزيادة الحجم.",
        video: "triceps-rear-head.mp4"
      }
    ]
  }
];

export default function BulkingExercises() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>تمارين التضخيم وبناء العضلات</h1>

      {bulkingExercises.map((section) => (
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