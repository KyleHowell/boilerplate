import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addList,
  editList,
  addNote,
  editNote,
  moveNote,
  selectLists,
} from './kanbanSlice';
import ListHeader from './ListHeader';
import Note from './Note';
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
                onSubmit={p => dispatch(editList(p))}
              />
              {
                list.notes.map(note => {
                  return (
                    <Note
                      key={note}
                      list={list.name}
                      onSubmit={p => dispatch(editNote(p))}
                      note={note}
                    />
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}
