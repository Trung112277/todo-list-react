import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon } from '../../ui/buttonIcon';
import { faHourglass, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
  dueDate?: string;
  completed?: boolean;
  completedAt?: string;
}

export function DueDateBox({ dueDate, completed, completedAt }: DueDateBoxProps) {
  if (completed) {
    return (
      <div className="flex gap-3 items-center border px-4 py-2 rounded-md sm:w-fit sm:min-w-[170px] bg-green-50 border-green-600 text-green-600 transition-colors w-full max-w-[170px]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ButtonIcon className="text-green-600 hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faCheckCircle} />
              </ButtonIcon>
            </TooltipTrigger>
            <TooltipContent side="top">
              <div className="flex flex-col">
                <span className="font-medium sm:text-base text-sm">Completed!</span>
                {completedAt && (
                  <span className="sm:text-xs text-xs opacity-80">
                    {format(new Date(completedAt), 'PPPPpp')}
                  </span>
                )}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex flex-col">
          <span className="font-medium sm:text-base text-sm">Completed</span>
          {completedAt && (
            <span className="sm:text-xs text-xs font-bold whitespace-nowrap text-center">
              {format(new Date(completedAt), 'do MMM yyyy')}
            </span>
          )}
        </div>
      </div>
    );
  }

  if (!dueDate) return null;

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
    boxStyle = 'bg-red-50/80 border-red-400 text-red-400 animate-pulse sm:text-base text-sm';
    statusText = 'Overdue!';
    iconColor = 'text-red-500';
  } else if (isDueToday) {
    boxStyle = 'bg-amber-100/80 border-amber-400 text-amber-400 sm:text-base text-sm';
    statusText = 'Due today!';
    iconColor = 'text-amber-400';
  } else if (isDueTomorrow) {
    boxStyle = 'bg-amber-50/80 border-amber-300 text-amber-300 sm:text-base text-sm';
    statusText = 'Due tomorrow';
    iconColor = 'text-amber-300';
  } else if (isDueSoon) {
    boxStyle = 'bg-yellow-50/80 border-yellow-300 text-yellow-300 sm:text-base text-sm';
    statusText = `Due in ${differenceInDays(due, today)} days`;
    iconColor = 'text-yellow-300';
  } else {
    boxStyle = 'bg-white border-orange-400 text-orange-400 sm:text-base text-sm';
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
              <span className="sm:text-xs text-xs opacity-80">
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
          <span className="sm:text-xs text-xs font-bold whitespace-nowrap text-center">
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