import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { z } from 'zod';
import { nanoid } from 'nanoid';

export const todoSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});
export type Todo = z.infer<typeof todoSchema>;

export const loader = async () => {
  const todos = [
    { id: '1', title: '既存Todo1', completed: false },
    { id: '2', title: '既存Todo2', completed: false },
    { id: '3', title: '既存Todo3', completed: true },
  ];
  return Response.json(todos);
};
export const action = async () => {
  return Response.json(200);
};

export default function Todo() {
  const initialTodos = useLoaderData<Todo[]>();
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newTask = { id: nanoid(), title: newTodo, completed: false };
    setTodos((prev) => [...prev, newTask]);
    setNewTodo('');
  };
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいタスク..."
        />
        <button onClick={addTodo}>追加</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>check</button>
            <li>{todo.title}</li>
            <button onClick={() => toggleTodo(todo.id)}>toggle</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
