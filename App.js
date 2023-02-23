import "react-native-gesture-handler";
import { Provider } from 'react-redux'
import { StatusBar } from "expo-status-bar";
import { Easing, StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import StartScreen from "./screens/StartScreen";
import CategoryOverView from "./screens/CategoryOverView";
import MealDetails from "./screens/MealDetails";
import Favorites from "./screens/Favorites";
import { store } from "./store";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const config = {
  animation: "timing",
  config: {
    duration: 150,
    easing: Easing.linear,
  },
};
function Categories() {
  return (
   
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={StartScreen} />
      <Stack.Screen
        name="OverView"
        options={{ title: "Meals" }}
        component={CategoryOverView}
      />
      <Stack.Screen
        name="Details"
        options={{ title: "Meal Details" }}
        component={MealDetails}
      />
    </Stack.Navigator>
  );
}
function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Favorites-Home"
        options={{ title: "Favorites" }}
        component={Favorites}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
       <Provider store={store}>
      <StatusBar style="dark07" />
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#000"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad",padding:0,margin:0, }}
          labeled={false}
          // compact
          // shifting
          // style={{backgroundColor:'yellow'}}
          
        >
          <Tab.Screen
            name="Categories"
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="category" size={26} color={color} />
              ),
              // tabBarBadge:true,
              // tabBarColor:'green',
              
            }}
            
            component={Categories}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="favorite" size={26} color={color} />
              ),
              // tabBarColor:'orange',

            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
