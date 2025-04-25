import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DateItemProps {
  onDateChange?: (date: Date | undefined) => void;
}

export function DateItem({ onDateChange }: DateItemProps) {
  const [date, setDate] = React.useState<Date | undefined>();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateChange?.(selectedDate);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div >
            <Popover>
              <PopoverTrigger asChild>
                <button type="button">
                  <FontAwesomeIcon
                    className={`text-xl font-semibold text-center w-[20px] ${
                      date ? 'text-blue-500' : 'text-primary'
                    }`}
                    icon={faCalendarDays}
                  />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  className="rounded-md border shadow"
                  fromDate={new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Set due date
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}