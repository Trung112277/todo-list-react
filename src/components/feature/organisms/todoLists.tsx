import { TodoItem } from '../molecules/todoItem';
import { Todo } from '../../../types/todo';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';

interface TodoListsProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
  onToggleTodo: (id: string) => void;
  onReorderTodo: (activeId: string, overId: string) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}

export function TodoLists({
  todos,
  onDeleteTodo,
  onEditTodo,
  onToggleTodo,
  onReorderTodo,
  onDragStart,
  onDragEnd,
}: TodoListsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeTodo = activeId ? todos.find(todo => todo.id === activeId) : null;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    onDragStart();
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      onReorderTodo(active.id as string, over.id as string);
    }
    
    setActiveId(null);
    onDragEnd();
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={todos.map((todo) => todo.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className="flex flex-col md:gap-5 gap-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.text}
              dueDate={todo.dueDate}
              createdAt={todo.createdAt}
              completed={todo.completed}
              onDelete={onDeleteTodo}
              onEdit={onEditTodo}
              onToggle={onToggleTodo}
              completedAt={todo.completedAt || ''}
            />
          ))}
        </ul>
      </SortableContext>
      <DragOverlay>
        {activeTodo ? (
          <div className="opacity-50">
            <TodoItem
              id={activeTodo.id}
              todo={activeTodo.text}
              dueDate={activeTodo.dueDate}
              createdAt={activeTodo.createdAt}
              completed={activeTodo.completed}
              onDelete={onDeleteTodo}
              onEdit={onEditTodo}
              onToggle={onToggleTodo}
              completedAt={activeTodo.completedAt || ''}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
