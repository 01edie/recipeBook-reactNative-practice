import React from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import CategoryTile from "../component/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

function StartScreen({navigation}) {
  const renderCategoriesTile = (dataItem) => {
    const catTileHandler =()=>{
      navigation.navigate('OverView',{
        catID: dataItem.item.id
      })
    }
    return (
      <CategoryTile
        onPress={catTileHandler}
        title={dataItem.item.title}
        color={dataItem.item.color}
      />
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesTile}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  root: {
    // flex:1,
  },
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
    color: "#fff",
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
