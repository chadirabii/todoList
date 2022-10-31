import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Task from "./components/Task";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue) {
      setTasks((prevState) => [
        { date: Date.now(), text: inputValue },
        ...prevState,
      ]);
      setInputValue("");
      // keyboard.dismiss() tna77i l keyboard ba3d ma to9ros add
      Keyboard.dismiss();
    } else {
      Platform.OS === "android"
        ? ToastAndroid.show("Please enter a task", ToastAndroid.SHORT)
        : Alert.alert("Error", "Please enter a task");
    }
  };

  return (
    <>
      {/* todays tasks (title) */}
      <View style={styles.taskWrapper}>
        <Text style={styles.taskTitle}>Today's tasks</Text>

        <View style={styles.items}></View>
        {/* tasks */}
        {tasks.map((item, index) => {
          return (
            <TouchableOpacity>
              <Task item={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <TouchableOpacity style={styles.icons}>
              <Entypo name="add-to-list" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 320,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  icons: {
    opacity: 0.6,
  },
});
