import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NoteProps = {
  note: string;
};

const Note = ({ note }: NoteProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{note}</Text>
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
    },
})