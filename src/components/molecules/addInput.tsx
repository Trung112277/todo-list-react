import { Input } from '../ui/input';
import { DateItem } from './date';
import { Button } from '../ui/button';

export function AddInput() {
  return (
    <div className="w-full relative">
      <Input placeholder="Add new..." className="pr-10"></Input>
      <div className="absolute w-fit flex gap-5 right-[1.5rem] top-[50%] transform -translate-y-1/2">
        <DateItem/>
        <Button className="px-6">ADD</Button>
      </div>
    </div>
  );
}
