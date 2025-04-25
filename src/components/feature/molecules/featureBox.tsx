import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPencil,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from '../../ui/buttonIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function FeatureBox() {
  return (
    <div className="flex flex-col items-end w-fit min-w-[140px]">
      <div className="flex gap-5 items-center w-fit ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ButtonIcon className="text-blue-400">
                <FontAwesomeIcon icon={faPencil} />
              </ButtonIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit todo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ButtonIcon className="text-red-600">
                <FontAwesomeIcon icon={faTrashCan} />
              </ButtonIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete todo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex items-center gap-3">
            <ButtonIcon className="text-[10px] bg-gray-500 rounded-[50%] p-0 w-5 h-5 flex justify-center items-center">
              <FontAwesomeIcon icon={faInfo} />
            </ButtonIcon>
            <p className="font-medium text-gray-500">28th Jun 2020</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Created date</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
