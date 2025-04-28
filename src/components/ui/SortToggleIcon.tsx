import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from './buttonIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SortToggleIconProps {
  sortOrder: 'asc' | 'desc';
  onToggleSortOrder: () => void;
}

const SortToggleIcon = ({ sortOrder, onToggleSortOrder }: SortToggleIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ButtonIcon onClick={onToggleSortOrder} className="text-green-500">
            <FontAwesomeIcon
              icon={sortOrder === 'desc' ? faArrowDownShortWide : faArrowUpShortWide}
            />
          </ButtonIcon>
        </TooltipTrigger>
        <TooltipContent>
          <p>{sortOrder === 'desc' ? 'Descending' : 'Ascending'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SortToggleIcon;
