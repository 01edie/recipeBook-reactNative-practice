import React, { useLayoutEffect } from "react";
import MealTiles from "../component/MealTiles";
import { CATEGORIES, MEALS } from "../data/dummy-data";
 

const CategoryOverView = ({ route, navigation }) => {
  const catID = route.params.catID;
  const mealsDisplayed = MEALS.filter((meal) =>
    meal.categoryIds.includes(catID)
  );
  const catTitle = CATEGORIES.find((e)=>e.id===catID).title
  const mealDetails =(id)=>{
    navigation.navigate('Details',{id})
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:`${catTitle} Meals`
    })
  },[navigation])
  return (
    <MealTiles mealsDisplayed={mealsDisplayed} />
  );
};

export default CategoryOverView;


