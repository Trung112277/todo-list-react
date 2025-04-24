import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon } from '../ui/buttonIcon';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
export function DueDateBox() {
  return (
    <div className="flex gap-3 items-center border border-orange-400 px-4 py-2 rounded-md">
      <ButtonIcon className="text-orange-400">
        <FontAwesomeIcon icon={faHourglass} />
      </ButtonIcon>
      <p className="font-medium text-black-500"> 28th Jun 2020</p>
    </div>
  );
}
