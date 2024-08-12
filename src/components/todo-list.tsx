"use client";

type TodoListType = {
    todoList: string[];
    deleteTodo: (todoIndex: number) => void;
}

export default function TodoList({ todoList, deleteTodo }: TodoListType) {
    return (
        <>
            {todoList.map((todo, index) => (
                <div key={todo + index}>
                    <b>{todo}</b>
                    <button>Edit</button> 
                    <button onClick={
                        () => { deleteTodo(index) }}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}