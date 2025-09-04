import { createContext } from "react";

type NotesContextType = {
  notesList: string[];
  addNote: (note: string) => void;
  removeNote: (index: number) => void;
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);