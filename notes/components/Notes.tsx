import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NoteProps = {
    note: string;
};

const Note = ({ note }: NoteProps) => {
    const router = useRouter()
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push({pathname: '/ViewTask', params: {note}})}>
            <Text style={styles.noteText}>{note}</Text>
        </TouchableOpacity>
    );
};

export default Note;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dadadaff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    noteText: {
        flex: 1,
        paddingRight: 20,
    },
    editText: {
        color: '#646464ff',
        fontWeight: '700',
    },
})