import { useState } from 'react';
import { Todo } from '@/types/todo';

export function useFilter(todos: Todo[]) {
  const [filterType, setFilterType] = useState('all');

  const handleFilterChange = (newFilterType: string) => {
    setFilterType(newFilterType);
  };

  const getFilteredTodos = () => {
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
  };

  return {
    filterType,
    handleFilterChange,
    getFilteredTodos,
  };
} 