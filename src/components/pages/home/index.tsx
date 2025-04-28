import { useState } from 'react';
import { Actions } from '@/components/feature/organisms/actions';
import { Heading } from '@/components/feature/organisms/heading';
import { AddInput } from '@/components/feature/organisms/addInput';
import { TodoLists } from '@/components/feature/organisms/todoLists';
import { useTodo } from '@/hooks/useTodo';
import { Todo } from '@/types/todo';
export function PageHome() {
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useTodo();
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>(
    'createdAt'
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleFilterChange = (filterType: string) => {
    setFilterType(filterType);
  };

  const handleSortChange = (sortType: 'createdAt' | 'dueDate') => {
    setSortType(sortType);
  };

  const handleToggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const getFilteredTodos = () => {
    switch (filterType) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'has-due-date':
        return todos.filter((todo) => todo.dueDate);
      case 'all':
      default:
        return todos;
    }
  };

  const sortTodos = (todos: Todo[]) => {
    const sorted = [...todos].sort((a, b) => {
      const aDate =
        sortType === 'createdAt'
          ? new Date(a.createdAt)
          : a.dueDate
          ? new Date(a.dueDate)
          : new Date(0);
      const bDate =
        sortType === 'createdAt'
          ? new Date(b.createdAt)
          : b.dueDate
          ? new Date(b.dueDate)
          : new Date(0);
      return sortOrder === 'desc'
        ? bDate.getTime() - aDate.getTime()
        : aDate.getTime() - bDate.getTime();
    });

    return sorted;
  };

  const filteredTodos = sortTodos(getFilteredTodos());

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
    <div className="container max-w-screen-xl mx-auto my-10 font-sans px-6">
      <div className="flex flex-col gap-10 bg-gray-100 rounded-lg shadow-lg p-10">
        <Heading />
        <AddInput onAdd={addTodo} />
        <hr className="border border-t border-gray-600 opacity-25" />
        <div className="flex justify-end items-center">
          <Actions
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            sortOrder={sortOrder}
            onToggleSortOrder={handleToggleSortOrder}
          />
        </div>

        {filteredTodos.length > 0 ? (
          <TodoLists
            todos={filteredTodos}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
            onToggleTodo={toggleTodo}
          />
        ) : (
          <div className="text-center text-gray-500 py-10">
            {getEmptyMessage()}
          </div>
        )}
      </div>
    </div>
  );
}
