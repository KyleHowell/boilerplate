import { createSlice } from '@reduxjs/toolkit';

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: {
    lists: [{name: 'test', notes: ['taco', 'burrito']}, {name: 'test2', notes: []}],
  },
  reducers: {
    addList: (state, action) => {
      state.lists.push({name: action.payload.name, notes: []});
    },
    editList: (state, action) => {
      const list = state.lists.find(l => l.name === action.payload.oldName);
      list.name = action.payload.newName;
    },
    deleteList: (state, action) => {
      const listIndex = state.lists.findIndex(l => l.name === action.payload.name);
      state.lists.splice(listIndex, 1);
    },
    addNote: (state, action) => {
      const list = state.lists.find(l => l.name === action.payload.listName);
      list.notes.push(action.payload.note);
    },
    editNote: (state, action) => {
      const list = state.lists.find(l => l.name === action.payload.listName);
      const noteIndex = list.notes.findIndex(n => n === action.payload.oldNote);
      list.notes[noteIndex] = action.payload.newNote;
    },
    deleteNote: (state, action) => {
      const list = state.lists.find(l => l.name === action.payload.listName);
      const noteIndex = list.notes.findIndex(n => n === action.payload.note);
      list.notes.splice(noteIndex, 1);
    },
    // moveNote: (state, action) => {
    //   const oldList = state.lists.find(l => l.name === action.payload.oldList);
    //   const oldNoteIndex = oldList.notes.findIndex(n => n === action.payload.note);
    //   // remove the note from the old list
    //   oldList.notes.splice(oldNoteIndex, 1);
    //   const newList = state.lists.find(l => l.name === action.payload.newList);
    //   // add note to the new list
    //   newList.notes.push(action.payload.note);
    // },
  },
});

export const { addList, editList, deleteList, addNote, editNote, deleteNote } = kanbanSlice.actions;

export const selectLists = state => state.kanban.lists;

export default kanbanSlice.reducer;
