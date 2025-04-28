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

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id 
        ? { 
            ...todo, 
            completed: !todo.completed,
            completedAt: !todo.completed ? new Date().toISOString() : undefined
          } 
        : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const editTodo = useCallback((id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  // ✅ Hàm lọc todos (filterTodos)
  const filterTodos = useCallback((filterType: string) => {
    switch (filterType) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'has-due-date':
        return todos.filter(todo => todo.dueDate);
      case 'all':
      default:
        return todos;
    }
  }, [todos]);

  return { todos, addTodo, deleteTodo, editTodo, toggleTodo, filterTodos };
};
