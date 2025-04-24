import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { Filter } from './filter';
import { Sort } from './sort';
import { ButtonIcon } from '../ui/buttonIcon';
import SortToggleIcon from '../ui/SortToggleIcon';

export function Actions() {
  return (
    <div className="flex gap-3">
      <div className="flex gap-7">
        <Filter />
        <Sort />
      </div>
      <SortToggleIcon />
    </div>
  );
}
