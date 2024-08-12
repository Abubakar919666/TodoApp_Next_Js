"use client";

import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";


export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (todoIndex: number) => {
    let todoClone = [...todos];
    todoClone.splice(todoIndex, 1);
    setTodos([...todoClone]);
  }

  useEffect(() => {
    console.log("Latest Todos List: ", todos);
  }, [todos]);

  return (
    <>
      <TodoInput
        addTodo={addTodo}
      />
      <TodoList
        todoList={todos}
        deleteTodo={deleteTodo}
      />
    </>
  )
}