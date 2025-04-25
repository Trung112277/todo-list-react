import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon } from '../../ui/buttonIcon';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { format } from 'date-fns';

interface DueDateBoxProps {
  dueDate: string;
}

export function DueDateBox({ dueDate }: DueDateBoxProps) {
  const formattedDate = format(new Date(dueDate), 'do MMM yyyy');
  
  return (
    <div className="flex gap-3 items-center border border-orange-400 px-4 py-2 rounded-md w-fit min-w-[170px] bg-white">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ButtonIcon className="text-orange-400">
              <FontAwesomeIcon icon={faHourglass} />
            </ButtonIcon>
          </TooltipTrigger>
          <TooltipContent>
            <p>Due on {formattedDate}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <time className="font-medium text-black-500" dateTime={dueDate}>
        {formattedDate}
      </time>
    </div>
  );
}