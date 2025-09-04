import { NotesContext } from '@/context/NotesContext';
import { useRouter } from 'expo-router';
import { useContext, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const AddTaskScreen = () => {
    const router = useRouter();
    const [task, setTask] = useState<string>('')
    const notesContext = useContext(NotesContext)

    if (!notesContext) throw new Error("Context not available")

    const { addNote } = notesContext

    const handleSubmit = () => {
        if (task.length > 0){
            addNote(task)
            router.back()
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>

            <TextInput
                style={styles.input}
                onChangeText={setTask}
                value={task}
                placeholder="Insert note"
                returnKeyType="done"
            />
            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
        marginBottom: 100,
    },
    buttonText: {
        color: '#fff',
    },
});