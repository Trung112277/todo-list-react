import { Actions } from '@/components/organisms/actions';
import { AddInput } from '@/components/organisms/addInput';
import { Heading } from '@/components/organisms/heading';
import { TodoLists } from '@/components/organisms/todoLists';

export function PageHome() {
  return (
    <div className="container max-w-screen-xl mx-auto my-10 font-sanspx-12 px-6">
      <div className="flex flex-col gap-10 bg-gray-100 rounded-lg shadow-lg p-10 ">
        <Heading />
        <AddInput />
        <hr className="border border-t border-gray-600 opacity-25" />
        <div className="flex justify-end">
          <Actions />
        </div>
        <TodoLists />
      </div>
    </div>
  );
}
