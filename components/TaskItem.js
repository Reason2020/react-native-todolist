import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton';

const TaskItem = ({taskTitle, tasks, setTasks}) => {
    //remove task on pressing delete
    function removeTask() {
        const currentTasks = tasks.slice();
        const taskIndex = currentTasks.indexOf(taskTitle);
        currentTasks.splice(taskIndex, 1);
        setTasks(currentTasks);
    }
    
    return (
        <View style={styles.taskItem} >
            <Text>{taskTitle}</Text>
            <View style={{width: '30%'}} >
                <MyButton text="Remove" onPress={removeTask} />
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        backgroundColor: "#ddd",
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default TaskItem;