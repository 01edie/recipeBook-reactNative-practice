import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function CategoryTile({onPress, title, color}) {
  return (
    <View style={[styles.cardTileContainer, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#000" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.cardTile}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
   
    cardTileContainer: {
      flex: 1,
      backgroundColor: "green",
      height: 150,
      margin: 14,
      elevation: 12,
      borderRadius: 6,
      overflow: "hidden",
    },
    button: {
      flex: 1,
    },
    cardTile: {
      flex: 1,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "#000",
      fontWeight: "bold",
    },
    buttonPressed: {
      opacity: 0.5,
    },
  });