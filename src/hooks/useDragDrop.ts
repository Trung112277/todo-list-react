import { useState, useCallback } from 'react';
import { Todo } from '@/types/todo';
import { arrayMove } from '@dnd-kit/sortable';

export function useDragDrop(todos: Todo[], onUpdateTodos: (todos: Todo[]) => void) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleReorderTodo = useCallback((activeId: string, overId: string) => {
    const oldIndex = todos.findIndex(todo => todo.id === activeId);
    const newIndex = todos.findIndex(todo => todo.id === overId);
    
    if (oldIndex !== -1 && newIndex !== -1) {
      const reorderedTodos = arrayMove([...todos], oldIndex, newIndex);
      onUpdateTodos(reorderedTodos);
    }
  }, [todos, onUpdateTodos]);

  return {
    isDragging,
    handleDragStart,
    handleDragEnd,
    handleReorderTodo,
  };
} 