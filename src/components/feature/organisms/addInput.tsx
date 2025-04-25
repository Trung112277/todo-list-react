import { Input } from '../../ui/input';
import { DateItem } from '../molecules/date';
import { Button } from '../../ui/button';

export function AddInput() {
  return (
    <form action="" className="w-full relative items-center">
      <Input type='text' placeholder="Add new..." className="pr-36"></Input>
      <div className="absolute w-fit flex gap-5 right-[1.25rem] top-[50%] transform -translate-y-1/2">
        <DateItem />
        <Button className="px-6" type="submit">ADD</Button>
      </div>
    </form>
  );
}
