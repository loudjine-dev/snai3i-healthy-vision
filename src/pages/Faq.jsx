import React from 'react';
import styles from '../styles/Legal.module.css';

function Faq() {
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>الأسئلة الشائعة - Healthy Vision</h1>

      <div>
        <div className={styles.faqQuestion}>هل يجب علي التسجيل حتى أستخدم المنصة؟</div>
        <div className={styles.faqAnswer}>
          لا. يمكن لجميع الزوار الاستفادة من كامل خدمات Healthy Vision دون الحاجة إلى إنشاء حساب أو إدخال بيانات شخصية.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>هل تجمع المنصة معلوماتي أو بيانات شخصية عني؟</div>
        <div className={styles.faqAnswer}>
          لا تجمع المنصة معلومات تعريفية ولا تتطلب أي بيانات شخصية، فقط يتم جمع بعض البيانات التقنية البسيطة بغرض تطوير الخدمة (مثل نوع الجهاز أو المتصفح ومدة التصفح) دون ربطها بهويتك.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>هل ما أقرأه في Healthy Vision يغني عن التشخيص أو العلاج الطبي؟</div>
        <div className={styles.faqAnswer}>
          لا، المعلومات والنصائح تهدف للتوعية العامة فقط وليست بديلاً عن مراجعة الطبيب المختص أو اتخاذ قرارات علاجية دون استشارته.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>ما هي أنواع المحتوى الذي يمكنني الاستفادة منه في المنصة؟</div>
        <div className={styles.faqAnswer}>
          ستجد نصائح صحية وقائية، معلومات عن تحاليل طبية، تذكير بالأدوية، نصائح التغذية، برامج رياضية، توصيات للنوم الصحي، نصائح صحة القلب والجسم... وكلها متاحة للجميع مجانًا.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>هل المنصة مناسبة للأطفال أو كبار السن؟</div>
        <div className={styles.faqAnswer}>
          نعم، المنصة مناسبة لكل الفئات العمرية والدخول إليها مجاني، وجزء من النصائح مخصص أيضًا لكبار السن والأطفال.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>هل ستتم إضافة ميزات جديدة مستقبلاً؟</div>
        <div className={styles.faqAnswer}>
          نعمل دائمًا على تطوير وتحديث Healthy Vision بإضافة مزايا وأقسام جديدة استجابة لملاحظات المستخدمين واحتياجاتهم.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>هل بإمكاني استخدام المعلومات في البحث أو التدريس أو التثقيف؟</div>
        <div className={styles.faqAnswer}>
          نعم، نرحب باستخدام المعلومات لأغراض توعوية أو تعليمية مع الإشارة إلى المصدر وعدم استخدامها لأهداف تجارية إلا بإذن كتابي.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>كيف أتواصل مع إدارة المنصة؟</div>
        <div className={styles.faqAnswer}>
          تواصل معنا سريعًا عبر البريد الإلكتروني: <a href="mailto:healtyvision@gmail.com">healtyvision@gmail.com</a>
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>كيف أبلغ عن محتوى خاطئ أو لدي اقتراح؟</div>
        <div className={styles.faqAnswer}>
          يمكنك التواصل معنا عبر البريد الإلكتروني واقتراح أي إضافة أو تصحيح، فريقنا يرحب بكل الملاحظات الهادفة لتحسين الخدمة.
        </div>
      </div>

      <div>
        <div className={styles.faqQuestion}>هل بيانات تصفحي ستستخدم في الإعلانات؟</div>
        <div className={styles.faqAnswer}>
          لا تُستخدم بيانات تصفحك لأي أغراض تسويقية أو إعلانية، المعلومات تجمع فقط لتحسين الأداء وحماية المستخدمين.
        </div>
      </div>

    </div>
  );
}

export default Faq;