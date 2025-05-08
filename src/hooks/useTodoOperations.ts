import { useState } from 'react';
import { Todo } from '@/types/todo';

export function useTodoOperations() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string, dueDate?: Date) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate?.toISOString(),
      completedAt: '',
      archived: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date().toISOString() : undefined,
            }
          : todo
      )
    );
  };

  const updateTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
    updateTodos,
  };
} 