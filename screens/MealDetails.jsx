import React, { useLayoutEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../component/IconButton";
import { MEALS } from "../data/dummy-data";
import { favoritesData, addID, removeID } from "../store/favoritesSlice";

const MealDetails = ({ route, navigation }) => {
  // const [mealIsFav, setMealIsFav]= useState()
  const dispatch = useDispatch();
  const favID = useSelector(favoritesData);
  
  const id = route.params.id;

  const currentMeal = MEALS.find((meal) => meal.id === id);
  const mealIsFav = favID.includes(id);

  function headerButtonHandler() {

    if (mealIsFav) {
      dispatch(removeID(id));
      return;
    } else {
      dispatch(addID(id));
    }
   
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: currentMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="orange"
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation,headerButtonHandler]);
  return (
    <ScrollView>
      <Image source={{ uri: currentMeal.imageUrl }} style={styles.imageStyle} />
      {/* ingredients */}
      <View style={styles.titleView}>
        <Text style={styles.title}> 🥔 Ingredients 🍅 </Text>
      </View>
      <View style={styles.subTitleContainer}>
        {currentMeal.ingredients.map((e) => (
          <View key={e}>
            <Text style={styles.subTitle}>{e} </Text>
          </View>
        ))}
      </View>
      {/* steps */}
      <View style={styles.titleView}>
        <Text style={styles.title}>Steps 🍳</Text>
      </View>
      <View style={styles.subTitleContainer}>
        {currentMeal.steps.map((e) => (
          <View key={e}>
            <Text style={styles.subTitle}>{e} </Text>
          </View>
        ))}
      </View>
      {/* details */}
      <View style={styles.titleView}>
        <Text style={styles.title}>Details 📂</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Name: {currentMeal.title} </Text>
        <Text style={styles.detailsTitle}>
          Complexity: {currentMeal.complexity}{" "}
        </Text>
        <Text style={styles.detailsTitle}>
          Duration: {currentMeal.duration}minutes{" "}
        </Text>
        <Text style={styles.detailsTitle}>
          Affordability: {currentMeal.affordability}
        </Text>
        <Text style={styles.detailsTitle}>
          Vegetarian Meal: {currentMeal.isVegetarian ? "Yes" : "No"}
        </Text>
        <Text style={styles.detailsTitle}>
          Vegan Meal: {currentMeal.isVegan ? "Yes" : "No"}
        </Text>
        <Text style={styles.detailsTitle}>
          Gluten Free: {currentMeal.isGlutenFree ? "Yes" : "No"}
        </Text>
        <Text style={styles.detailsTitle}>
          Lactose Free: {currentMeal.isLactoseFree ? "Yes" : "No"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  imageStyle: {
    height: 350,
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  titleView: {
    alignItems: "center",
    marginTop: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderRadius: 4,
    fontStyle: "italic",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  subTitleContainer: {
    marginBottom: 16,
    paddingHorizontal: 60,
  },
  detailsContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  detailsTitle: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
