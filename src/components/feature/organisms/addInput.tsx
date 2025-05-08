import { Input } from '../../ui/input';
import { DateItem } from '../molecules/date';
import { Button } from '../../ui/button';
import { Alert, AlertDescription, AlertTitle } from '../../ui/alert';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface AddInputProps {
  onAdd: (text: string, dueDate?: Date) => void;
}

export function AddInput({ onAdd }: AddInputProps) { 
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) {
      setError("Task cannot be empty");
      return;
    }

    onAdd(inputValue.trim(), dueDate); 
    setInputValue('');
    setDueDate(undefined);
    setError(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full relative items-center">
        <Input
          type="text" 
          placeholder="Add new..." 
          className="pr-36 md:pr-40 xl:pr-40"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="absolute w-fit flex gap-5 xl:right-[1.25rem] md:right-[1rem] right-[0.75rem] top-[50%] transform -translate-y-1/2 items-center">
          <DateItem onDateChange={setDueDate} />
          <Button className="px-6" type="submit">
            ADD
          </Button>
        </div>
      </form>
      
      {error && (
        <Alert variant="destructive" className="mt-5 w-fit">
          <AlertCircle className="h-4 w-4 my-auto" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}