import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon } from '../../ui/buttonIcon';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  format,
  isBefore,
  isToday,
  isTomorrow,
  differenceInDays,
} from 'date-fns';

interface DueDateBoxProps {
  dueDate: string;
}

export function DueDateBox({ dueDate }: DueDateBoxProps) {
  const due = new Date(dueDate);
  const today = new Date();

  const isOverdue = isBefore(due, today) && !isToday(due);
  const isDueToday = isToday(due);
  const isDueTomorrow = isTomorrow(due);
  const isDueSoon = !isOverdue && differenceInDays(due, today) <= 3;

  let boxStyle = '';
  let statusText = '';
  let iconColor = '';

  if (isOverdue) {
    boxStyle = 'bg-red-50/80 border-red-400 text-red-400 animate-pulse';
    statusText = 'Overdue!';
    iconColor = 'text-red-500';
  } else if (isDueToday) {
    boxStyle = 'bg-amber-100/80 border-amber-400 text-amber-400';
    statusText = 'Due today!';
    iconColor = 'text-amber-400';
  } else if (isDueTomorrow) {
    boxStyle = 'bg-amber-50/80 border-amber-300 text-amber-300';
    statusText = 'Due tomorrow';
    iconColor = 'text-amber-300';
  } else if (isDueSoon) {
    boxStyle = 'bg-yellow-50/80 border-yellow-300 text-yellow-300';
    statusText = `Due in ${differenceInDays(due, today)} days`;
    iconColor = 'text-yellow-300';
  } else {
    boxStyle = 'bg-white border-orange-400 text-orange-400';
    statusText = 'Upcoming';
    iconColor = 'text-orange-400';
  }

  return (
    <div
      className={`flex gap-3 items-center border px-4 py-2 rounded-md w-fit min-w-[170px] transition-colors ${boxStyle}`}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ButtonIcon
              className={`${iconColor} hover:scale-110 transition-transform`}
            >
              <FontAwesomeIcon
                icon={faHourglass}
                shake={isOverdue || isDueToday}
              />
            </ButtonIcon>
          </TooltipTrigger>
          <TooltipContent side="top">
            <div className="flex flex-col">
              <span className="font-medium">{statusText}</span>
              <span className="text-xs opacity-80">
                {format(due, 'PPPPpp')}
              </span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex flex-col'>
        <time className="font-medium" dateTime={dueDate}>
          {format(due, 'do MMM yyyy')}
        </time>

        {(isOverdue || isDueToday || isDueSoon) && (
          <span className="text-xs font-bold whitespace-nowrap text-center">
            {isOverdue
              ? '(Overdue)'
              : isDueToday
              ? '(Today!)'
              : isDueTomorrow
              ? '(Tomorrow)'
              : `(${differenceInDays(due, today)} days left)`}
          </span>
        )}
      </div>
    </div>
  );
}
