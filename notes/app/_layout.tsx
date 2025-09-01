import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}}/>
      <Stack.Screen name="AddTask" options={{title: 'Add Task'}}/>
    </Stack>
  );
}
