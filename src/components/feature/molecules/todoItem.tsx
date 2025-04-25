import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DueDateBox } from './dueDateBox';
import { FeatureBox } from './featureBox';

interface ListProps {
  todo: string;
}

export function TodoItem(props: { todo: string }) {
  return (
    <li className="flex gap-4 items-center w-full">
      <div className="flex gap-3 items-center justify-between w-full">
        <Label className="flex gap-4 items-center w-full">
          <Checkbox />
          <p className="clamp leading-[50px] pl-3">{props.todo}</p>
        </Label>
        <DueDateBox />
      </div>
      <FeatureBox />
    </li>
  );
}
