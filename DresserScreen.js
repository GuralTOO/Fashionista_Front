import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createMaterialTopTabNavigator();

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={{ padding: 15 }}>
      <Image style={[styles.imageSize]} source={{ uri: item }} />
    </TouchableOpacity>
  );
};

function GeneralScreenFunc(props) {
  const miData = props.route.params.data;
  return (
    <View style={{ flex: 2, backgroundColor: "#a5a5a5", paddingTop: 10 }}>
      <FlatList
        data={miData.data}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wardrobeData: [
        {
          level: 1,
          data: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar5.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
          ],
        },
        {
          level: 2,
          data: [
            "https://bootdey.com/img/Content/avatar/avatar5.png",
            "https://bootdey.com/img/Content/avatar/avatar5.png",
            "https://bootdey.com/img/Content/avatar/avatar5.png",
            "https://bootdey.com/img/Content/avatar/avatar5.png",
            "https://bootdey.com/img/Content/avatar/avatar5.png",
            "https://bootdey.com/img/Content/avatar/avatar5.png",
          ],
        },
        {
          level: 3,
          data: [
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
          ],
        },
        {
          level: 4,
          data: [
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
            "https://bootdey.com/img/Content/avatar/avatar6.png",
          ],
        },
        {
          level: 5,
          data: [
            "https://bootdey.com/img/Content/avatar/avatar1.png",
            "https://bootdey.com/img/Content/avatar/avatar1.png",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Tab.Navigator
          initialRouteName="Lvl 3"
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarLabelStyle: {
              fontSize: 14,
              color: "tomato",
              fontFamily: "monospace",
            },
            tabBarStyle: { backgroundColor: "#a5a5a5" },
          }}
        >
          <Tab.Screen
            name="Lvl 1"
            component={GeneralScreenFunc}
            initialParams={{ data: this.state.wardrobeData[0], me: "yes" }}
          />
          <Tab.Screen
            name="Lvl 2"
            component={GeneralScreenFunc}
            initialParams={{ data: this.state.wardrobeData[1], me: "yes" }}
          />
          <Tab.Screen
            name="Lvl 3"
            component={GeneralScreenFunc}
            initialParams={{ data: this.state.wardrobeData[2], me: "yes" }}
          />
          <Tab.Screen
            name="Lvl 4"
            component={GeneralScreenFunc}
            initialParams={{ data: this.state.wardrobeData[3], me: "yes" }}
          />
          <Tab.Screen
            name="Lvl 5"
            component={GeneralScreenFunc}
            initialParams={{ data: this.state.wardrobeData[4], me: "yes" }}
          />
        </Tab.Navigator>
        <TouchableOpacity style={styles.TouchableOpacityStyle}>
          <Ionicons name={"add-circle-outline"} size={60} color={"tomato"} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, paddingTop: 5, backgroundColor: "#a5a5a5" },
  container: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 80,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },

  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  imageSize: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 22,
    color: "white",
    fontFamily: "monospace",
  },
  TouchableOpacityStyle: {
    //Here is the trick
    position: "absolute",
    width: "14%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    right: "43%",
    bottom: 30,
    backgroundColor: "transparent",
  },
});
