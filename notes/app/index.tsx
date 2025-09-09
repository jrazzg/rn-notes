import Note from "@/components/Notes";
import { NotesContext } from "@/context/NotesContext";
import { useRouter, } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
    const router = useRouter();
    const notesContext = useContext(NotesContext);

    if (!notesContext) throw new Error("Context not available");
    const { notesList, loadNotes } = notesContext;

    const [searchQuery, setSearchQuery] = useState<string>('');
    const filteredNotes = notesList.filter(note =>
        note.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        loadNotes();
    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Search'
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            {
                filteredNotes.map((note, index) => <Note key={index} note={note} id={index} />)
            }
            <Pressable style={styles.addButton} onPress={() => router.navigate('/AddTask')}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffffff',
        flex: 1,
        padding: 20,
    },
    addButton: {
        backgroundColor: '#004dc0ff',
        width: 60,
        aspectRatio: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 50,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 23,
    },
    input: {
        backgroundColor: '#ecececff',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 25,
    },
});