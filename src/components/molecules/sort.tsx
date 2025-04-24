import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Sort() {
  return (
    <div className="flex gap-3 items-center">
      <p className="font-medium text-gray-500">Sort</p>
      <Select defaultValue="added-date">
        <SelectTrigger className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="added-date">Added date</SelectItem>
          <SelectItem value="due-date">Due date</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
