import { TodoItem } from '../molecules/todoItem';
import { Todo } from '../../../types/todo';

interface TodoListsProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}

export function TodoLists({ todos, onDeleteTodo }: TodoListsProps) {
  return (
    <ul className="flex flex-col gap-5">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          id={todo.id}
          todo={todo.text}
          dueDate={todo.dueDate}
          createdAt={todo.createdAt}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}