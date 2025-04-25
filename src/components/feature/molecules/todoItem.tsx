import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DueDateBox } from './dueDateBox';
import { FeatureBox } from './featureBox';

interface TodoItemProps {
  todo: string;
  dueDate?: string;
  createdAt: string;
}

export function TodoItem({ todo, dueDate, createdAt }: TodoItemProps) {
  return (
    <li className="flex gap-4 items-center w-full">
      <div className="flex gap-3 items-center justify-between w-full">
        <Label className="flex gap-4 items-center w-full">
          <Checkbox />
          <p className="clamp leading-[50px] pl-3">{todo}</p>
        </Label>
        {dueDate && <DueDateBox dueDate={dueDate} />}
      </div>
      <FeatureBox createdAt={createdAt} />
    </li>
  );
}