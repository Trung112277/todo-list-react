import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterProps {
  onFilterChange: (value: string) => void;
}

export function Filter({ onFilterChange }: FilterProps) {
  return (
    <div className="flex gap-3 items-center">
      <p className="font-medium text-gray-500">Filter</p>
      <Select defaultValue="all" onValueChange={onFilterChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="has-due-date">Has due date</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}