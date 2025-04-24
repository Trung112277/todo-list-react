import { Heading } from '@/components/molecules/heading';
import { DateItem } from '@/components/molecules/date';
import { AddInput } from '@/components/molecules/addInput';
import { Filter } from '@/components/molecules/filter';
import { Sort } from '@/components/molecules/sort';
import { Actions } from '@/components/molecules/actions';

export function MoleculeItems() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
        <Heading />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Date:</h3>
        <DateItem />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Add input:</h3>
        <AddInput />
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
        <h3 className="text-3xl font-medium min-w-40">Actions:</h3>
        <Actions />
      </div>
    </div>
  );
}
