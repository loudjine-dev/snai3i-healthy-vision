import React, { useState } from "react";
import styles from "../styles/Program.module.css";

const CUTTING_PROGRAMS = {
  beginner: {
    title: "برنامج تنشيف — مبتدئ (3–4 أيام + كارديو)",
    days: [
      {
        id: 1,
        day: "اليوم 1 — Upper",
        exercises: ["بنش — 3 × 15", "رو — 3 × 15"],
        tip: "أضف 20 دقيقة مشي."
      },
      {
        id: 2,
        day: "اليوم 2 — Lower",
        exercises: ["سكوات — 3 × 15", "لانجز — 3 × 12"],
        tip: "نبض مرتفع."
      },
      {
        id: 3,
        day: "اليوم 3 — Cardio + Core",
        exercises: ["HIIT — 15 دقيقة", "بلانك — 3 × 60ث"],
        tip: "عرق = حرق."
      }
    ]
  },
  intermediate: {
    title: "برنامج تنشيف — متوسط (4–6 أيام)",
    days: [
      {
        id: 1,
        day: "اليوم 1 — Push",
        exercises: ["بنش — 4 × 12"],
        tip: "راحة قصيرة."
      },
      {
        id: 2,
        day: "اليوم 2 — Pull",
        exercises: ["Lat — 4 × 15"],
        tip: "تحكم."
      },
      {
        id: 3,
        day: "اليوم 3 — Legs",
        exercises: ["سكوات — 4 × 15"],
        tip: "استمر."
      },
      {
        id: 4,
        day: "اليوم 4 — HIIT",
        exercises: ["HIIT — 20 دقيقة"],
        tip: "لا تتوقف."
      }
    ]
  },
  advanced: {
    title: "برنامج تنشيف — متقدم (5–6 أيام + HIIT)",
    days: [
      {
        id: 1,
        day: "اليوم 1 — Upper",
        exercises: ["سيركت كامل"],
        tip: "نبض عالي."
      },
      {
        id: 2,
        day: "اليوم 2 — HIIT",
        exercises: ["HIIT — 25 دقيقة"],
        tip: "أقصى حرق."
      },
      {
        id: 3,
        day: "اليوم 3 — Lower",
        exercises: ["سكوات — 4 × 20"],
        tip: "تحمل."
      },
      {
        id: 4,
        day: "اليوم 4 — HIIT",
        exercises: ["سباقات"],
        tip: "انفجار."
      },
      {
        id: 5,
        day: "اليوم 5 — Full Body",
        exercises: ["Burpees — 4 × 15"],
        tip: "قاتل الدهون."
      }
    ]
  }
};

export default function CuttingProgram() {
  const [level, setLevel] = useState("beginner");
  const program = CUTTING_PROGRAMS[level];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{program.title}</h1>
        <div className={styles.selectWrapper}>
          <select
            className={styles.levelSelect}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            aria-label="اختر مستوى البرنامج"
          >
            <option value="beginner">مبتدئ</option>
            <option value="intermediate">متوسط</option>
            <option value="advanced">متقدم</option>
          </select>
        </div>
      </header>

      <main className={styles.grid}>
        {program.days.map((day) => (
          <section key={day.id} className={styles.card}>
            <h3>{day.day}</h3>
            <ul>
              {day.exercises.map((exercise, idx) => (
                <li key={idx}>{exercise}</li>
              ))}
            </ul>
            <span className={styles.tip}>💡 نصيحة: {day.tip}</span>
          </section>
        ))}
      </main>
    </div>
  );
}