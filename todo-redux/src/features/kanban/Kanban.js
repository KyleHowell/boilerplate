import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addList, editList, deleteList, addNote, editNote, deleteNote, selectLists} from './kanbanSlice';
import ListHeader from './ListHeader';
import Note from './Note';
import AddNote from './AddNote';
import AddList from './AddList';
import styles from './Kanban.module.css';

export function Kanban() {
  const lists = useSelector(selectLists);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      {
        lists.map(list => {
          return (
            <div className={styles.list} key={list.name}>
              <ListHeader
                name={list.name}
                onDelete={p => dispatch(deleteList(p))}
                onSubmit={p => dispatch(editList(p))}
              />
              {
                list.notes.map(note => {
                  return (
                    <Note
                      key={note}
                      list={list.name}
                      onDelete={p => dispatch(deleteNote(p))}
                      onSubmit={p => dispatch(editNote(p))}
                      note={note}
                    />
                  );
                })
              }
            <AddNote list={list.name} onSubmit={p => dispatch(addNote(p))}/>
            </div>
          );
        })
      }
      <div className={styles.list}>
        <AddList onSubmit={p => dispatch(addList(p))}/>
      </div>
    </div>
  );
}
