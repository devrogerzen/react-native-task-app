import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalDelete = ({
  isModalVisible,
  setIsModalVisible,
  taskSelected,
  deleteTask,
}) => {
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>🗑️ Eliminar Tarea</Text>
          <Text style={styles.modalText}>
            ¿Estás seguro de eliminar esta tarea?
          </Text>
          <Text style={styles.taskText}>"{taskSelected.value}"</Text>
          
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancelar"
                color="#666"
                onPress={() => setIsModalVisible(!isModalVisible)}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Eliminar"
                color="#ff4757"
                onPress={() => deleteTask(taskSelected.id)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
  },
  taskText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 15,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
});