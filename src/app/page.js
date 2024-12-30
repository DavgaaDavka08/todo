"use client";
import { useState } from "react";
import style from "./page.module.css";

export default function Home() {
  const [printle, setPrintle] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const clickHandler = () => {
    setPrintle([...printle, newTodo]);
  };
  return (
    <div className={style.maidev}>
      <div className={style[`todo-container`]}>
        <h1 className={style.mainText}>To-Do list</h1>
        <div className={style.flex}>
          <input
            className={style.mainInput}
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={style.mainButton} onClick={clickHandler}>
            Add
          </button>
        </div>
        <div className={style.flex2}>
          <button className={style.containerButton1}>All</button>
          <button className={style.containerButton2}>Active</button>
          <button className={style.containerButton3}>Completed</button>
        </div>
        <div>
          <p className={style.undertext}>No tasks yet. Add one above!</p>
        </div>
        {printle.map((todo) => {
          return (
            <div className={style.checkBox}>
              <div className={style.flex3}>
                <input className={style.box} type="checkBox" name="" id="" />
                <p>{todo}</p>
              </div>
              <button>Delete</button>
            </div>
          );
        })}
        <div className={style.footerflex}>
          <p className={style.undertext2}>Powered by</p>
          <p className={style.undertext3}>Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
