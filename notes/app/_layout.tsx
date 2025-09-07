import { NotesContext } from "@/context/NotesContext";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
    const [notesList, setNotesList] = useState<string[]>(['hilaw', 'kabao'])
    const addNote = (note: string) => setNotesList((prev) => [...prev, note]);
    const removeNote = (index: number) =>
        setNotesList((prev) => prev.filter((_, i) => i !== index));
    const updateNote = (index: number, newNote: string) =>
        setNotesList((prev) => prev.map((oldNote, i) => (i === index ? newNote : oldNote)));

    return (
        <NotesContext.Provider value={{ notesList, addNote, removeNote, updateNote }}>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="AddTask" options={{ title: 'Add Task' }} />
            </Stack>
        </NotesContext.Provider>
    );
}
