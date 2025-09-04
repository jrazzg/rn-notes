import { NotesContext } from '@/context/NotesContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useContext, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const ViewTaskScreen = () => {
    const router = useRouter();
    const notesContext = useContext(NotesContext)
    const { note } = useLocalSearchParams<{ note: string }>();
    const [task, setTask] = useState<string>(note)
    const [isChanged, setIsChanged] = useState<boolean>(false)


    if (!notesContext) throw new Error("Context not available")

    const { addNote } = notesContext

    const handleUpdate = () => {
        if (task.length > 0) {
            addNote(task)
            router.back()
        }
    }

    const handleTextChanged = () => {
        setTask
        setIsChanged(true)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>

            <TextInput
                style={styles.input}
                onChangeText={handleTextChanged}
                value={task}
                placeholder="Insert note"
                returnKeyType="done"
            />
            <TouchableOpacity style={styles.deleteButton}><Text style={[styles.buttonText, { color: 'red', marginBottom: 20, }]}>Delete Note</Text></TouchableOpacity>
            {
                isChanged && (<TouchableOpacity style={[styles.addButton]} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>)
            }
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
    deleteButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    input: {
        // flex: 1,
        // textAlignVertical: 'top',
        marginBottom: 20,
        // padding: 20,
        // backgroundColor: '#f0f0f0ff',
        // borderRadius: 10,
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