import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonIcon } from '@/components/ui/buttonIcon';


export function PageDesignSystem() {
  return (
    <div className="container m-auto p-5 font-sans">
      <h1 className="text-6xl font-bold text-center text-primary">Design System</h1>
      <div className="flex gap-[50px] my-10">
        <div className="w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center text-primary">Atoms</h2>
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
            <Label >This is Label</Label>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="text-3xl font-medium min-w-40">Select:</h3>
            <Select defaultValue="select-2">
              <SelectTrigger className="w-[200px]">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="select-1">Select 1</SelectItem>
                <SelectItem value="select-2">Select 2</SelectItem>
                <SelectItem value="select-3">Select 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="text-3xl font-medium min-w-40">Icon:</h3>
            <div className="flex gap-4">
              <div className="flex gap-3 items-center">
                <h4 className="text-xl font-medium">Trash:</h4>
                <ButtonIcon><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
              </div>
              <div className="flex gap-3 items-center">
                <h4 className="text-xl font-medium">Edit:</h4>
                <ButtonIcon><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
              </div>
              <div className="flex gap-3 items-center">
                <h4 className="text-xl font-medium">Date:</h4>
                <ButtonIcon><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
              </div>
              <div className="flex gap-3 items-center">
                <h4 className="text-xl font-medium">Sort:</h4>
                <ButtonIcon><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
              </div>
              <div className="flex gap-3 items-center">
                <h4 className="text-xl font-medium">Index:</h4>
                <ButtonIcon><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-semibold text-center text-primary">Molecules</h2>
        </div>
      </div>
    </div>
  );
}