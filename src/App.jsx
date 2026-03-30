import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// ===== الصفحات الرئيسية =====
import Home from "./pages/Home";
import About from "./pages/About";
import MedicalTests from "./pages/MedicalTests";
import MedicalAdvice from "./pages/MedicalAdvice";
import MedicationReminder from "./pages/MedicationReminder";
import Gym from "./pages/Gym";
import SmartEmergencyRoom from "./pages/SmartEmergencyRoom";
import HealthAdministration from "./pages/HealthAdministration";

// ===== صفحات النصائح الطبية =====
import HeartTips from "./pages/HeartTips";
import BodyTips from "./pages/BodyTips";
import NutritionTips from "./pages/NutritionTips";
import MentalHealthTips from "./pages/MentalHealthTips";
import ExerciseTips from "./pages/ExerciseTips";
import HydrationTips from "./pages/HydrationTips";
import SleepTips from "./pages/SleepTips";
import SmokingTips from "./pages/SmokingTips";
import DiseasePreventionTips from "./pages/DiseasePreventionTips";
import HealthTechTips from "./pages/HealthTechTips";

// ===== صفحات Cutting (التنشيف) =====
import Cutting from "./pages/Cutting";
import CuttingProgram from "./pages/CuttingProgram";
import CuttingNutrition from "./pages/CuttingNutrition";
import CuttingExercises from "./pages/CuttingExercises";
import CuttingRecipes from "./pages/CuttingRecipes";

// ===== صفحات Bulking (التضخيم) =====
import Bulking from "./pages/Bulking";
import BulkingProgram from "./pages/BulkingProgram";
import BulkingNutrition from "./pages/BulkingNutrition";
import BulkingExercises from "./pages/BulkingExercises";
import BulkingRecipes from "./pages/BulkingRecipes";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* ===== الصفحات الرئيسية ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/medical-tests" element={<MedicalTests />} />
        <Route path="/medical-advice" element={<MedicalAdvice />} />
        <Route path="/medication-reminder" element={<MedicationReminder />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/emergency" element={<SmartEmergencyRoom />} />
        <Route path="/health-administration" element={<HealthAdministration />} />

        {/* ===== صفحات النصائح الطبية ===== */}
        <Route path="/tips/heart" element={<HeartTips />} />
        <Route path="/tips/body" element={<BodyTips />} />
        <Route path="/tips/nutrition" element={<NutritionTips />} />
        <Route path="/tips/mental-health" element={<MentalHealthTips />} />
        <Route path="/tips/exercise" element={<ExerciseTips />} />
        <Route path="/tips/hydration" element={<HydrationTips />} />
        <Route path="/tips/sleep" element={<SleepTips />} />
        <Route path="/tips/smoking" element={<SmokingTips />} />
        <Route path="/tips/disease-prevention" element={<DiseasePreventionTips />} />
        <Route path="/tips/health-tech" element={<HealthTechTips />} />

        {/* ===== صفحات Cutting (التنشيف) ===== */}
        <Route path="/cutting" element={<Cutting />} />
        <Route path="/cutting/program" element={<CuttingProgram />} />
        <Route path="/cutting/nutrition" element={<CuttingNutrition />} />
        <Route path="/cutting/exercises" element={<CuttingExercises />} />
        <Route path="/cutting/recipes" element={<CuttingRecipes />} />

        {/* ===== صفحات Bulking (التضخيم) ===== */}
        <Route path="/bulking" element={<Bulking />} />
        <Route path="/bulking/program" element={<BulkingProgram />} />
        <Route path="/bulking/nutrition" element={<BulkingNutrition />} />
        <Route path="/bulking/exercises" element={<BulkingExercises />} />
        <Route path="/bulking/recipes" element={<BulkingRecipes />} />
      </Route>
    </Routes>
  );
}