import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useState } from "react";

type NotesContextType = {
    notesList: string[];
    addNote: (note: string) => void;
    removeNote: (index: number) => void;
    updateNote: (index: number, note: string) => void;
    loadNotes: () => void;
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

type NotesProviderProps = {
    children: ReactNode;
};

const NotesProvider = ({ children }: NotesProviderProps) => {
    const [notesList, setNotesList] = useState<string[]>([])
    const addNote = (note: string) => {
        setNotesList((prev) => {
            const updatedList = [...prev, note];
            storeData(updatedList);
            return updatedList;
        });
    }
    const removeNote = (index: number) => {
        // setNotesList((prev) => prev.filter((_, i) => i !== index));
        setNotesList((prev) => {
            const updatedList = prev.filter((_, i) => i !== index);
            storeData(updatedList);
            return updatedList;
        });
    }
    const updateNote = (index: number, newNote: string) => {
        setNotesList((prev) => {
            const updatedList = prev.map((oldNote, i) => (i === index ? newNote : oldNote));
            storeData(updatedList);
            return updatedList;
        });
    }

    const storeData = async (value: string[]) => {
        try {
            await AsyncStorage.setItem('notes_list', JSON.stringify(value));
        } catch (e) {
            console.log(e)
        }
    };
    // const storeData = async (value: string) => {
    //     try {
    //         const stringNotesList = await AsyncStorage.getItem('notes_list');
    //         const jsonNotesList = stringNotesList ? JSON.parse(stringNotesList) : [];
    //         const updatedList = [...jsonNotesList, value]
    //         await AsyncStorage.setItem('notes_list', JSON.stringify(updatedList));
    //     } catch (e) {
    //         console.log(e)
    //     }
    // };

    const loadNotes = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('notes_list');
            jsonValue != null ? setNotesList(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <NotesContext.Provider value={{ notesList, addNote, removeNote, updateNote, loadNotes }}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesProvider;