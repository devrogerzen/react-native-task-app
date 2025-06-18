import { Button, StyleSheet, TextInput, View } from "react-native";

const TaskInput = ({ userInput, setUserInput, handleAddTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.userInput}
        placeholder="Escribe una nueva tarea..."
        placeholderTextColor="#999"
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" color="#4834d4" onPress={handleAddTask} />
      </View>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  userInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});