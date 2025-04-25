import { useState } from 'react';
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
import { format } from 'date-fns';
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

interface FeatureBoxProps {
  createdAt: string;
  onDelete: () => void;
  onEdit: () => void;
}

export function FeatureBox({ createdAt, onDelete, onEdit }: FeatureBoxProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteConfirm = () => {
    setShowDeleteDialog(false);
    onDelete();
  };

  return (
    <>
      <div className="flex flex-col items-end w-fit min-w-[140px]">
        <div className="flex gap-5 items-center w-fit">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ButtonIcon
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                  onClick={onEdit}
                  aria-label="Edit todo"
                >
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
              <TooltipTrigger asChild>
                <ButtonIcon
                  className="text-red-600 hover:text-red-800 transition-colors"
                  onClick={() => setShowDeleteDialog(true)}
                  aria-label="Delete todo"
                >
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
            <TooltipTrigger className="flex items-center gap-3 mt-2">
              <ButtonIcon
                className="text-[10px] bg-gray-500 text-white rounded-full p-0 w-5 h-5 flex justify-center items-center "
                aria-label="Creation date"
              >
                <FontAwesomeIcon icon={faInfo} size="xs" />
              </ButtonIcon>
              <time
                className="font-medium text-gray-500 text-sm"
                dateTime={createdAt}
              >
                {format(new Date(createdAt), 'MMM dd, yyyy')}
              </time>
            </TooltipTrigger>
            <TooltipContent>
              <p>Created at: {format(new Date(createdAt), 'PPpp')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              task and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
