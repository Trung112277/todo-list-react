import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DueDateBox } from './dueDateBox';
import { FeatureBox } from './featureBox';

interface TodoItemProps {
  todo: string;
  id: string;
  dueDate?: string;
  createdAt: string;
  onDelete: (id: string) => void;
}

export function TodoItem({ 
  todo, 
  id, 
  dueDate, 
  createdAt, 
  onDelete 
}: TodoItemProps) {
  return (
    <li className="flex gap-4 items-center w-full">
      <div className="flex gap-3 items-center justify-between w-full">
        <Label className="flex gap-4 items-center w-full">
          <Checkbox />
          <p className="clamp leading-[50px] pl-3">{todo}</p>
        </Label>
        {dueDate && <DueDateBox dueDate={dueDate} />}
      </div>
      <FeatureBox 
        createdAt={createdAt}
        onDelete={() => onDelete(id)}
        onEdit={() => {}}
      />
    </li>
  );
}