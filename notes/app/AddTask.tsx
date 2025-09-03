import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AddTaskScreen = () => {
    const [task, setTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleSubmit = () => {
        if (task.length > 0){
            setTaskList([...taskList, task])
            setTask('')
            console.log(taskList)
        }
        else{
            console.log('input is empty')
        }
    }
    const handleReset = () => {
        setTaskList([])
        setTask('')
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTask}
                    value={task}
                    placeholder="Insert note"
                    returnKeyType="done"
                />
                <Text>{taskList.join('\n')}</Text>
                <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default AddTaskScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffffff',
        flex: 1,
        padding: 20,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#f0f0f0ff',
        borderRadius: 10,
    },
    addButton: {
        backgroundColor: '#004dc0ff',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
    },
});