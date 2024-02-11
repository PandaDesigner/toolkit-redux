import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const [TodoId, setTodoId] = useState(1);
  const { data: todos = [], isLoading: isLoadings } = useGetTodosQuery();
  const { data: todo = [], isLoading: isLoadingsTodoById } =
    useGetTodoByIdQuery(TodoId);

  const handlerNextTodo = () => setTodoId((prev) => prev + 1);
  const handlerPrevTodo = () => todo !== 1 && setTodoId((prev) => prev - 1);
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoadingsTodoById ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={() => handlerPrevTodo()}>Prev Todo</button>
      <button style={{ marginLeft: 8 }} onClick={() => handlerNextTodo()}>
        Next Todo
      </button>
      {/*   <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? '[X] ' : `[${'-'}] `} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
