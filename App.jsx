import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});

  //console.log("Valor de userInput", userInput);
  //console.log("Valor de tasksList", tasksList);
  //console.log("Valor de taskSelected", taskSelected);

  const handleAddTask = () => {
    if (userInput != "") {
      setTasksList([...tasksList, { id: Math.random(), value: userInput }]),
        setUserInput("");
    }
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
    setIsModalVisible(!isModalVisible);
  };

  const handleDeleteTask = (item) => {
    setIsModalVisible(!isModalVisible);
    setTaskSelected(item);
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text>{item.value}</Text>
      {/* <Button title="X" onPress={() => deleteTask(item.id)} /> */}
      <Button title="X" onPress={() => handleDeleteTask(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>App de Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userInput}
          onChangeText={(text) => setUserInput(text)}
          value={userInput}
        />
        <Button title="+" onPress={handleAddTask} />
      </View>
      <View style={styles.taskContainer}>
        {/* {tasksList.map((task) => (
          <Text key={task.id}>
            {task.value}
          </Text>
        ))}  */}
        <FlatList
          data={tasksList}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <Text>Estas seguro de eliminar? {taskSelected.value} </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancelar"
            color="ccc"
            onPress={() => setIsModalVisible(!isModalVisible)}
          />
          <Button
            title="Si, Eliminar"
            color="red"
            onPress={() => deleteTask(taskSelected.id)}
          />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  userInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
  },
  taskContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
