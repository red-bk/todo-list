import React from "react";
import Button from "../button/button";
import { TodoItemProps } from "./model/model";


function TodoItem({ todo, done, onComplete, onRemove, onEdit }: TodoItemProps) {
  const completeTask = () => {
    // if onComplete is not undfined do onComplete method
    onComplete &&  onComplete(todo.id) 
  };

  const removeTask = () => {
    // if onRemove is not undfined do onRemove method
    onRemove && onRemove(todo.id);
  };

  const editTask = () => {
    // if onEdit is not undfined do onEdit method
    onEdit && onEdit(todo.id);
  };

  return (
    <div
      className={
        !done
          ? "bg-sky-100 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:bg-slate-100 transition text-blue-500"
          : "dark:bg-[#615EFC] flex justify-between items-center p-3 gap-2 rounded bg-blue-500 text-white"
      }
    >
      <span className="flex-1">{todo.task}</span>
      {!done && (
        <div className="flex gap-2 transition-opacity">
          <Button type="done" onClick={completeTask} />
          <Button onClick={removeTask} />
          <Button type="edit" onClick={editTask} />
        </div>
      )}
      {done && (
        <div className="dark:bg-[#615EFC] dark:text-white  bg-sky-100 text-center  text-blue-500 flex justify-center items-center p-1">
          <span className="text-blue-500 font-bold dark:text-white">Completed</span>
        </div>
      )}
    </div>
  );
}

export default React.memo(TodoItem);
