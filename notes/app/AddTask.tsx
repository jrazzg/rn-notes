import { NotesContext } from '@/context/NotesContext';
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AddTaskScreen = () => {
    const [task, setTask] = useState<string>('')
    const notesContext = useContext(NotesContext)
    
    if (!notesContext) throw new Error("Context not available")
    
    const {notesList, addNote} = notesContext

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text>{notesList}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTask}
                    value={task}
                    placeholder="Insert note"
                    returnKeyType="done"
                />
                <TouchableOpacity style={styles.addButton} onPress={() => addNote(task)}>
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