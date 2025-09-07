import NotesProvider from "@/context/NotesContext";
import { Stack } from "expo-router";

export default function RootLayout() {
    
    return (
        <NotesProvider>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="AddTask" options={{ title: 'Add Task' }} />
            </Stack>
        </NotesProvider>
    );
}
