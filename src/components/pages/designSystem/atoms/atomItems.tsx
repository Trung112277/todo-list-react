import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPencil,
  faInfo,
  faHourglass,
  faArrowDownShortWide,
  faSquareCheck
} from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ButtonIcon } from '@/components/ui/buttonIcon';



export function AtomItems() {
  return (
    <div className='flex flex-col gap-6'>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Button:</h3>
        <Button>Button</Button>
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Input:</h3>
        <Input placeholder="text..." />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Checkbox:</h3>
        <Checkbox />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Label:</h3>
        <Label>This is Label</Label>
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Select:</h3>
        <Select defaultValue="select-2">
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="select-1">Select 1</SelectItem>
            <SelectItem value="select-2">Select 2</SelectItem>
            <SelectItem value="select-3">Select 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Icon button:</h3>
        <div className="flex gap-4 flex-wrap justify-between">
          <div className="flex gap-3 items-center">
            <h4 className="text-xl font-medium">Trash:</h4>
            <ButtonIcon className="text-red-600">
              <FontAwesomeIcon icon={faTrashCan} />
            </ButtonIcon>
          </div>
          <div className="flex gap-3 items-center">
            <h4 className="text-xl font-medium">Edit:</h4>
            <ButtonIcon className="text-blue-400">
              <FontAwesomeIcon icon={faPencil} />
            </ButtonIcon>
          </div>
          <div className="flex gap-3 items-center">
            <h4 className="text-xl font-medium">Date:</h4>
            <ButtonIcon className="text-orange-400">
              <FontAwesomeIcon icon={faHourglass} />
            </ButtonIcon>
          </div>
          <div className="flex gap-3 items-center">
            <h4 className="text-xl font-medium">Sort:</h4>
            <ButtonIcon className="text-green-500">
              <FontAwesomeIcon icon={faArrowDownShortWide} />
            </ButtonIcon>
          </div>
          <div className="flex gap-3 items-center">
            <h4 className="text-xl font-medium">Infor:</h4>
            <ButtonIcon className="text-[10px] bg-gray-500 rounded-[50%] p-0 w-5 h-5 flex justify-center items-center">
              <FontAwesomeIcon icon={faInfo} />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Icon:</h3>
        <FontAwesomeIcon className="text-6xl font-bold text-center text-primary" icon={faSquareCheck} />
      </div>
    </div>
  );
}
