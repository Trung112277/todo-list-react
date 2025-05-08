import { useState } from 'react';
import { Todo } from '@/types/todo';
import { arrayMove } from '@dnd-kit/sortable';

export function useDragDrop(todos: Todo[], onUpdateTodos: (todos: Todo[]) => void) {
  const [isDragging, setIsDragging] = useState(false);
  const [manualOrder, setManualOrder] = useState<string[]>([]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleReorderTodo = (activeId: string, overId: string) => {
    if (manualOrder.length === 0) {
      setManualOrder(todos.map(todo => todo.id));
    }

    const oldIndex = manualOrder.indexOf(activeId);
    const newIndex = manualOrder.indexOf(overId);
    const newOrder = [...manualOrder];
    const [movedId] = newOrder.splice(oldIndex, 1);
    newOrder.splice(newIndex, 0, movedId);
    setManualOrder(newOrder);

    const reorderedTodos = newOrder
      .map(id => todos.find(todo => todo.id === id))
      .filter((todo): todo is Todo => todo !== undefined);
    onUpdateTodos(reorderedTodos);
  };

  return {
    isDragging,
    handleDragStart,
    handleDragEnd,
    handleReorderTodo,
  };
} 