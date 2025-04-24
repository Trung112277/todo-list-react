import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';

export function DateItem() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <FontAwesomeIcon
            className="text-xl font-semibold text-center text-primary w-[20px]"
            icon={faCalendarDays}
          />
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
