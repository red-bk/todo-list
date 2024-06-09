import React from "react";
import TodoApp from "./components/todo-app";
import ThemeSwitcher from "./components/theme-switcher";

function App() {
  return (
    <div className="App dark:bg-slate-800 flex flex-col items-center h-full">
        <ThemeSwitcher/>
        <TodoApp/>
    </div> 
  );
}

export default App;
