import { useState } from 'react';

export function useFilterSort() {
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleFilterChange = (newFilterType: string) => {
    setFilterType(newFilterType);
  };

  const handleSortChange = (newSortType: 'createdAt' | 'dueDate') => {
    setSortType(newSortType);
  };

  const handleToggleSortOrder = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  return {
    filterType,
    sortType,
    sortOrder,
    handleFilterChange,
    handleSortChange,
    handleToggleSortOrder,
  };
} 