import React from "react";
import styles from "../styles/Recipes.module.css";

const bulkingRecipes = [
  {
    id: 1,
    title: "شوفان بالحليب والبروتين",
    img: "/images/شوفان بالحليب.webp",
    benefit: "إفطار غني بالبروتين والطاقة",
    ingredients: ["½ كوب شوفان", "1 كوب حليب قليل الدسم", "½ موزة", "ملعقة بروتين بودرة", "ملعقة عسل"],
    preparation: "اسلق الشوفان مع الحليب 5 دقائق، أضف الموز والبروتين والعسل.",
    nutrition: "السعرات: 350 | بروتين: 25غ | كارب: 50غ | دهون: 7غ"
  },
  {
    id: 2,
    title: "سلطة الدجاج والخضار",
    img: "/images/سلطة دجاج وخضار.jpeg",
    benefit: "غنية بالبروتين وقليلة الدهون",
    ingredients: ["100غ صدر دجاج مشوي", "خس، طماطم، خيار", "ملعقة زيت زيتون", "ليمون"],
    preparation: "قطع الدجاج والخضار، أضف الزيت وعصير الليمون وقلّب جيدًا.",
    nutrition: "السعرات: 250 | بروتين: 30غ | كارب: 10غ | دهون: 8غ"
  },
  {
    id: 3,
    title: "سمك مشوي مع الأرز البني",
    img: "/images/سمك مشوي مع الأرز.jpeg",
    benefit: "وجبة عالية البروتين وغنية بالأوميغا-3",
    ingredients: ["150غ سمك مشوي", "½ كوب أرز بني", "خضار مشوية", "رشة توابل"],
    preparation: "اشوي السمك مع التوابل، قدمه مع الأرز والخضار.",
    nutrition: "السعرات: 400 | بروتين: 35غ | كارب: 40غ | دهون: 10غ"
  },
  {
    id: 4,
    title: "توست الأفوكادو والبيض",
    img: "/images/توست أفوكادو.jpg",
    benefit: "إفطار متوازن بالبروتين والدهون الصحية",
    ingredients: ["شريحة توست كامل الحبوب", "½ أفوكادو مهروس", "بيضة مسلوقة", "رشة ملح وفلفل"],
    preparation: "ضع الأفوكادو على التوست، أضف البيضة المسلوقة ورش الملح والفلفل.",
    nutrition: "السعرات: 300 | بروتين: 12غ | كارب: 28غ | دهون: 15غ"
  },
  {
    id: 5,
    title: "معكرونة بالتونة",
    img: "/images/معكرونة التونة.jpg",
    benefit: "غنية بالبروتين وسهلة التحضير للغداء",
    ingredients: ["100غ معكرونة", "علبة تونة مصفاة", "خضار حسب الرغبة", "ملعقة زيت زيتون"],
    preparation: "اسلق المعكرونة، أضف التونة والخضار والملح وزيت الزيتون.",
    nutrition: "السعرات: 450 | بروتين: 30غ | كارب: 55غ | دهون: 12غ"
  },
  {
    id: 6,
    title: "زبادي بالمكسرات",
    img: "/images/زبادي بالمكسرات.jpg",
    benefit: "وجبة خفيفة غنية بالبروتين والدهون الصحية",
    ingredients: ["1 كوب زبادي يوناني", "حفنة مكسرات", "ملعقة عسل"],
    preparation: "ضع المكسرات على الزبادي وأضف العسل للنكهة.",
    nutrition: "السعرات: 220 | بروتين: 15غ | كارب: 20غ | دهون: 10غ"
  }
];

export default function BulkingRecipes() {
  return (
    <div className={styles.container}>
      <header className={styles.siteHeader}>
        <h1>وصفات صحية للتضخيم</h1>
        <p className={styles.subtitle}>
          وجبات متوازنة وسهلة التحضير للتضخيم أو الحفاظ على الصحة
        </p>
      </header>

      <main>
        {bulkingRecipes.map((recipe) => (
          <section key={recipe.id} className={styles.recipe}>
            <img
              src={recipe.img}
              alt={recipe.title}
              className={styles.recipeImg}
              loading="lazy"
            />
            <h2>{recipe.title}</h2>
            <p className={styles.benefit}>{recipe.benefit}</p>

            <h3>المكونات:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>

            <h3>طريقة التحضير:</h3>
            <p>{recipe.preparation}</p>

            <div className={styles.nutrition}>{recipe.nutrition}</div>
          </section>
        ))}
      </main>
    </div>
  );
}