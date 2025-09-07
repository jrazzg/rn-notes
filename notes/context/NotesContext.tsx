import { createContext, ReactNode, useState } from "react";

type NotesContextType = {
    notesList: string[];
    addNote: (note: string) => void;
    removeNote: (index: number) => void;
    updateNote: (index: number, note: string) => void;
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

type NotesProviderProps = {
    children: ReactNode;
};

const NotesProvider = ({children}: NotesProviderProps) => {
    const [notesList, setNotesList] = useState<string[]>(['hilaw', 'kabao'])
    const addNote = (note: string) => setNotesList((prev) => [...prev, note]);
    const removeNote = (index: number) =>
        setNotesList((prev) => prev.filter((_, i) => i !== index));
    const updateNote = (index: number, newNote: string) =>
        setNotesList((prev) => prev.map((oldNote, i) => (i === index ? newNote : oldNote)));

    return (
        <NotesContext.Provider value={{ notesList, addNote, removeNote, updateNote }}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesProvider;