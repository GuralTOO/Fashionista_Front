import { StatusBar } from "expo-status-bar";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import DresserScreen from "./DresserScreen";
import HomeScreen from "./HomeScreen";

function HomeScreenFunc() {
  return <HomeScreen />;
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Text style={{ color: "tomato", fontFamily: "monospace", fontSize: 22 }}>
        Settings!
      </Text>
    </View>
  );
}

function DresserScreenFunc() {
  return <DresserScreen props="yeah, no" />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "tv" : "tv";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog";
            } else if (route.name === "Dresser") {
              iconName = "shirt";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenFunc}
          options={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: "black",
              height: 50,
            },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Tab.Screen
          name="Dresser"
          component={DresserScreenFunc}
          options={{
            headerStyle: {
              backgroundColor: "#a5a5a5",
              height: 50,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: { color: "black" },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerStyle: {
              backgroundColor: "#f2f2f2",
              height: 50,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
