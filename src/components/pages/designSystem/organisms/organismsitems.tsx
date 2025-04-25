import { Actions } from '@/components/feature/organisms/actions';
import { AddInput } from '@/components/feature/organisms/addInput';
import { Heading } from '@/components/feature/organisms/heading';
import { TodoLists } from '@/components/feature/organisms/todoLists';

export function OrganismsItems() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
        <Heading />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Add input:</h3>
        <AddInput />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Actions:</h3>
        <Actions />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Todo List:</h3>
        <TodoLists />
      </div>
    </div>
  );
}
