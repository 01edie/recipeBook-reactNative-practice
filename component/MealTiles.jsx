import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";


const MealTiles = ({ mealsDisplayed }) => {
  const navigation = useNavigation();
  const mealDetails = (id) => {
    navigation.navigate("Details", { id });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      {mealsDisplayed.map((e) => (
        <View key={e.id} style={styles.mealOverViewTile}>
          <Pressable
            // "#7e7f809d"
            android_ripple={{ color: "#7e7f809d" }}
            onPress={mealDetails.bind(this, e.id)}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          >
            <View style={styles.innerContainer}>
              <Image source={{ uri: e.imageUrl }} style={styles.imageStyle} />
              <View>
                <Text style={styles.title}>{e.title}</Text>
              </View>
              <View style={styles.subTitleContainer}>
                <Text style={styles.title}>
                  {e.duration}m 🥗 {e.complexity.toUpperCase()} 🥗{" "}
                  {e.affordability.toUpperCase()} 🥗{" "}
                  {e.isVegetarian ? "VEG" : "NON-VEG"}
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default MealTiles;

const styles = StyleSheet.create({
  root: {
    // backgroundColor: "#efe",
  },
  mealOverViewTile: {
    elevation: 8,
    margin: 8,
    marginHorizontal: 12,
    backgroundColor: "#a9fcfc",
    borderRadius: 8,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#efe",
  },
  imageStyle: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 3,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    marginVertical: 3,
  },
  subTitleContainer: {
    marginBottom: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
});
