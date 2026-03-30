import React, { useState } from "react";
import styles from "../styles/MedicalTests.module.css";


function MedicalTests() {
  const [testName, setTestName] = useState("");
  const [testValue, setTestValue] = useState("");
  const [result, setResult] = useState("");
  const [advice, setAdvice] = useState("");
  const [showAll, setShowAll] = useState(false);


  const tests = {
    HBA1C: { min: 4, max: 5.6, unit: "%", advice: { normal: "مستوى السكر طبيعي.", high: "مستوى السكر مرتفع، قلل السكريات.", low: "مستوى السكر منخفض، تناول وجبات خفيفة." } },
    GLUCOSE: { min: 70, max: 99, unit: "mg/dL", advice: { normal: "الجلوكوز طبيعي.", high: "الجلوكوز مرتفع، تجنب السكريات الزائدة.", low: "الجلوكوز منخفض، تناول وجبات صغيرة." } },
    CHOLESTEROL: { min: 0, max: 200, unit: "mg/dL", advice: { normal: "الكوليسترول طبيعي.", high: "الكوليسترول مرتفع، قلل الدهون.", low: "الكوليسترول منخفض، استشر الطبيب." } },
    TRIGLYCERIDES: { min: 0, max: 150, unit: "mg/dL", advice: { normal: "الدهون الثلاثية طبيعية.", high: "الدهون الثلاثية مرتفعة.", low: "الدهون الثلاثية منخفضة." } },
    HDL: { min: 40, max: 100, unit: "mg/dL", advice: { normal: "HDL طبيعي.", high: "HDL مرتفع، جيد للقلب.", low: "HDL منخفض، مارس الرياضة." } },
    LDL: { min: 0, max: 100, unit: "mg/dL", advice: { normal: "LDL طبيعي.", high: "LDL مرتفع، قلل الدهون.", low: "LDL منخفض، استشر الطبيب." } },
    VITAMIN_D: { min: 30, max: 100, unit: "ng/mL", advice: { normal: "فيتامين D طبيعي.", high: "فيتامين D مرتفع.", low: "فيتامين D منخفض، تعرض للشمس." } },
    IRON: { min: 60, max: 170, unit: "µg/dL", advice: { normal: "الحديد طبيعي.", high: "الحديد مرتفع، استشر الطبيب.", low: "الحديد منخفض، تناول أطعمة غنية بالحديد." } },
    FERRITIN: { min: 12, max: 150, unit: "ng/mL", advice: { normal: "الفيريتين طبيعي.", high: "الفيريتين مرتفع، استشر الطبيب.", low: "الفيريتين منخفض، تناول الحديد." } },
    CALCIUM: { min: 8.5, max: 10.5, unit: "mg/dL", advice: { normal: "الكالسيوم طبيعي.", high: "الكالسيوم مرتفع.", low: "الكالسيوم منخفض، تناول منتجات الألبان." } },
    MAGNESIUM: { min: 1.7, max: 2.2, unit: "mg/dL", advice: { normal: "المغنيسيوم طبيعي.", high: "المغنيسيوم مرتفع.", low: "المغنيسيوم منخفض، تناول مكمل." } },
    POTASSIUM: { min: 3.5, max: 5.0, unit: "mEq/L", advice: { normal: "البوتاسيوم طبيعي.", high: "البوتاسيوم مرتفع.", low: "البوتاسيوم منخفض، تناول مكمل." } },
    SODIUM: { min: 135, max: 145, unit: "mEq/L", advice: { normal: "الصوديوم طبيعي.", high: "الصوديوم مرتفع.", low: "الصوديوم منخفض، تجنب فقدان الملح." } },
    CREATININE: { min: 0.6, max: 1.3, unit: "mg/dL", advice: { normal: "الكرياتينين طبيعي.", high: "الكرياتينين مرتفع، راجع وظائف الكلى.", low: "الكرياتينين منخفض، راجع الطبيب." } },
    BUN: { min: 7, max: 20, unit: "mg/dL", advice: { normal: "BUN طبيعي.", high: "BUN مرتفع، راجع وظائف الكلى.", low: "BUN منخفض، راجع الطبيب." } },
    ALT: { min: 7, max: 56, unit: "U/L", advice: { normal: "الكبد طبيعي.", high: "ALT مرتفع، راجع الكبد.", low: "ALT منخفض، استشر الطبيب." } },
    AST: { min: 10, max: 40, unit: "U/L", advice: { normal: "الكبد طبيعي.", high: "AST مرتفع، راجع الكبد.", low: "AST منخفض، استشر الطبيب." } },
    TSH: { min: 0.4, max: 4.0, unit: "mIU/L", advice: { normal: "الغدة الدرقية طبيعية.", high: "TSH مرتفع، راجع الغدة الدرقية.", low: "TSH منخفض، راجع الغدة الدرقية." } },
    B12: { min: 200, max: 900, unit: "pg/mL", advice: { normal: "B12 طبيعي.", high: "B12 مرتفع، استشر الطبيب.", low: "B12 منخفض، تناول مكمل B12." } },
    CRP: { min: 0, max: 10, unit: "mg/L", advice: { normal: "CRP طبيعي.", high: "CRP مرتفع، راجع الطبيب.", low: "CRP منخفض، استشر الطبيب." } },
    FOLATE: { min: 2, max: 20, unit: "ng/mL", advice: { normal: "الفولات طبيعي.", high: "الفولات مرتفع.", low: "الفولات منخفض." } },
    ALBUMIN: { min: 3.5, max: 5.0, unit: "g/dL", advice: { normal: "الألبومين طبيعي.", high: "الألبومين مرتفع.", low: "الألبومين منخفض." } },
    TOTAL_PROTEIN: { min: 6, max: 8.3, unit: "g/dL", advice: { normal: "البروتين الكلي طبيعي.", high: "البروتين مرتفع.", low: "البروتين منخفض." } },
    BILIRUBIN_TOTAL: { min: 0.3, max: 1.2, unit: "mg/dL", advice: { normal: "البيليروبين طبيعي.", high: "البيليروبين مرتفع.", low: "البيليروبين منخفض." } },
    BILIRUBIN_DIRECT: { min: 0, max: 0.3, unit: "mg/dL", advice: { normal: "البيليروبين المباشر طبيعي.", high: "البيليروبين مرتفع.", low: "البيليروبين منخفض." } },
    ALP: { min: 44, max: 147, unit: "U/L", advice: { normal: "ALP طبيعي.", high: "ALP مرتفع.", low: "ALP منخفض." } },
    GGT: { min: 0, max: 51, unit: "U/L", advice: { normal: "GGT طبيعي.", high: "GGT مرتفع.", low: "GGT منخفض." } },
    AMYLASE: { min: 30, max: 110, unit: "U/L", advice: { normal: "الأميلاز طبيعي.", high: "الأميلاز مرتفع.", low: "الأميلاز منخفض." } },
    LIPASE: { min: 0, max: 160, unit: "U/L", advice: { normal: "الليباز طبيعي.", high: "الليباز مرتفع.", low: "الليباز منخفض." } },
    CPK: { min: 10, max: 120, unit: "U/L", advice: { normal: "CPK طبيعي.", high: "CPK مرتفع.", low: "CPK منخفض." } },
    TROPONIN: { min: 0, max: 0.04, unit: "ng/mL", advice: { normal: "التروبونين طبيعي.", high: "التروبونين مرتفع، راجع القلب.", low: "التروبونين منخفض." } },
    BNP: { min: 0, max: 100, unit: "pg/mL", advice: { normal: "BNP طبيعي.", high: "BNP مرتفع، راجع القلب.", low: "BNP منخفض." } },
    WBC: { min: 4, max: 11, unit: "x10^3/µL", advice: { normal: "كريات الدم البيضاء طبيعية.", high: "WBC مرتفع، راجع الطبيب.", low: "WBC منخفض، راجع الطبيب." } },
    RBC: { min: 4.5, max: 6.0, unit: "x10^6/µL", advice: { normal: "كريات الدم الحمراء طبيعية.", high: "RBC مرتفع.", low: "RBC منخفض." } },
    HEMOGLOBIN: { min: 13.5, max: 17.5, unit: "g/dL", advice: { normal: "الهيموغلوبين طبيعي.", high: "الهيموغلوبين مرتفع.", low: "الهيموغلوبين منخفض." } },
    HEMATOCRIT: { min: 41, max: 53, unit: "%", advice: { normal: "الهيماتوكريت طبيعي.", high: "الهيماتوكريت مرتفع.", low: "الهيماتوكريت منخفض." } },
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const key = testName.trim().toUpperCase();
    const valueNum = parseFloat(testValue);


    if (!tests[key] || isNaN(valueNum)) {
      setResult("هذا التحليل غير موجود أو القيمة غير صحيحة.");
      setAdvice("");
      return;
    }


    const { min, max, unit, advice } = tests[key];
    let interpretation = "طبيعي";
    let adviceText = advice.normal;


    if (valueNum < min) {
      interpretation = "منخفض";
      adviceText = advice.low;
    } else if (valueNum > max) {
      interpretation = "مرتفع";
      adviceText = advice.high;
    }


    setResult(`نتيجة ${key}: ${interpretation} (${valueNum} ${unit})`);
    setAdvice(adviceText);
  };


  return (
    <>
      <header className={styles.header}>
        <h1>فهم التحاليل الطبية</h1>
        <p>أدخل اسم التحليل والقيمة للحصول على التفسير</p>
      </header>


      <main className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label>اسم التحليل:</label>
          <input value={testName} onChange={(e) => setTestName(e.target.value)} required />


          <label>القيمة:</label>
          <input type="number" value={testValue} onChange={(e) => setTestValue(e.target.value)} required />


          <button type="submit">تفسير النتيجة</button>
        </form>


        <section className={styles.resultBox}>{result}</section>
        {advice && <div className={styles.adviceBox}>{advice}</div>}


        <div className={styles.showTests}>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "إخفاء التحاليل" : "عرض جميع التحاليل المتاحة"}
          </button>
          {showAll && (
            <ul>
              {Object.keys(tests).map(t => (
                <li key={t}>
                  {t} ({tests[t].unit})
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}


export default MedicalTests;


