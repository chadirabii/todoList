import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState([]);
  const [taskItems, setTaskItems] = useState([]);

  //get the current time

  const handleAddTask = () => {
    // keyboard.dismiss() tna77i l keyboard ba3d ma to9ros add
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    // ...taskItems is a spread operator that copies the taskItems array
    //   if (task.trim().length > 0) {
    //     setTaskItems([...taskItems, task]);
    //     setTask(null);
    //   } else ToastAndroid.show("Please enter a task", ToastAndroid.SHORT);
  };

  const taskCompleted = (index) => {
    let itemsCopy = [...taskItems];
    // splice() tfasa5 item ml array
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* todays tasks (title) */}
      <View style={styles.taskWrapper}>
        <Text style={styles.taskTitle}>Taday's tasks</Text>

        <View style={styles.items}></View>
        {/* tasks */}
        {/* key y5alli react ya3rf anaho item inzaad, tfass5 wela tbadel */}
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => taskCompleted(index)}>
              <Task text={item} />
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
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
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
  addText: {},
});
