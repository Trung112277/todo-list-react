import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { Filter } from '../molecules/filter';
import { Sort } from '../molecules/sort';
import { ButtonIcon } from '../../ui/buttonIcon';
import SortToggleIcon from '../../ui/SortToggleIcon';

interface ActionsProps {
  onFilterChange: (value: string) => void;
}

export function Actions({ onFilterChange }: ActionsProps) {
  return (
    <div className="flex gap-3">
      <div className="flex gap-7">
        <Filter onFilterChange={onFilterChange} />
        <Sort />
      </div>
      <SortToggleIcon />
    </div>
  );
}