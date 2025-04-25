import { DateItem } from '@/components/feature/molecules/date';
import { AddInput } from '@/components/feature/organisms/addInput';
import { Filter } from '@/components/feature/molecules/filter';
import { Sort } from '@/components/feature/molecules/sort';
import { Actions } from '@/components/feature/organisms/actions';
import { DueDateBox } from '@/components/feature/molecules/dueDateBox';
import { FeatureBox } from '@/components/feature/molecules/featureBox';
import { TodoItem } from '@/components/feature/molecules/todoItem';

export function MoleculeItems() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Date:</h3>
        <DateItem />
      </div>

      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Filter Select:</h3>
        <Filter />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Sort Select:</h3>
        <Sort />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Due on date:</h3>
        <DueDateBox />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Feature box:</h3>
        <FeatureBox />
      </div>
      <div className="flex flex-col  gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40 text">List:</h3>
        <TodoItem todo={'Todo List'} />
      </div>
    </div>
  );
}
