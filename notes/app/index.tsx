import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>

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
});