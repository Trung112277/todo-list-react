import { useState, useRef, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DueDateBox } from './dueDateBox';
import { FeatureBox } from './featureBox';

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
    <li className="flex gap-4 items-center w-full group">
      <div className="flex gap-3 items-center justify-between w-full">
        <Label className="flex gap-4 items-center w-full">
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
            <p className="clamp leading-[50px] pl-3 group-hover:bg-gray-100 transition-colors rounded-md">
              {todo}
            </p>
          )}
        </Label>
        {dueDate && (
          <DueDateBox
            dueDate={dueDate}
            completed={completed}
            completedAt={completedAt}
          />
        )}
      </div>
      <FeatureBox
        createdAt={createdAt}
        onDelete={() => onDelete(id)}
        onEdit={handleEdit}
      />
    </li>
  );
}
