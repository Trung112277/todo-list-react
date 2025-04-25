import { Actions } from '@/components/feature/organisms/actions';
import { AddInput } from '@/components/feature/organisms/addInput';
import { Heading } from '@/components/feature/organisms/heading';
import { TodoLists } from '@/components/feature/organisms/todoLists';
import { useTodo } from '@/hooks/useTodo';

export function PageHome() {
  const { todos, addTodo, deleteTodo, editTodo  } = useTodo();
  return (
    <div className="container max-w-screen-xl mx-auto my-10 font-sans px-6">
      <div className="flex flex-col gap-10 bg-gray-100 rounded-lg shadow-lg p-10">
        <Heading />
        <AddInput onAdd={addTodo} />
        <hr className="border border-t border-gray-600 opacity-25" />
        <div className="flex justify-end">
          <Actions />
        </div>
        <TodoLists
          todos={todos}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      </div>
    </div>
  );
}
