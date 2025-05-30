import Link from "next/link";
import classes from "./page.module.scss";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

const GetMeals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

export const metadata = {
  title: "All meals",
  description: "Browse the Delicious meals.",
};

const Meals = async () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicios meals, created{" "}
          <span className={classes.highlight}>by you.</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading ...</p>}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
