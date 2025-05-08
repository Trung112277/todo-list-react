import { useState } from 'react';
import { Actions } from '@/components/feature/organisms/actions';
import { AddInput } from '@/components/feature/organisms/addInput';
import { Heading } from '@/components/feature/organisms/heading';
import { TodoLists } from '@/components/feature/organisms/todoLists';
import { SearchInput } from '@/components/feature/organisms/searchInput';
import { Todo } from '@/types/todo';

export function OrganismsItems() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Example todo',
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
    },
  ]);
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isDragging, setIsDragging] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTodo = (text: string, dueDate?: Date) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate?.toISOString(),
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleToggleTodo = (id: string) => {
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

  const handleReorderTodo = (activeId: string, overId: string) => {
    setTodos(prev => {
      const oldIndex = prev.findIndex(todo => todo.id === activeId);
      const newIndex = prev.findIndex(todo => todo.id === overId);
      const newTodos = [...prev];
      const [movedTodo] = newTodos.splice(oldIndex, 1);
      newTodos.splice(newIndex, 0, movedTodo);
      return newTodos;
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
        <Heading />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Add input:</h3>
        <AddInput onAdd={handleAddTodo} />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Search input:</h3>
        <SearchInput onSearch={setSearchQuery} />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Actions:</h3>
        <Actions
          onFilterChange={setFilterType}
          onSortChange={setSortType}
          sortOrder={sortOrder}
          onToggleSortOrder={() => setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'))}
        />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Todo List:</h3>
        <TodoLists
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
          onToggleTodo={handleToggleTodo}
          onReorderTodo={handleReorderTodo}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      </div>
    </div>
  );
}
