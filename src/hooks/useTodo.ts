import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, dueDate?: string) => {
    setTodos([...todos, {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate
    }]);
  };

  return { todos, addTodo };
};