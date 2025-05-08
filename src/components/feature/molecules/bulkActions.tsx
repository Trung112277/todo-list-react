import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface BulkActionsProps {
  onSelectAll: () => void;
  onDeleteAll: () => void;
  isAllSelected: boolean;
  hasSelectedItems: boolean;
}

export function BulkActions({
  onSelectAll,
  onDeleteAll,
  isAllSelected,
  hasSelectedItems,
}: BulkActionsProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteConfirm = () => {
    setShowDeleteDialog(false);
    onDeleteAll();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                onClick={onSelectAll}
                className="text-sm w-full sm:w-auto"
              >
                {isAllSelected ? 'Deselect All' : 'Select All'}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isAllSelected ? 'Uncheck all todos' : 'Check all todos'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                onClick={() => setShowDeleteDialog(true)}
                disabled={!hasSelectedItems}
                className="text-sm w-full sm:w-auto"
              >
                Delete Selected
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{hasSelectedItems ? 'Delete all checked todos' : 'No todos selected'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="font-medium text-gray-500 text-sm">
              This action cannot be undone. This will permanently delete all selected tasks.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
} 