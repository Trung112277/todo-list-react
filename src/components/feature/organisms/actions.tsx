import { Filter } from '../molecules/filter';
import { Sort } from '../molecules/sort';
import SortToggleIcon from '../../ui/SortToggleIcon';

interface ActionsProps {
  onFilterChange: (value: string) => void;
  onSortChange: (value: 'createdAt' | 'dueDate') => void;
  sortOrder: 'asc' | 'desc';
  onToggleSortOrder: () => void;
}

export function Actions({ onFilterChange, onSortChange, sortOrder, onToggleSortOrder }: ActionsProps) {
  return (
    <div className="flex md:gap-7 gap-4 items-center flex-col md:flex-row w-full md:w-fit">
      <Filter onFilterChange={onFilterChange} />
      <Sort onSortChange={onSortChange} />
      <SortToggleIcon sortOrder={sortOrder} onToggleSortOrder={onToggleSortOrder} />
    </div>
  );
}

