import { useState, useEffect, useCallback } from 'react';
import { Todo } from '../types/todo';

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text: string, dueDate?: Date) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate?.toISOString()
    };
    setTodos(prev => [newTodo, ...prev]);
  }, []);

  return { todos, addTodo };
};