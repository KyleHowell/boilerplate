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
import styles from './Kanban.module.css';

export function Kanban() {
  const lists = useSelector(selectLists);
  const dispatch = useDispatch();
  console.log('taco');
  console.log(lists);

  return (
    <div className={styles.wrapper}>
      {
        lists.map(list => {
          return (
            <div className={styles.list} key={list.name}>
              {list.name}
            </div>
          );
        })
      }
    </div>
  );
}
