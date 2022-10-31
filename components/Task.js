import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { Ionicons } from "@expo/vector-icons";

const Task = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}>
          <Ionicons
            style={styles.Icon}
            name="trash-outline"
            size={20}
            color="#021C2C"
          />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>

        <View style={styles.date}>
          <Text>
            {formatDistanceToNowStrict(item.date, { includeSeconds: true })}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#a8dadc",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",

    width: "80%",
    // flexwrap property allows the text to wrap to the next line
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },

  date: {
    position: "absolute",
    opacity: 0.4,
    marginLeft: 283,
  },
  Icon: {
    position: "absolute",
    left: 2,
    opacity: 1,
  },
});
export default Task;
