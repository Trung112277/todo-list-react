import { useState, useRef, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DueDateBox } from './dueDateBox';
import { FeatureBox } from './featureBox';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
  id: string;
  todo: string;
  dueDate?: string;
  createdAt: string;
  completed: boolean;
  completedAt: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onToggle: (id: string) => void;
}

export function TodoItem({
  id,
  todo,
  dueDate,
  createdAt,
  completed,
  completedAt,
  onDelete,
  onEdit,
  onToggle,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim() && editedText !== todo) {
      onEdit(id, editedText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditedText(todo);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex gap-4 items-center w-full group flex-col md:flex-row"
    >
      <div className="flex gap-3 items-center justify-between w-full flex-col sm:flex-row">
        <Label className="flex gap-4 items-center w-full">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FontAwesomeIcon icon={faGripVertical} />
          </div>
          <Checkbox checked={completed} onCheckedChange={() => onToggle(id)} />
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              className="pl-3 py-2 border-b-2 border-blue-500 bg-blue-50 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          ) : (
            <p className="clamp leading-[50px] md:pl-3 pl-0 group-hover:bg-gray-100 transition-colors rounded-md">
              {todo}
            </p>
          )}
        </Label>
        <DueDateBox
          dueDate={dueDate}
          completed={completed}
          completedAt={completedAt}
        />
      </div>
      <FeatureBox
        createdAt={createdAt}
        onDelete={() => onDelete(id)}
        onEdit={handleEdit}
      />
      <hr className="border border-t border-gray-400 opacity-25 w-full md:hidden" />
    </li>
  );
}
