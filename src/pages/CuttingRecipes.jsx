import React from "react";
import styles from "../styles/Recipes.module.css";

const cuttingRecipes = [
  {
    id: 1,
    title: "بيض مسلوق مع سبانخ",
    img: "/images/بيض مسلوق مع سبانخ.jpg",
    benefit: "إفطار منخفض السعرات وغني بالبروتين",
    ingredients: ["2 بيض مسلوق", "حفنة سبانخ طازجة", "رشة فلفل أسود وليمون"],
    method: "اسلق البيض، قدّمه مع السبانخ ورشّ التوابل والليمون.",
    nutrition: { calories: 180, protein: 14, carbs: 3, fat: 12 }
  },
  {
    id: 2,
    title: "سلطة دجاج مشوي",
    img: "/images/سلطة دجاج مشوي.jpg",
    benefit: "وجبة غنية بالبروتين ومنخفضة الدهون",
    ingredients: ["صدر دجاج مشوي", "خس", "خيار", "طماطم", "زيت زيتون"],
    method: "قطع الدجاج والخضار، أضف زيت الزيتون وتوابل حسب الرغبة.",
    nutrition: { calories: 250, protein: 30, carbs: 10, fat: 8 }
  },
  {
    id: 3,
    title: "سمك مشوي مع بروكلي",
    img: "/images/سمك مشوي مع بروكلي.jpg",
    benefit: "غنية بالأوميجا-3 ومضادات الأكسدة",
    ingredients: ["سمك مشوي", "بروكلي مطهو على البخار", "ليمون"],
    method: "اشوي السمك وقدمه مع البروكلي ورشة ليمون.",
    nutrition: { calories: 220, protein: 28, carbs: 5, fat: 10 }
  },
  {
    id: 4,
    title: "زبادي يوناني مع توت",
    img: "/images/زبادي يوناني مع توت.jpg",
    benefit: "وجبة خفيفة مفيدة للهضم وغنية بالبروتين",
    ingredients: ["100غ زبادي يوناني", "حفنة ��وت طازج", "ملعقة عسل"],
    method: "اخلط المكونات وقدّمها مباشرة.",
    nutrition: { calories: 150, protein: 10, carbs: 15, fat: 5 }
  },
  {
    id: 5,
    title: "تونة مع خس وفلفل",
    img: "/images/تونة مع خس وفلفل.jpg",
    benefit: "وجبة غنية بالبروتين وسريعة التحضير",
    ingredients: ["علبة تونة", "خس", "فلفل ألوان", "ليمون"],
    method: "اخلط التونة مع الخضار ورشة ليمون.",
    nutrition: { calories: 200, protein: 25, carbs: 5, fat: 8 }
  },
  {
    id: 6,
    title: "شوربة خضار",
    img: "/images/شوربة خضار.jpg",
    benefit: "خفيفة، مغذية، وسهلة الهضم",
    ingredients: ["جزر", "كوسة", "بطاطس", "بقدونس", "مرق خضار"],
    method: "اسلق الخضار واطحنها للحصول على شوربة سلسة.",
    nutrition: { calories: 100, protein: 4, carbs: 20, fat: 2 }
  },
  {
    id: 7,
    title: "سلطة بيض مسلوق وخضار",
    img: "/images/سلطة بيض وخضار.jpg",
    benefit: "وجبة متوازنة تحتوي على بروتين وخضروات",
    ingredients: ["2 بيض مسلوق", "خس", "خيار", "طماطم", "زيت زيتون"],
    method: "قطع المكونات وامزجها مع البيض.",
    nutrition: { calories: 180, protein: 12, carbs: 8, fat: 10 }
  }
];

export default function CuttingRecipes() {
  return (
    <div className={styles.container}>
      <header className={styles.siteHeader}>
        <h1>وصفات صحية للتنشيف</h1>
        <p className={styles.subtitle}>
          وجبات منخفضة السعرات، عالية البروتين، للحفاظ على العضلات وحرق الدهون
        </p>
      </header>

      <main>
        {cuttingRecipes.map((recipe) => (
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
            <p>{recipe.method}</p>

            <div className={styles.nutrition}>
              <span>السعرات: {recipe.nutrition.calories}</span> |{" "}
              <span>بروتين: {recipe.nutrition.protein}غ</span> |{" "}
              <span>كارب: {recipe.nutrition.carbs}غ</span> |{" "}
              <span>دهون: {recipe.nutrition.fat}غ</span>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}