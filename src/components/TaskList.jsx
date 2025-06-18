import { FlatList, StyleSheet, Text, View } from "react-native";

const TaskList = ({ tasksList, renderTaskItem }) => {
  return (
    <View style={styles.taskContainer}>
      {tasksList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>🎯 No tienes tareas pendientes</Text>
          <Text style={styles.emptySubtext}>¡Agrega una nueva tarea para comenzar!</Text>
        </View>
      ) : (
        <View style={styles.listWrapper}>
          <Text style={styles.listTitle}>📋 Tus Tareas ({tasksList.length})</Text>
          <FlatList
            data={tasksList}
            renderItem={renderTaskItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      )}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
  separator: {
    height: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  emptyText: {
    fontSize: 20,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },
  emptySubtext: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    lineHeight: 22,
  },
});