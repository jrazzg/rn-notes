import { NotesContext } from '@/context/NotesContext';
import { useRouter } from 'expo-router';
import { useContext, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const ViewTaskScreen = () => {
    const router = useRouter();
    const [task, setTask] = useState<string>('')
    const notesContext = useContext(NotesContext)

    if (!notesContext) throw new Error("Context not available")

    const { addNote } = notesContext

    const handleUpdate = () => {
        if (task.length > 0) {
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity><Text style={[styles.buttonText, {color: 'red', marginBottom: 20,}]}>Delete Note</Text></TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

export default ViewTaskScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffffff',
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        marginBottom: 20,
        padding: 20,
        // backgroundColor: '#f0f0f0ff',
        borderRadius: 10,
    },
    addButton: {
        backgroundColor: '#004dc0ff',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        width: 'auto',
    },
    buttonText: {
        color: '#fff',
    },
});