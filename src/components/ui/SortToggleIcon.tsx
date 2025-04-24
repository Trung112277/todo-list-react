import React, { useState } from 'react';
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

const SortToggleIcon = () => {
  const [asc, setAsc] = useState(true);

  const toggleSort = () => {
    setAsc((prev) => !prev);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ButtonIcon onClick={toggleSort} className="text-green-500">
            <FontAwesomeIcon
              icon={asc ? faArrowDownShortWide : faArrowUpShortWide}
            />
          </ButtonIcon>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ascending</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SortToggleIcon;
