import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealTiles from "../component/MealTiles";
import { MEALS } from "../data/dummy-data";
import { favoritesData } from "../store/favoritesSlice";

const Favorites = () => {
  const favIds = useSelector(favoritesData);
  const mealsDisplayed = MEALS.filter((meal) => favIds?.includes(meal.id));
  if (!favIds.length) {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          Currently you don't have any recipe added in favorites.You can add by
          tapping in star icon in the top of recipes.
        </Text>
      </View>
    );
  }
  return <MealTiles mealsDisplayed={mealsDisplayed} />;
};

export default Favorites;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color:'gray'
  },
});
