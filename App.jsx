import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import TaskInput from "./src/components/TaskInput";
import TaskList from "./src/components/TaskList";
import ModalDelete from "./src/components/ModalDelete";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});

  //console.log("Valor de userInput", userInput);
  //console.log("Valor de tasksList", tasksList);
  //console.log("Valor de taskSelected", taskSelected);

  const handleAddTask = () => {
    if (userInput !== "") {
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
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{item.value}</Text>
    <View style={styles.deleteButton}>
      <Button title="✕" color="#ff4757" onPress={() => handleDeleteTask(item)} />
    </View>
  </View>
);

 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📝 Mis Tareas</Text>
      </View>
      
      <View style={styles.content}>
        <TaskInput
          userInput={userInput}
          setUserInput={setUserInput}
          handleAddTask={handleAddTask}
        />
        <TaskList tasksList={tasksList} renderTaskItem={renderTaskItem} />
      </View>

      <ModalDelete
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4834d4",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#4834d4",
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    color: "#333",
    marginRight: 10,
  },
  deleteButton: {
    borderRadius: 15,
    overflow: "hidden",
    minWidth: 35,
  },
});
