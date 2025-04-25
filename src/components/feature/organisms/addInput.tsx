import { Input } from '../../ui/input';
import { DateItem } from '../molecules/date';
import { Button } from '../../ui/button';
import { Alert, AlertDescription, AlertTitle } from '../../ui/alert';
import { AlertCircle, Terminal } from 'lucide-react';

export function AddInput() {
  return (
    <div>
      <form action="" className="w-full relative items-center">
        <Input type="text" placeholder="Add new..." className="pr-36"></Input>
        <div className="absolute w-fit flex gap-5 right-[1.25rem] top-[50%] transform -translate-y-1/2">
          <DateItem />
          <Button className="px-6" type="submit">
            ADD
          </Button>
        </div>
      </form>
      <Alert variant="destructive" className="mt-5 w-fit">
        <AlertCircle className="h-4 w-4 my-auto" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          You have error
        </AlertDescription>
      </Alert>
    </div>
  );
}
