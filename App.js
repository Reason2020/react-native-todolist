import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, TextInput } from 'react-native';
import MyButton from './components/MyButton';
import TaskItem from './components/TaskItem';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  
  function onButtonPress() {
    setModalVisible(true);
  }

  function toggleModalVisibility() {
    setModalVisible(!modalVisible);
  }

  function addTask() {
    const tasksCopy = tasks.slice();

    if (task === '') {
      alert('Enter a Task');
    } else {
      tasksCopy.push(task);
      setTasks(tasksCopy);
      toggleModalVisibility();
      setTask('');
    }
  }

  return (
    // Main Container
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View>
        <Text style={styles.introText}>Welcome to the TodoList App</Text>
        <MyButton text='Add New Task' onPress={toggleModalVisibility} />

        {/* Tasks List */}
        <View style={styles.tasksList} >
          {tasks && tasks.map((taskItem, id) => (
            <TaskItem taskTitle={taskItem} key={id} tasks={tasks} setTasks={setTasks} />
          ))}
        </View>
        
        {/* If modalVisible is true, return a modal */}
        {modalVisible && (
          <Modal animationType='slide'>
            <View style={styles.modal} >
              <TextInput placeholder='Add New Task Here...' value={task} style={styles.input} onChangeText={text => setTask(text)} />
              <View style={styles.flexButtons}>
                <MyButton text='Cancel' onPress={toggleModalVisibility} />
                <MyButton text='Add Task' onPress={addTask} />
              </View>
            </View>
          </Modal>
        )}
      </View>
    </ScrollView>    
  );
}

//styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    padding: 15
  },
  introText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#357da1',
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    padding: 10,
    gap: 10,
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#ddd',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15
  },
  tasksList: {
    marginTop: 25,
    gap: 10,
  },
  flexButtons: {
    gap: 10
  }
})

