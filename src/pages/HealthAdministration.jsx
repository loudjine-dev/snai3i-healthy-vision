import React, { useState, useRef } from "react";
import styles from "../styles/HealthAdministration.module.css";


function HealthAdministration() {
  const [formData, setFormData] = useState({
    fastingSugar: "",
    postMealSugar: "",
    systolicBP: "",
    diastolicBP: "",
    heartRate: "",
    cholesterol: "",
    temperature: "",
  });


  const [results, setResults] = useState({});
  const buttonRef = useRef(null);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const evaluateHealth = () => {
    const r = {};


    // ===== سكر الصيام =====
    const fasting = parseFloat(formData.fastingSugar);
    if (!isNaN(fasting)) {
      if (fasting < 70) {
        r["سكر الصيام"] = { status: "منخفض", tips: [
          "تناول وجبة خفيفة تحتوي على سكر طبيعي مثل التمر أو العصير.",
          "تجنب المجهود البدني الشديد.",
          "راقب أعراض مثل الدوخة أو التعب المفاجئ.",
          "استشر الطبيب إذا تكرر انخفاض السكر."
        ]};
      } else if (fasting <= 99) {
        r["سكر الصيام"] = { status: "طبيعي", tips: [
          "استمر على نظام غذائي متوازن غني بالخضروات والفواكه.",
          "حافظ على مواعيد منتظمة للوجبات.",
          "قم بمراقبة مستوى السكر بشكل دوري.",
          "اشرب الماء بانتظام."
        ]};
      } else {
        r["سكر الصيام"] = { status: "مرتفع", tips: [
          "قلل من تناول السكريات والحلويات.",
          "تجنب المشروبات الغازية والعصائر المصنعة.",
          "مارس نشاطًا بدنيًا خفيفًا مثل المشي.",
          "راجع الطبيب إذا استمرت القراءات المرتفعة."
        ]};
      }
    }


    // ===== سكر بعد الأكل =====
    const postMeal = parseFloat(formData.postMealSugar);
    if (!isNaN(postMeal)) {
      r["سكر بعد الأكل"] =
        postMeal <= 140
          ? { status: "طبيعي", tips: [
              "احرص على تقسيم الوجبات وعدم الإفراط في الأكل.",
              "اختر الكربوهيدرات المعقدة بدل البسيطة.",
              "حافظ على شرب الماء بانتظام."
            ]}
          : { status: "مرتفع", tips: [
              "قلل من الخبز الأبيض والأرز.",
              "امشِ لمدة 15–30 دقيقة بعد الوجبة.",
              "راقب السكر بانتظام."
            ]};
    }


    // ===== الضغط الانقباضي =====
    const sys = parseInt(formData.systolicBP);
    if (!isNaN(sys)) {
      if (sys < 90) r["الضغط الانقباضي"] = { status: "منخفض", tips: [
        "اشرب كمية كافية من الماء يوميًا.",
        "تجنب الوقوف المفاجئ.",
        "استرح إذا شعرت بدوخة."
      ]};
      else if (sys <= 120) r["الضغط الانقباضي"] = { status: "طبيعي", tips: [
        "حافظ على نمط حياة صحي.",
        "قلل التوتر والضغط النفسي."
      ]};
      else r["الضغط الانقباضي"] = { status: "مرتفع", tips: [
        "قلل من استهلاك الملح.",
        "مارس الرياضة بانتظام.",
        "تابع قياسات الضغط مع الطبيب."
      ]};
    }


    // ===== الضغط الانبساطي =====
    const dia = parseInt(formData.diastolicBP);
    if (!isNaN(dia)) {
      if (dia < 60) r["الضغط الانبساطي"] = { status: "منخفض", tips: [
        "اشرب كمية كافية من الماء يوميًا.",
        "تجنب الوقوف المفاجئ.",
        "استرح إذا شعرت بدوخة."
      ]};
      else if (dia <= 80) r["الضغط الانبساطي"] = { status: "طبيعي", tips: [
        "حافظ على نمط حياة صحي.",
        "قلل التوتر والضغط النفسي."
      ]};
      else r["الضغط الانبساطي"] = { status: "مرتفع", tips: [
        "قلل من استهلاك الملح.",
        "مارس الرياضة بانتظام.",
        "تابع قياسات الضغط مع الطبيب."
      ]};
    }


    // ===== معدل ضربات القلب =====
    const hr = parseInt(formData.heartRate);
    if (!isNaN(hr)) {
      if (hr < 60) r["معدل ضربات القلب"] = { status: "منخفض", tips: [
        "قد يكون طبيعيًا للرياضيين.",
        "استشر الطبيب إذا صاحب الحالة تعب أو دوار."
      ]};
      else if (hr <= 100) r["معدل ضربات القلب"] = { status: "طبيعي", tips: [
        "حافظ على النشاط البدني المعتدل.",
        "تجنب التوتر والقلق."
      ]};
      else r["معدل ضربات القلب"] = { status: "مرتفع", tips: [
        "تجنب القهوة الزائدة والتوتر.",
        "مارس الاسترخاء ومراقبة النبض.",
        "استشر الطبيب إذا استمر التسارع."
      ]};
    }


    // ===== الكوليسترول =====
    const chol = parseFloat(formData.cholesterol);
    if (!isNaN(chol)) {
      if (chol < 200) r["الكوليسترول الكلي"] = { status: "طبيعي", tips: [
        "حافظ على نظام غذائي متوازن.",
        "مارس النشاط البدني بانتظام."
      ]};
      else if (chol <= 239) r["الكوليسترول الكلي"] = { status: "حدودي", tips: [
        "قلل الدهون المشبعة والمقليات.",
        "راقب النظام الغذائي والنشاط البدني."
      ]};
      else r["الكوليسترول الكلي"] = { status: "مرتفع", tips: [
        "تجنب الأطعمة الدهنية والمقلية.",
        "مارس الرياضة بانتظام.",
        "استشر الطبيب للمتابعة."
      ]};
    }


    // ===== درجة الحرارة =====
    const temp = parseFloat(formData.temperature);
    if (!isNaN(temp)) {
      if (temp < 36) r["درجة الحرارة"] = { status: "منخفضة", tips: [
        "حافظ على تدفئة الجسم جيدًا.",
        "اشرب السوائل الدافئة.",
        "راقب أي أعراض غير طبيعية."
      ]};
      else if (temp <= 37.5) r["درجة الحرارة"] = { status: "طبيعية", tips: [
        "لا توجد إجراءات خاصة مطلوبة.",
        "حافظ على نمط حياة صحي."
      ]};
      else r["درجة الحرارة"] = { status: "مرتفعة", tips: [
        "احصل على قسط كافٍ من الراحة.",
        "أكثر من شرب السوائل.",
        "استشر الطبيب إذا استمرت الحرارة."
      ]};
    }


    setResults(r);


    if (buttonRef.current) {
      buttonRef.current.classList.add(styles.activeButton);
      setTimeout(() => buttonRef.current.classList.remove(styles.activeButton), 200);
    }
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>إدارة الصحة الشخصية</h1>


      <div className={styles.form}>
        {[
          { label: "سكر الصيام", name: "fastingSugar" },
          { label: "سكر بعد الأكل", name: "postMealSugar" },
          { label: "الضغط الانقباضي", name: "systolicBP" },
          { label: "الضغط الانبساطي", name: "diastolicBP" },
          { label: "معدل ضربات القلب", name: "heartRate" },
          { label: "الكوليسترول الكلي", name: "cholesterol" },
          { label: "درجة الحرارة", name: "temperature", step: "0.1" },
        ].map((field) => (
          <div key={field.name} className={styles.inputGroup}>
            <label>{field.label}</label>
            <input
              type="number"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              step={field.step || "1"}
            />
          </div>
        ))}


        <button ref={buttonRef} className={styles.submitBtn} onClick={evaluateHealth}>
          عرض التقييم
        </button>
      </div>


      <div className={styles.results}>
        {Object.entries(results).map(([name, data]) => (
          <div key={name} className={styles.resultItem}>
            <h3>
              {name}
              <span className={`${styles.status} ${
                data.status === "طبيعي" ? styles["status-normal"] :
                data.status === "منخفض" || data.status === "منخفضة" ? styles["status-low"] :
                data.status === "مرتفع" ? styles["status-high"] :
                styles["status-normal"]
              }`}>
                {data.status}
              </span>
            </h3>
            <ul>
              {data.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


export default HealthAdministration;


