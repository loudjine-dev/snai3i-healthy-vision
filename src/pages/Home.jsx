import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFlask,
  FaStethoscope,
  FaPills,
  FaDumbbell,
  FaAmbulance,
  FaClipboardList
} from "react-icons/fa";
import styles from "../styles/Home.module.css";

const cardsData = [
  { id: 1, title: "تحاليل طبية", img: "/images/تحاليل.png", link: "/medical-tests", icon: FaFlask },
  { id: 2, title: "نصائح طبية", img: "/images/نصائح طبية.webp", link: "/medical-advice", icon: FaStethoscope },
  { id: 3, title: "تذكير الأدوية", img: "/images/ادوية.png", link: "/medication-reminder", icon: FaPills },
  { id: 4, title: "الجيم", img: "/images/الجيم.jpg", link: "/gym", icon: FaDumbbell },
  { id: 5, title: "الطوارئ الذكية", img: "/images/الطوارئ.png", link: "/smart-emergency-room", icon: FaAmbulance },
  { id: 6, title: "إدارة الصحة", img: "/images/إدارة.webp", link: "/health-administration", icon: FaClipboardList }
];

export default function Home() {
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(`.${styles.card}`)
      .forEach(card => cardObserver.observe(card));

    const heroObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.heroIn);
          }
        });
      },
      { threshold: 0.2 }
    );

    const heroH1 = document.querySelector(`.${styles.heroContent} h1`);
    const heroP = document.querySelector(`.${styles.heroContent} p`);

    heroH1 && heroObserver.observe(heroH1);
    heroP && heroObserver.observe(heroP);

    return () => {
      cardObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>مرحباً بك في Healthy Vision</h1>
          <p>منصة طبية ذكية وعصرية لخدمتك</p>
        </div>

        <div className={styles.heroBackground}>
          {[...Array(30)].map((_, i) => (
            <div key={i} className={styles.bubble}></div>
          ))}
          <div className={styles.waves}></div>
        </div>
      </section>

      {/* CARDS */}
      {/* ✅ هنا التعديل */}
      <section id="categories" className={styles.categories}>
        <h2 className={styles.sectionTitle}>الفئات</h2>

        <div className={styles.cards}>
          {cardsData.map((card) => {
            const Icon = card.icon;
            return (
              <Link 
                key={card.id} 
                to={card.link} 
                className={styles.card}
                aria-label={`انتقل إلى ${card.title}`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <div className={styles.overlay}></div>

                <div className={styles.cardContent}>
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <h3>{card.title}</h3>
                  <span className={styles.more}>الدخول</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}