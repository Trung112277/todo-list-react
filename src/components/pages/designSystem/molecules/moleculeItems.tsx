import { useState } from 'react';
import { DateItem } from '@/components/feature/molecules/date';
import { Filter } from '@/components/feature/molecules/filter';
import { Sort } from '@/components/feature/molecules/sort';
import { DueDateBox } from '@/components/feature/molecules/dueDateBox';
import { FeatureBox } from '@/components/feature/molecules/featureBox';
import { TodoItem } from '@/components/feature/molecules/todoItem';
import { BulkActions } from '@/components/feature/molecules/bulkActions';

export function MoleculeItems() {
  const [filterType, setFilterType] = useState('all');
  const [sortType, setSortType] = useState<'createdAt' | 'dueDate'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [hasSelectedItems, setHasSelectedItems] = useState(false);

  const exampleTodo = {
    id: '1',
    todo: 'Example todo',
    completed: false,
    createdAt: new Date().toISOString(),
    dueDate: new Date().toISOString(),
    completedAt: '',
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = () => {};

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Date:</h3>
        <DateItem />
      </div>

      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Filter Select:</h3>
        <Filter onFilterChange={setFilterType} />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Sort Select:</h3>
        <Sort onSortChange={setSortType} />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Due on date:</h3>
        <DueDateBox
          dueDate={exampleTodo.dueDate}
          completed={exampleTodo.completed}
          completedAt={exampleTodo.completedAt}
        />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Feature box:</h3>
        <FeatureBox
          createdAt={exampleTodo.createdAt}
          onDelete={noop}
          onEdit={noop}
        />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Bulk actions:</h3>
        <BulkActions
          onSelectAll={() => setIsAllSelected(!isAllSelected)}
          onDeleteAll={noop}
          isAllSelected={isAllSelected}
          hasSelectedItems={hasSelectedItems}
        />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40 text">List:</h3>
        <TodoItem
          {...exampleTodo}
          onDelete={noop}
          onEdit={noop}
          onToggle={noop}
        />
      </div>
    </div>
  );
}
