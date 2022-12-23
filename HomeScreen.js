import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
} from "react-native";

const SectionHeader = ({ section }) => {
  return (
    <View
      style={{
        alignSelf: "center",
        backgroundColor: "#1d1d1d",
        width: "100%",
        padding: 15,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text style={{ color: "white", fontSize: 22, fontFamily: "monospace" }}>
        {section.title}
      </Text>
      <Text style={{ color: "tomato", fontSize: 22, fontFamily: "monospace" }}>
        {" "}
        C° {section.temperature.toString()}
      </Text>
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        { alignSelf: "center", backgroundColor: "#1d1d1d" },
      ]}
    >
      {item.levels.map((level) => {
        return (
          <View style={{ flexDirection: "row", padding: 5 }}>
            {level.links.map((image) => {
              return (
                <View style={{ padding: 5, alignSelf: "center" }}>
                  <Image style={[styles.imageSize]} source={{ uri: image }} />
                </View>
              );
            })}
          </View>
        );
      })}
      <View style={{ backgroundColor: "black", height: 20 }}></View>
    </TouchableOpacity>
  );
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitData: [
        {
          title: "Outfit 4",
          temperature: 15,
          data: [
            {
              levels: [
                {
                  level: 1,
                  links: ["https://bootdey.com/img/Content/avatar/avatar6.png"],
                },
                {
                  level: 2,
                  links: [
                    "https://bootdey.com/img/Content/avatar/avatar1.png",
                    "https://bootdey.com/img/Content/avatar/avatar2.png",
                  ],
                },
                {
                  level: 3,
                  links: ["https://bootdey.com/img/Content/avatar/avatar4.png"],
                },
              ],
            },
          ],
        },
        {
          title: "Outfit 3",
          temperature: 10,
          data: [
            {
              levels: [
                {
                  level: 1,
                  links: [
                    "https://bootdey.com/img/Content/avatar/avatar2.png",
                    "https://bootdey.com/img/Content/avatar/avatar3.png",
                  ],
                },
                {
                  level: 2,
                  links: [
                    "https://bootdey.com/img/Content/avatar/avatar4.png",
                    "https://bootdey.com/img/Content/avatar/avatar4.png",
                    "https://bootdey.com/img/Content/avatar/avatar4.png",
                    "https://bootdey.com/img/Content/avatar/avatar4.png",
                  ],
                },
                {
                  level: 3,
                  links: ["https://bootdey.com/img/Content/avatar/avatar1.png"],
                },
                {
                  level: 4,
                  links: [
                    "https://bootdey.com/img/Content/avatar/avatar3.png",
                    "https://bootdey.com/img/Content/avatar/avatar3.png",
                  ],
                },
                {
                  level: 5,
                  links: ["https://bootdey.com/img/Content/avatar/avatar6.png"],
                },
              ],
            },
          ],
        },
        {
          title: "Outfit 2",
          temperature: 17,
          data: [
            {
              levels: [
                {
                  level: 1,
                  links: ["https://bootdey.com/img/Content/avatar/avatar5.png"],
                },
                {
                  level: 2,
                  links: [
                    "https://bootdey.com/img/Content/avatar/avatar2.png",
                    "https://bootdey.com/img/Content/avatar/avatar3.png",
                  ],
                },
                {
                  level: 3,
                  links: [
                    "https://bootdey.com/img/Content/avatar/avatar6.png",
                    "https://bootdey.com/img/Content/avatar/avatar6.png",
                  ],
                },
                {
                  level: 4,
                  links: ["https://bootdey.com/img/Content/avatar/avatar8.png"],
                },
              ],
            },
          ],
        },
        {
          title: "Outfit 1",
          temperature: 25,
          data: [
            {
              levels: [
                {
                  level: 1,
                  links: ["https://bootdey.com/img/Content/avatar/avatar1.png"],
                },
                {
                  level: 2,
                  links: ["https://bootdey.com/img/Content/avatar/avatar3.png"],
                },
                {
                  level: 3,
                  links: ["https://bootdey.com/img/Content/avatar/avatar2.png"],
                },
              ],
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.outfitData}
          renderSectionHeader={({ section }) => (
            <SectionHeader section={section} />
          )}
          renderItem={({ item }) => <Item item={item} />}
          renderSectionFooter={() => (
            <View style={{ backgroundColor: "black", height: 40 }}></View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  root: {
    marginTop: 20,
    padding: 10,
  },
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: "black",
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  imageSize: {
    width: 60,
    height: 60,
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 22,
    // color: "white",
    fontFamily: "monospace",
  },
});
