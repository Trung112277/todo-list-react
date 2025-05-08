import { Input } from '../../ui/input';
import { Search } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  return (
    <div>
      <div className="w-full relative items-center">
        <Input
          type="text"
          placeholder="Search todos..."
          className="pr-10 md:pr-11 xl:pr-12 "
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute w-fit flex gap-5 xl:right-[1.25rem] md:right-[1rem] right-[0.75rem] top-[50%] transform -translate-y-1/2 items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-pointer">
                  <Search className="h-4 w-4 text-gray-500" />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Search Todo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
} 