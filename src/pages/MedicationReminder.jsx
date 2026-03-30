import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/MedicationReminder.module.css";
import alertSound from "../sounds/alert.mp3";




function MedicationReminder() {
  const [medicines, setMedicines] = useState(() => {
    const saved = localStorage.getItem("medicines");
    return saved ? JSON.parse(saved) : [];
  });


  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [notification, setNotification] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);


  const lastAlertRef = useRef({});
  const audioRef = useRef(null);


  // حفظ الأدوية في localStorage
  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }, [medicines]);


  // تهيئة الصوت
  useEffect(() => {
    audioRef.current = new Audio(alertSound);
    audioRef.current.preload = "auto";
  }, []);


  // إضافة دواء
  const addMedicine = () => {
    if (!name.trim() || !time || !date) {
      setNotification("الرجاء إدخال اسم الدواء والتاريخ ووقت التذكير");
      return;
    }
    setMedicines([...medicines, { name, time, date }]);
    setName("");
    setTime("");
    setDate("");
  };


  // حذف دواء
  const deleteMedicine = (index) => {
    setMedicines(medicines.filter((_, i) => i !== index));
    delete lastAlertRef.current[index];
  };


  // فحص الوقت للتنبيه
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      const currentDate = now.toISOString().slice(0, 10);


      medicines.forEach((med, index) => {
        if (
          med.time === currentTime &&
          med.date === currentDate &&
          lastAlertRef.current[index] !== currentTime
        ) {
          setNotification(`حان وقت تناول: ${med.name}`);
          if (soundEnabled && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
          }
          lastAlertRef.current[index] = currentTime;
          setTimeout(() => setNotification(""), 5000);
        }
      });
    }, 60000);


    return () => clearInterval(interval);
  }, [medicines, soundEnabled]);


  // تفعيل صوت التنبيهات
  const enableSound = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setSoundEnabled(true);
      })
      .catch(() => {});
  };


  return (
    <>
      {/* ===== حاوية الإشعار ===== */}
      {notification && (
        <div className={styles.notificationBox}>
          <span className={styles.notificationText}>{notification}</span>
        </div>
      )}


      {/* ===== الصفحة ===== */}
      <div className={styles.container}>
        <h2 className={styles.title}>تذكير بالأدوية</h2>


        {!soundEnabled && (
          <button onClick={enableSound} className={styles.soundBtn}>
            تفعيل صوت التنبيهات
          </button>
        )}


        <label className={styles.label}>اسم الدواء</label>
        <input
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="مثال: فيتامين D"
        />


        <label className={styles.label}>تاريخ التذكير</label>
        <input
          className={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />


        <label className={styles.label}>وقت التذكير</label>
        <input
          className={styles.input}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />


        <button onClick={addMedicine} className={styles.addBtn}>
          أضف الدواء
        </button>


        <h3 className={styles.subtitle}>قائمة الأدوية</h3>
        <ul className={styles.list}>
          {medicines.map((med, index) => (
            <li key={index} className={styles.listItem}>
              <span>
                {med.name} — {med.date} — {med.time}
              </span>
              <button
                className={styles.deleteBtn}
                onClick={() => deleteMedicine(index)}
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export default MedicationReminder;
