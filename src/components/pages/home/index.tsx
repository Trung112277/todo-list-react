import { useState } from 'react';
import { Actions } from '@/components/feature/organisms/actions';
import { Heading } from '@/components/feature/organisms/heading';
import { AddInput } from '@/components/feature/organisms/addInput';
import { TodoLists } from '@/components/feature/organisms/todoLists';
import { useTodo } from '@/hooks/useTodo';
import { Todo } from '@/types/todo';

export function PageHome() {
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo, reorderTodo } = useTodo();
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isDragging, setIsDragging] = useState(false);
  const [manualOrder, setManualOrder] = useState<string[]>([]);

  const handleFilterChange = (filterType: string) => {
    setFilterType(filterType);
    // Reset thứ tự thủ công khi thay đổi bộ lọc
    setManualOrder([]);
  };

  const handleSortChange = (sortType: 'createdAt' | 'dueDate') => {
    setSortType(sortType);
    // Reset thứ tự thủ công khi thay đổi kiểu sắp xếp
    setManualOrder([]);
  };

  const handleToggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
    // Reset thứ tự thủ công khi thay đổi thứ tự sắp xếp
    setManualOrder([]);
  };

  const getFilteredTodos = () => {
    let filtered = todos;
    
    // Áp dụng bộ lọc
    switch (filterType) {
      case 'completed':
        filtered = todos.filter((todo) => todo.completed);
        break;
      case 'active':
        filtered = todos.filter((todo) => !todo.completed);
        break;
      case 'has-due-date':
        filtered = todos.filter((todo) => todo.dueDate);
        break;
    }

    // Nếu có thứ tự thủ công, sử dụng thứ tự đó
    if (manualOrder.length > 0) {
      const orderMap = new Map(manualOrder.map((id, index) => [id, index]));
      return filtered.sort((a, b) => {
        const aIndex = orderMap.get(a.id) ?? Infinity;
        const bIndex = orderMap.get(b.id) ?? Infinity;
        return aIndex - bIndex;
      });
    }

    // Nếu không có thứ tự thủ công, sử dụng sắp xếp tự động
    return filtered.sort((a, b) => {
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
  };

  const handleDragStart = () => {
    setIsDragging(true);
    // Lưu thứ tự hiện tại khi bắt đầu kéo
    if (manualOrder.length === 0) {
      setManualOrder(todos.map(todo => todo.id));
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleReorder = (activeId: string, overId: string) => {
    reorderTodo(activeId, overId);
    // Cập nhật thứ tự thủ công
    setManualOrder(prev => {
      const oldIndex = prev.indexOf(activeId);
      const newIndex = prev.indexOf(overId);
      const newOrder = [...prev];
      const [removed] = newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, removed);
      return newOrder;
    });
  };

  const filteredTodos = getFilteredTodos();

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
        <hr className="border border-t border-gray-600 opacity-25" />
        <div className="flex sm:justify-end justify-center items-center">
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
            onReorderTodo={handleReorder}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
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
