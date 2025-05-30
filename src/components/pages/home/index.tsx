import { useState } from 'react';
import { Actions } from '@/components/feature/organisms/actions';
import { Heading } from '@/components/feature/organisms/heading';
import { AddInput } from '@/components/feature/organisms/addInput';
import { SearchInput } from '@/components/feature/organisms/searchInput';
import { TodoLists } from '@/components/feature/organisms/todoLists';
import { BulkActions } from '@/components/feature/molecules/bulkActions';
import { useTodo } from '@/hooks/useTodo';
import { useDragDrop } from '@/hooks/useDragDrop';
import type { Todo } from '@/types/todo';

export function PageHome() {
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo, updateTodos } = useTodo();
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [manualOrder, setManualOrder] = useState<string[]>([]);

  const {
    isDragging,
    handleDragStart,
    handleDragEnd,
    handleReorderTodo,
  } = useDragDrop(todos, (newTodos) => {
    updateTodos(newTodos);
    setManualOrder(newTodos.map(todo => todo.id));
  });

  const handleFilterChange = (filterType: string) => {
    setFilterType(filterType);
  };

  const handleSortChange = (sortType: 'createdAt' | 'dueDate') => {
    setSortType(sortType);
    setManualOrder([]); // Reset manual order when changing sort type
  };

  const handleToggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
    setManualOrder([]); // Reset manual order when changing sort order
  };

  const handleSelectAll = () => {
    const newTodos = todos.map(todo => ({
      ...todo,
      completed: !isAllSelected
    }));
    updateTodos(newTodos);
    setIsAllSelected(!isAllSelected);
  };

  const handleDeleteAll = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    updateTodos(newTodos);
    setIsAllSelected(false);
  };

  const filteredTodos = todos.filter((todo) => {
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      if (!todo.text.toLowerCase().includes(searchLower)) {
        return false;
      }
    }

    switch (filterType) {
      case 'completed':
        return todo.completed;
      case 'active':
        return !todo.completed;
      case 'has-due-date':
        return !!todo.dueDate;
      case 'all':
      default:
        return true;
    }
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    // If we have a manual order, use it
    if (manualOrder.length > 0) {
      return manualOrder.indexOf(a.id) - manualOrder.indexOf(b.id);
    }

    // Otherwise use the regular sorting
    const aValue = sortType === 'createdAt' ? a.createdAt : a.dueDate || '';
    const bValue = sortType === 'createdAt' ? b.createdAt : b.dueDate || '';

    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    }
    return bValue.localeCompare(aValue);
  });

  const hasSelectedItems = filteredTodos.some(todo => todo.completed);

  const getEmptyMessage = () => {
    switch (filterType) {
      case 'completed':
        return 'No completed todos.';
      case 'active':
        return 'No active todos.';
      case 'has-due-date':
        return 'No todos with due date.';
      case 'all':
      default:
        return 'No todos yet.';
    }
  };

  return (
    <div className="container max-w-screen-xl mx-auto xl:my-10 font-sans px-6 my-6">
      <div className="flex flex-col xl:gap-10 gap-7 bg-gray-100 rounded-lg shadow-lg xl:p-10 p-6">
        <Heading />
        <AddInput onAdd={addTodo} />
        <SearchInput onSearch={setSearchQuery} />
        <hr className="border border-t border-gray-600 opacity-25" />
        <div className="flex flex-col xl:flex-row md:gap-4 sm:justify-between gap-4 sm:gap-0 items-center">
          <div className="w-full sm:w-auto">
            <BulkActions
              onSelectAll={handleSelectAll}
              onDeleteAll={handleDeleteAll}
              isAllSelected={isAllSelected}
              hasSelectedItems={hasSelectedItems}
            />
          </div>
          <div className="w-full sm:w-auto">
            <Actions
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
              sortOrder={sortOrder}
              onToggleSortOrder={handleToggleSortOrder}
            />
          </div>
        </div>

        {sortedTodos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">{getEmptyMessage()}</p>
          </div>
        ) : (
          <TodoLists
            todos={sortedTodos}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
            onToggleTodo={toggleTodo}
            onReorderTodo={handleReorderTodo}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        )}
      </div>
    </div>
  );
}
