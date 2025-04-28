import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SortProps {
  onSortChange: (value: 'createdAt' | 'dueDate') => void;
}

export function Sort({ onSortChange }: SortProps) {
  return (
    <div className="flex gap-3 items-center">
      <p className="font-medium text-gray-500">Sort by</p>
      <Select defaultValue="createdAt" onValueChange={(value) => onSortChange(value as 'createdAt' | 'dueDate')}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="createdAt">Added Date</SelectItem>
          <SelectItem value="dueDate">Due Date</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
