import React from 'react';
import styles from '../styles/Legal.module.css';

function Terms() {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.termsTitle}>شروط الاستخدام - Healthy Vision</h1>
      <p>
        مرحبًا بك في منصة Healthy Vision. استخدامك للمنصة يعني موافقتك على جميع الشروط والأحكام المبينة أدناه. إذا لم توافق على أيٍ من هذه الشروط، يرجى عدم استخدام المنصة.
      </p>

      <h2 className={styles.termsSectionTitle}> محتوى المنصة</h2>
      <p>
        جميع المعلومات، المقالات، والنصائح الصحية المعروضة على Healthy Vision تهدف فقط إلى التوعية العامة ونشر الثقافة الصحية. لا تعتبر المعلومات بديلاً عن زيارة الطبيب المختص أو الاستشارة الطبية المباشرة.
      </p>

      <h2 className={styles.termsSectionTitle}> عدم وجود تسجيل دخول أو جمع بيانات شخصية</h2>
      <p>
        لا تتطلب المنصة تسجيل الدخول أو إدخال معلومات شخصية للاستفادة من الخدمات. أي ميزات مستقبلية تتطلب ذلك سيتم إعلام المستخدمين بوضوح وتحديث الشروط والسياسة.
      </p>

      <h2 className={styles.termsSectionTitle}> الاستخدام المشروع</h2>
      <ul className={styles.termsList}>
        <li>يُمنع استخدام المنصة لأي نشاط غير قانوني أو مضر أو يخالف النظام العام والآداب.</li>
        <li>يُمنع نشر محتوى مسيء أو يحرض على الكراهية أو العنف أو التمييز.</li>
      </ul>

      <h2 className={styles.termsSectionTitle}> الملكية الفكرية وحقوق النشر</h2>
      <ul className={styles.termsList}>
        <li>
          جميع حقوق الملكية الفكرية والنصوص والمحتوى المعروض مملوكة لـ Healthy Vision، ولا يجوز إعادة نشر أو توزيع أو استغلال أي جزء من الموقع تجاريًا دون إذن كتابي رسمي.
        </li>
        <li>
          يمكنك مشاركة الروابط أو اقتباس المعلومات لغرض تعليمي أو توعوي مع ذكر المصدر.
        </li>
      </ul>

      <h2 className={styles.termsSectionTitle}> حدود المسؤولية</h2>
      <p>
        لا تتحمل Healthy Vision أي مسؤولية عن أية أضرار قد تنتج عن استخدام المعلومات في المنصة. يجب عليك دائمًا استشارة مختصين في الأمور الصحية والعلاجية.
      </p>

      <h2 className={styles.termsSectionTitle}> التعديلات والتغييرات</h2>
      <p>
        يحق للمنصة تعديل أو تحديث شروط الاستخدام في أي وقت دون إشعار مسبق، وتدخل التعديلات حيز التنفيذ فور نشرها في هذا القسم.
      </p>

      <h2 className={styles.termsSectionTitle}> سياسة الروابط الخارجية</h2>
      <p>
        قد تحتوي المنصة على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى أو سياسات الخصوصية في هذه المواقع.
      </p>

      <h2 className={styles.termsSectionTitle}> التواصل معنا</h2>
      <p>
        للاستفسار أو تقديم ملاحظات تتعلق بالخدمة أو الشروط، راسلنا على البريد:<br/>
        <a href="mailto:healthyvision1409@gmail.com">healthyvision1409@gmail.com
</a>
      </p>
    </div>
  );
}

export default Terms;