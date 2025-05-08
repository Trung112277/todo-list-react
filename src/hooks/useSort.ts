import { useState } from 'react';
import { Todo } from '@/types/todo';

export function useSort(todos: Todo[]) {
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSortChange = (newSortType: 'createdAt' | 'dueDate') => {
    setSortType(newSortType);
  };

  const handleToggleSortOrder = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  const getSortedTodos = () => {
    return [...todos].sort((a, b) => {
      const aValue = sortType === 'createdAt' ? a.createdAt : a.dueDate || '';
      const bValue = sortType === 'createdAt' ? b.createdAt : b.dueDate || '';

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      }
      return bValue.localeCompare(aValue);
    });
  };

  return {
    sortType,
    sortOrder,
    handleSortChange,
    handleToggleSortOrder,
    getSortedTodos,
  };
} 